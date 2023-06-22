import { Avatar, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

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
const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading textAlign={["center","left"]} children="About Us"/>
      <Founder/>
      <Stack>
        <Text>
          We are providing the best websites..............
        </Text>
      </Stack>
    </Container>
  )
}

export default About