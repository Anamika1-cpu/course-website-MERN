import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { DiGithub } from 'react-icons/di';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { TiSocialInstagramCircular } from 'react-icons/ti';
const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All rights reserved" color={'white'}></Heading>
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children="@honey__6232"
            color={'yellow.400'}
          />
        </VStack>
        <HStack
        spacing={['2','10']}
        justifyContent={"center"}
        color={'white'}
        fontSize={'50'}
        >
            <a href='https://github.com/Anamika1-cpu' target='_blank'><DiGithub /></a>
            <a href='https://www.linkedin.com/in/anamika-gour-701a641a4/' target='_blank'><TiSocialLinkedinCircular/> </a>
            <a href='https://www.instagram.com/honey__6232/' target='_blank'> <TiSocialInstagramCircular/> </a>
        </HStack>
      </Stack>
    </Box>
  );
};
export default Footer;