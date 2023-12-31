import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
})=>{
  return(
    <VStack className='course' alignItems={["center","flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading 
      textAlign={["center","left"]}
      maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  )
}


const Courses = () => {
  const categories = ["Web Development","Artificial Intelligence","App Development","Data Science","Data Structures and Algorithms","Game Development"]
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'}/>
      <Input 
      value={keyword}
      onChange={e=>setKeyword(e.target.value)}
      placeholder='Search a course...'
      focusBorderColor='yellow.400'
      />

      <HStack overflowX={'auto'}
      paddingY={'5'}
      // css={{'&::-webkit-scrollbar':{
      //   display:'none'
      // }}}
      >
        {categories.map((item,index)=>(
          <Button key={index} onClick={()=>setCategory(item)} minW={"60"}> 
          <Text children={item}/>
        </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
      <Course 
      imageSrc={"https://images.unsplash.com/photo-1686616004011-29e44e1da346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"}
      />
        </Stack>
      </Container>
    )
}

export default Courses