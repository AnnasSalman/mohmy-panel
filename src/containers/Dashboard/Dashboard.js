import React, {useState} from 'react'
import {
    Flex,
    useColorMode,
    useDisclosure,
    useMediaQuery,
    IconButton,
    Icon,
    Fade,
} from "@chakra-ui/react";
import {
    motion
} from 'framer-motion'
import {
    AiOutlineDoubleRight,
    AiOutlineDoubleLeft,
    IoInvertModeOutline
} from "react-icons/all";
import {
    Route,
    Switch,
    useRouteMatch,
    useHistory
} from "react-router-dom";


// private components
import SideNavigation from "./SideNavigation/SideNavigation";
import HomeContent from "../HomeContent/HomeContent";
import DashboardContent from "../DashboardContent/DashboardContent";
import ProjectContent from "../ProjectsContent/ProjectContent";

const Dashboard = props => {
    const { isOpen, onToggle } = useDisclosure()
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)")
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)")
    const {toggleColorMode} = useColorMode()
    let {path} = useRouteMatch();
    const history = useHistory();

    const [activeRoutes, setActiveRoutes] = useState({
        dashboard: true,
        projects: false,
        office: false,
        home: false,
    })

    const onNavigationButtonPress = (type) => {
        const tempActiveRoutes = activeRoutes
        Object.keys(tempActiveRoutes).forEach(item => {
            tempActiveRoutes[item] = false;
        });
        setActiveRoutes({
            ...tempActiveRoutes,
            [type]: true,
        })

        history.push(`${path}/${type === 'dashboard' ? '' : type}`)
    }
    return(
        <Flex direction={'row'}>
            {
                !isSmallerThan600 &&
                <SideNavigation
                    isOpen={isOpen}
                    activeRoutes={activeRoutes}
                    onNavigationButtonPress={(type) => onNavigationButtonPress(type)}
                />
            }
                <Flex direction={'column'}>
                    {
                        isLargerThan1024 &&
                            <IconButton
                                position={'fixed'}
                                variant={'ghost'}
                                left={1}
                                top={2}
                                icon={<Icon
                                    as={isOpen ? AiOutlineDoubleLeft : AiOutlineDoubleRight}/>
                                }
                                onClick={onToggle}
                            />
                    }
                    {
                        !isSmallerThan600 &&
                            <Fade in={true}>
                                <IconButton
                                    variant={'ghost'}
                                    top={10}
                                    left={1}
                                    icon={<Icon
                                        as={IoInvertModeOutline}/>
                                    }
                                    onClick={toggleColorMode}
                                />
                            </Fade>
                    }
            </Flex>
            <motion.div
                animate={{ x: isOpen ? 220 : 5, width: isOpen ? '80vw' : '96vw'}}
            >
                <Switch>
                    <Route exact path={path}>
                        <DashboardContent sideBarOpened={isOpen}/>
                    </Route>
                    <Route path={`${path}/home`}>
                        <HomeContent/>
                    </Route>
                    <Route path={`${path}/projects`}>
                        <ProjectContent/>
                    </Route>
                </Switch>
            </motion.div>
        </Flex>
    )
}

export default Dashboard;
