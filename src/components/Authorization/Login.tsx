import firebase from 'firebase';
import React from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { authSelector } from '../../selectors/auth-selectors';

const Login = () => {
  const auth = useSelector(authSelector);

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const gitHubProvider = new firebase.auth.GithubAuthProvider();

  const loginGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
  };
  const loginFacebook = async () => {
    await auth.signInWithPopup(facebookProvider);
  };
  const loginGitHub = async () => {
    await auth.signInWithPopup(gitHubProvider);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          style={{ width: 400, background: 'lightgray' }}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button onClick={loginGoogle} variant="outlined">
              Enter with Google
            </Button>
            <Button onClick={loginFacebook} variant="outlined">
              Enter with Facebook
            </Button>
            <Button onClick={loginGitHub} variant="outlined">
              Enter with GitHub
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
