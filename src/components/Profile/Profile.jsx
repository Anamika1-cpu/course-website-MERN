import { Avatar, Button, Container, HStack, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
    const user = {
        name: "Anamika",
        email: "anamika@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: "user",
        subscription: {
            status: 'active'
        }
    }
    return (
        <Container minH={"90vh"} maxW={"container.lg"} py="8">
            <Heading textTransform={'uppercase'} m="8">
                Profile
            </Heading>
            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding={'8'}
            >
                <VStack>
                    <Avatar boxSize={'48'} />
                    <Button variant={'ghost'} colorScheme='yellow'>Change Photo</Button>
                </VStack>
                <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
                    <HStack>
                        <Text children="Name" fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children="Email" fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children="createdAt" fontWeight={'bold'} />
                        <Text children={user.createdAt.split("T")[0]} />
                    </HStack>
                    {user.role !== "admin" && (
                        <HStack>
                            <Text children="Subscription" fontWeight={'bold'} />
                            {user.subscription.status === 'active' ?
                                (<Button color={'yellow.500'}>Cancel Subscription</Button>) :
                                (<Link to='/subscribe'><Button colorScheme='yellow'>Subscribe</Button></Link>)}
                        </HStack>
                    )}

                </VStack>
            </Stack>
        </Container>
    )
}

export default Profile