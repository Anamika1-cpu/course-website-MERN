import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    return (
        <Container py={'16'} minH={'90vh'}>
            <form action="">
                <Heading my={'16'} textAlign={["center", "left"]} textTransform={'uppercase'}>
                    Change Password
                </Heading>
                <VStack spacing={['10', '4']}>
                    <Input
                        required
                        value={oldPassword}
                        onClick={(e) => { setOldPassword(e.target.value) }}
                        placeholder='Enter Old Password'
                        focusBorderColor='yellow.500'
                        type='password'
                    />
                    <Input
                        required
                        value={newPassword}
                        onClick={(e) => { setNewPassword(e.target.value) }}
                        placeholder='Enter New Password'
                        focusBorderColor='yellow.500'
                        type='password'
                    />
                    <Button colorScheme='yellow' w={'full'}>Change</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword