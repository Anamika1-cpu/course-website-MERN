import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  
  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
          <Heading children={'Welcome to Course bundler'} />
          <FormControl isRequired width={'full'}>
            <Box>
              <FormLabel my={'4'}>Email address</FormLabel>
              <Input
                type="email"
                placeholder="abc@gmail.com"
                id="email"
                onChange={e => setEmail(e.target.value)}
                focusBorderColor="yellow.500"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </Box>
            <Box>
              <FormLabel my={'4'}>Password</FormLabel>
              <Input
                type="password"
                placeholder="enter your password here"
                id="password"
                onChange={e => setPassword(e.target.value)}
                focusBorderColor="yellow.500"
              />
              <FormHelperText>
                Create strong password,eg: abdbm1@74kdso$0sdf
              </FormHelperText>
            </Box>
            <Box>
              <Link to="/forgetPassword">
                <Button mt={'4'} variant={'link'} size={'sm'}>
                  Forget Password?
                </Button>
              </Link>
            </Box>
            <Button my={'4'} colorScheme="yellow" type="submit">
              Login
            </Button>
            <Box>
              New user?{' '}
              <Link to={'/register'}>
                <Button colorScheme="yellow" variant={'link'}>
                  Sign Up{' '}
                </Button>
              </Link>{' '}
              here
            </Box>
          </FormControl>
        </VStack>
      </Container>
    );
  };
  
  export default Login;