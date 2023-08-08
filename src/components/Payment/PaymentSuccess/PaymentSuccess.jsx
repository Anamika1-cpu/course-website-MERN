import { Box, Button, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
const PaymentSuccess = () => {
  return (
    <Container h='90vh' p='16'>
      <Heading my='8' textAlign={'center'} >
        You have pro pack
      </Heading>
      <VStack boxShadow={"lg"}
            alignItems="center"
            borderRadius={'lg'}
            pb={'16'}
      >
      <Box width={'full'} bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
        <Text color={'black'} children={`Payment Success`} />
      </Box>
      <Box p={'4'}>
        <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
          <Text>Congratulations! You are a pro member now</Text>
          <Heading size={'4xl'} >
            <RiCheckboxCircleFill />
          </Heading>
        </VStack>
      </Box>
      <Link to="/profile">
        <Button variant={'ghost'}>
          Go to Profile
        </Button>
      </Link>
      <Heading size={'xs'}>
        Reference:ebfnakjndfgk 
      </Heading>
      </VStack>
    </Container>
  )
}

export default PaymentSuccess