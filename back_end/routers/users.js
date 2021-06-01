require('dotenv').config();
const express = require('express');
const router = new express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post(
  '/register',
  [
    check('username', 'Username is required').trim().not().isEmpty(),
    check('firstName', 'Please enter first name').trim().not().isEmpty(),
    check('lastName', 'Please enter last name').trim().not().isEmpty(),
    check('email', 'Please includ a valid email').trim().isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
      .trim()
      .isLength({
        min: 6,
      }),
    check('passwordConfirm').custom((passwordConfirm, { req }) => {
      if (req.body.password !== passwordConfirm) {
        throw new Error("Passwords don't match");
      } else {
        return passwordConfirm;
      }
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      /**
       * if there are errors return 400 (bed request);
       */
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { firstName, lastName, username, email } = req.body;

      const password = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password,
      });

      await newUser.save();

      console.log(newUser);

      const token = jwt.sign(
        {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          username: newUser.username,
          email: newUser.email,
          city: newUser.city,
          country: newUser.country,
          postalCode: newUser.postalCode,
        },
        process.env.TOKEN
      );

      return res.status(200).json({
        msg: 'user saved successfully',
        token,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ err: 'Server error', message: err.message });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Please includ a valid email').trim().isEmail(),
    check('password', 'Please enter a valid password').trim().not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      /**
       * if there are errors return 400 (bed request);
       */
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'invalid credentials' });
      }

      const compare = await bcrypt.compare(password, user.password);

      if (!compare) {
        return res.status(400).json({ msg: 'invalid credentials' });
      }

      const token = jwt.sign(
        {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          city: user.city,
          country: user.country,
          postalCode: user.postalCode,
        },
        process.env.TOKEN
      );

      return res.status(200).json({
        msg: 'user logged in successfully',
        token,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ err: 'Server error', message: err.message });
    }
  }
);

module.exports = router;
