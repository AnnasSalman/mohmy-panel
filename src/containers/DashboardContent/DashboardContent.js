import React from 'react'
import {SimpleGrid, Heading} from '@chakra-ui/react';
import {HiOfficeBuilding, AiFillShop, AiFillHome} from "react-icons/all";


// shared components
import ContentContainer from "../../components/ContentContainer/ContentContainer";

// private components
import PlaceItem from "./PlaceItem/PlaceItem";

const DashboardContent = props => {
    return(
        <ContentContainer heading={'Dashboard'}>
            <Heading as="h1" size="md" fontWeight={'bold'} my={5} mt={8}>
                Available Actions
            </Heading>
            <SimpleGrid
                columns={[1, 2, props.sideBarOpened ? 2 : 3, 4]}
                spacing="30px"
            >
                <PlaceItem
                    sidebarOpened={props.sideBarOpened}
                    icon={AiFillShop}
                    name={'Projects'}
                />
                <PlaceItem
                    sidebarOpened={props.sideBarOpened}
                    icon={HiOfficeBuilding}
                    name={'Office'}
                />
                <PlaceItem
                    sidebarOpened={props.sideBarOpened}
                    icon={AiFillHome}
                    name={'Home'}
                />
            </SimpleGrid>
        </ContentContainer>
    );
}

export default DashboardContent
