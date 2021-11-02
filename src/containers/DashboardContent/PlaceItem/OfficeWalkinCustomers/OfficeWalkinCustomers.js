import React from 'react'
import {Flex, Tooltip, Heading, Icon} from "@chakra-ui/react";
import {FaConciergeBell} from "react-icons/all";

const OfficeWalkinCustomers = props => {
    return(
        <Tooltip label={'walk in customers this month'}>
            <Flex
                paddingX={2}
                paddingY={1}
                alignItems={'center'}
                justifyContent={'flex-end'}>
                <Icon as={FaConciergeBell} mb={'4px'} mr={'4px'}/>
                <Heading size={'md'}>
                    28
                </Heading>
            </Flex>
        </Tooltip>
    )
}

export default OfficeWalkinCustomers;
