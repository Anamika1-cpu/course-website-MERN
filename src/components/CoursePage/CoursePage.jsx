import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/intro.mp4'

const CoursePage = () => {
  const [lectureNum,setLectureNum] = useState(0);
  const lectureTitle = 'Course1'

  const lectures=[{
    _id:"safgj",
    title:"Course",
    description:"sample gsdfub skjdfh",
    video:{
      url:'dadghui'
    }
  },
  {
    _id:"safgj",
    title:"Course",
    description:" gsdfub skjdfh",
    video:{
      url:'dadghui'
    }
  },
  {
    _id:"safgj",
    title:"Course",
    description:"sample  skjdfh",
    video:{
      url:'dadghui'
    }
  },
  {
    _id:"safgj",
    title:"Course6",
    description:"sample gsdfub ",
    video:{
      url:'dadghui'
    }
  }]
  return (
    <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
        <Box>
        <video 
            width={"100%"}
            src={introVideo}
            // autoPlay
            controls
            controlsList='nodownload  noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            >
            </video>
            <Heading m="4" children={`#${lectureNum+1} ${lectures[lectureNum].title}`}/>
            <Heading m="4" children={`${lectures[lectureNum].description}`}/>
        </Box>
        <VStack>
          {
            lectures.map((item,index)=>(
              <button key={item._id} 
              onClick={()=>{setLectureNum(index)}}
              style={{
                width:"100%",
                padding:"1rem",
                textAlign:"center",
                margin:0,
                borderBottom:'1px solid rgba(0,0,0,0.2)',
              }}
              >
                <Text noOfLines={1}>
                  #{index+1} {item.title}
                </Text>
              </button>
            ))
          }
        </VStack>
    </Grid>
  )
}

export default CoursePage