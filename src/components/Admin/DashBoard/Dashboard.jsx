import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
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
                <Box m={["0", "16"]}
                    borderRadius={'lg'}
                    p={["0", "16"]}
                    mt={["4", "16"]}
                    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
                >
                    <Heading children={"Views Graph"} textAlign={["center", "left"]} size={"md"} mt={["8", "0"]} ml={["0", "16"]} />
                </Box>
                <Grid templateAreas={["1fr", "2fr 1fr"]}>
                    <Box p="4" >
                        <Heading size={"md"} textAlign={["center", "left"]}
                            my={'8'} ml={["0", "16"]} children={"Progress Bar"} />

                        <Bar profit={true} title={"Views"} value={10} />
                        <Bar profit={true} title={"Views"} value={10} />
                        <Bar profit={false} title={"Views"} value={10} />
                    </Box>
                    <Box p={['0', '16']} boxSizing='borderBox' py={'4'} >
                        <Heading textAlign={'center'} size={'md'} mb={'4'} children="Users" />
                    </Box>
                </Grid>
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

function Bar({ title, value, profit }) {
    return (
        <Box py={'4'} px={['0', '20']}>
            <Heading size={'sm'} children={title} mb={2} />
            <HStack w={'full'} align={'center'} >
                <Text children={profit ? "0%" : `${value}%`} />

                <Progress borderRadius={'lg'} w={'full'} value={profit ? value : 0} colorScheme='purple' />
                <Text children={`${value > 100 ? value : 100}%`} />
            </HStack>
        </Box>
    )
}