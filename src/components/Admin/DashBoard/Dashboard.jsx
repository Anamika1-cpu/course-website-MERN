import { Box, Grid, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
const Dashboard = () => {
    return (
        <Grid css={{
            cursor: `url(${cursor}), default`
        }}
            minH={'100vh'} templateColumns={['1fr', ' 5fr 1fr']}>
            <Box boxSizing='borderBox' py={'16'} px={["4", '0']}>
                <Text textAlign={'center'} opacity={'0.5'}>Last updated on {String(new Date()).split("G")[0]}</Text>
                <Heading ml={["0", '16']} mb={'16'} textAlign={['center', 'left']}>
                    DashBoard
                </Heading>
                <Stack
                    direction={["column", "row"]}
                    minH={'24'}
                    justifyContent={'space-evenly'}
                >
                    <Databox title={"Views"} qty={'3'} qtyPercetage={'23'} profit={true} />
                    <Databox title={"Views"} qty={'3'} qtyPercetage={'65'} profit={false} />
                    <Databox title={"Views"} qty={'3'} qtyPercetage={'23'} profit={true} />

                </Stack>
            </Box>
            <Sidebar />
        </Grid>
    )
}

export default Dashboard


function Databox({ title, qty, qtyPercetage, profit }) {
    return (
        <Box p={'8'} borderRadius={'lg'} width={['full', '20%']} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
            <Text>{title}</Text>
            <HStack spacing={'6'}>
                <Text fontSize={'2xl'} fontWeight={'bold'}>{qty}</Text>
                <HStack>
                    <Text children={qtyPercetage + '%'} />
                    {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />}
                </HStack>
            </HStack>
            <Text children={"Since last month"} opacity={0.6} />
        </Box>
    )
}