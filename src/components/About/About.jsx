import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from "../../assets/videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'


const TandC = ()=>{
  return(
    <Box>
      <Heading size={'md'} children="Terms & Condition" textAlign={["center","left"]} my={4} />
      <Box h={'sm'} p={4} overflowY={'scroll'}>
        <Text fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={["center","left"]}
        > 
          <Heading size={'xs'}
          my={'4'}
          children="Refund only applicable for cancellation within 7 days"/>
        </Text>
      </Box>
    </Box>
  )
}
const Founder = ()=>{
  return (
    <Stack spacing={["4","8"]} padding={'8'} direction={["column","row"]}>
    <VStack>
    <Avatar src='https://avatars.githubusercontent.com/u/65862556?v=4' boxSize={["40","48"]}/>
    <Text children=" Co-Founder" opacity={'0.7'}/>
    </VStack>
    <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
      <Heading children=" Anamika Gour" size={["md","xl"]}/>
      <Text 
      textAlign={["center","left"]}
      children="Hi, I am a Full-Stack Developer and a freelancer"/>
    </VStack>
    </Stack>
  )
}

const VideoPlayer=()=>(
  <Box>
    <video controls
    // autoPlay
    // muted
    // loop
    controlsList='nodownload nofullscreen noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback
    src={introVideo}
    >

    </video>
  </Box>
)
const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading textAlign={["center","left"]} children="About Us"/>
      <Founder/>
      <Stack flexDirection={['column','row']} justifyContent={'space-between'}>
        <Text>
          We are providing the best websites..............
        </Text>
        <Link to='/subscribe'>
          <Button variant={'ghost'} colorScheme='yellow'>
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer/>
      <TandC termsAndConditions={'termsAndConditions'}/>
      <HStack my={4} p={4}>
        <RiSecurePaymentFill/>
        <Heading 
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Payment is secured with RazorPay'}
        />
      </HStack>
    </Container>
  )
}

export default About