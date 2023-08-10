import { Avatar, Button, Container, FormControl, FormLabel, HStack, Heading, Image, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri"
const Profile = () => {
    const user = {
        name: "Anamika",
        email: "anamika@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: "user",
        subscription: {
            status: 'active'
        },
        playlist: [{
            course: 'dfhw',
            poster: 'https://images.unsplash.com/photo-1685970377613-a15e9f6a4a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
        }]
    }
    const removeFromPlaylistHandler = (id) => {
        console.log(id);
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
                    <Stack direction={["column", "row"]} alignItems={'center'}>
                        <Link to='/updateProfile'>
                            <Button>Update Profile</Button>
                        </Link>
                        <Link to='/changePassword'>
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>
                </VStack>
            </Stack>
            <Heading size={'md'}>Playlist</Heading>
            {user.playlist.length > 0 && (
                <Stack direction={["column", "row"]}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    p="4"
                >
                    {
                        user.playlist.map((element, index) => (
                            <VStack w="48" key={element.course}>
                                <Image
                                    boxSize={'full'}
                                    objectFit={'contain'}
                                    src={element.poster}
                                />
                                <HStack>
                                    <Link to={`/course/${element.course}`}>
                                        <Button colorScheme='yellow' variant={'ghost'}>
                                            Watch Now
                                        </Button>
                                    </Link>
                                    <Button onClick={() => removeFromPlaylistHandler(element?.course)}>
                                        <RiDeleteBin7Fill />
                                    </Button>
                                </HStack>
                            </VStack>
                        ))
                    }
                </Stack>
            )}
            <ChangePhotoBox />
        </Container>
    )
}

export default Profile;

// function ChangePhotoBox({}){
//     return(
//         <Modal>

//         </Modal>
//     )
// }
function ChangePhotoBox() {

}