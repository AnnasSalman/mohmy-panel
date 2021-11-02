import React from 'react'
import {Flex, Icon, Image, Slide, useColorMode} from "@chakra-ui/react";
import NavigationButton from "./NavigationButton/NavigationButton";
import {
    MdDashboard,
    HiOfficeBuilding,
    AiFillShop,
    AiFillHome,
    AiOutlineCalendar
} from "react-icons/all";
import Logo from '../../../assets/logo/1-removebg-preview.png'
import moment from "moment";

const SideNavigation = props => {

    const {colorMode} = useColorMode()

    const onNavigationButtonPress = (type) => {
        props.onNavigationButtonPress(type);
    }

    const renderNav = (size) => {
        return(
            <Slide
                in={size === 'large' ? props.isOpen : !props.isOpen}
                direction={'left'}
            >
                <Flex
                    direction={'column'}
                    justify={"center"}
                    w={size === 'large' ? ['0%', 250] : ['0%', 50]}
                    height={'100vh'}
                    bgGradient={
                        colorMode === 'light' ?
                            "linear(gray.100 70%, #5b86e5)" : "linear(gray.700 70%, #5b86e5)"
                    }
                    align={'center'}>
                    <Image
                        src={Logo}
                        position={'absolute'}
                        width={size === 'large' ? '20%' : '5%'}
                        top={size === 'large' ? 0 : 20}
                    />
                    <NavigationButton
                        onClick={()=>onNavigationButtonPress('dashboard')}
                        size={size}
                        active={props.activeRoutes.dashboard}
                        icon={<Icon as={MdDashboard} w={8} h={5}/>}>
                        Dashboard
                    </NavigationButton>
                    <NavigationButton
                        onClick={()=>onNavigationButtonPress('projects')}
                        size={size}
                        active={props.activeRoutes.projects}
                        icon={<Icon as={AiFillShop} w={8} h={5}/>}>
                        Projects
                    </NavigationButton>
                    <NavigationButton
                        onClick={()=>onNavigationButtonPress('office')}
                        size={size}
                        active={props.activeRoutes.office}
                        icon={<Icon as={HiOfficeBuilding} w={8} h={5}/>}>
                        Office
                    </NavigationButton>
                    <NavigationButton
                        onClick={()=>onNavigationButtonPress('home')}
                        size={size}
                        active={props.activeRoutes.home}
                        icon={<Icon as={AiFillHome} w={8} h={5}/>}>
                        Home
                    </NavigationButton>
                    {/*<Flex*/}
                    {/*    direction={'column'}*/}
                    {/*    w={'80%'}*/}
                    {/*    h={'20%'}*/}
                    {/*    justifyContent={'center'}*/}
                    {/*    alignItems={'center'}*/}
                    {/*    fontWeight={'bold'}*/}
                    {/*    textAlign={'center'}*/}
                    {/*>*/}
                    {/*    <Icon as={AiOutlineCalendar} w={6} h={6} marginY={3}/>*/}
                    {/*    {*/}
                    {/*        props.isOpen*/}
                    {/*            ? moment().format("DD MMMM YYYY")*/}
                    {/*            : moment().format("DD MMM YYYY")*/}
                    {/*    }*/}
                    {/*</Flex>*/}
                </Flex>
            </Slide>
        )
    }

    return(
        <>
                {
                    renderNav('large')
                }
                {
                    renderNav('small')
                }
        </>
    )
}

export default SideNavigation
