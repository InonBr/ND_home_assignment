import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import CardFooter from 'components/Card/CardFooter';
import CardHeader from 'components/Card/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import CardBody from 'components/Card/CardBody';
import GridContainer from 'components/Grid/GridContainer';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
};

const useStyles = makeStyles(styles);

const Register = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      username,
      email,
      firstName,
      lastName,
      password,
      passwordConfirm,
    };

    console.log(newUser);
  };

  return (
    <>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color='primary'>
            <h4 className={classes.cardTitleWhite}>Register Form</h4>
          </CardHeader>

          <CardBody>
            <form onSubmit={(event) => handleSubmit(event)}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='username'
                    label='Username'
                    type='text'
                    id='username'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onInput={(event) => setUsername(event.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='email'
                    label='Email address'
                    type='text'
                    id='email'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onInput={(event) => setEmail(event.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='firstName'
                    label='First Name'
                    type='text'
                    id='firstName'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onInput={(event) => setFirstName(event.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='lastName'
                    label='Last Name'
                    type='text'
                    id='lastName'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onInput={(event) => setLastName(event.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onInput={(event) => setPassword(event.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='passwordConfirm'
                    label='Password Confirm'
                    type='password'
                    id='passwordConfirm'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    onInput={(event) => setPasswordConfirm(event.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <Grid item xs={12} sm={6}>
                  <CardFooter>
                    <Button color='primary' type='submit'>
                      Register
                    </Button>
                  </CardFooter>
                </Grid>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </>
  );
};

export default Register;
