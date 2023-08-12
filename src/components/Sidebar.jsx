import { Button, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiDashboardFill, RiEyeFill } from 'react-icons/ri'

const Sidebar = () => {
    return (
        <VStack py={'16'} spacing={'4'}>
            <LinkButton Icon={RiDashboardFill} text={'Dashboard'} url={'/dashboard'} />
            <LinkButton Icon={RiEyeFill} text={'Courses'} url={'/courses'} />
            <LinkButton Icon={RiDashboardFill} text={'Dashboard'} url={'/dashboard'} />
        </VStack>
    )
}

export default Sidebar

function LinkButton({ url, Icon, text }) {
    return (
        <Link to='/admin/dashboard'>
            <Button fontSize={'larger'} variant={'ghost'}>
                <Icon style={{ margin: '4px' }} /> {text}
            </Button>
        </Link >

    )
}