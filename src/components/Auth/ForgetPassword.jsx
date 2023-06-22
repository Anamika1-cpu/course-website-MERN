import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState("")
  return (
    <Container py={'16'} h={'90vh'}>
        <form>
            <Heading textTransform={'uppercase'} my={8} children="Forget password" textAlign={["center","left"]}/>
            <VStack>
                <Input
                my={4}
                required
                id='email'
                placeholder='abc@gmail.com'
                type='email'
                onChange={e=>setEmail(e.target.value)}
                focusBorderColor='yellow.500'
                />
                <Button width={'full'} colorScheme='yellow' type='submit'>
                    Send Reset Link
                </Button>
            </VStack>
        </form>
        <VStack>
        </VStack>
    </Container>
  )
}

export default ForgetPassword