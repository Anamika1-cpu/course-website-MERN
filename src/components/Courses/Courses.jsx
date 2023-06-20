import { Button, Container, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


const Course = ()=>{
  return(
    <VStack className='course' alignItems={["center","flex-start"]}>

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
    </Container>
    )
}

export default Courses