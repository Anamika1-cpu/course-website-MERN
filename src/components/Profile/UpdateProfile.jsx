import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    return (
        <Container py={'16'} minH={'90vh'}>
            <form action="">
                <Heading my={'16'} textAlign={["center", "left"]} textTransform={'uppercase'}>
                    Change Password
                </Heading>
                <VStack spacing={['10', '4']}>
                    <Input
                        value={name}
                        onClick={(e) => { setName(e.target.value) }}
                        placeholder='Name '
                        focusBorderColor='yellow.500'
                        type='text'
                    />
                    <Input
                        value={email}
                        onClick={(e) => { setEmail(e.target.value) }}
                        placeholder='a@gmail.com'
                        focusBorderColor='yellow.500'
                        type='email'
                    />
                    <Button colorScheme='yellow' w={'full'}>Change Profile</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default UpdateProfile