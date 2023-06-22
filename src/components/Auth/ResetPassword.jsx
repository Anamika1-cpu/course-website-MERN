import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const params = useParams();
    console.log(params.token);
  return (
    <Container py={'16'} h={'90vh'}>
        <form>
            <Heading textTransform={'uppercase'} my={8} children="Reset password" textAlign={["center","left"]}/>
            <VStack>
                <Input
                my={4}
                required
                placeholder='New Password'
                type='password'
                onChange={e=>setPassword(e.target.value)}
                focusBorderColor='yellow.500'
                />
                <Button width={'full'} colorScheme='yellow' type='submit'>
                    Reset Password
                </Button>
            </VStack>
        </form>
        <VStack>
        </VStack>
    </Container>
  )
}

export default ResetPassword