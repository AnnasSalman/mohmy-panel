import React from 'react'
import {Flex, Heading, Box} from "@chakra-ui/react";

const RunningProjects = props => {
    return(
        <Flex
            h={'40%'}
            fontSize={12}
            fontWeight={'bold'}
            direction={'column'}
            placeSelf={'flex-start'}
        >
            <Flex alignItems={'center'}>
                <Box
                    w={1}
                    h={1}
                    bg={'tomato'}
                    marginX={2}
                    borderRadius={2}/>
                {props.description}
            </Flex>
            <Heading size={"lg"}>
                {props.amount}
            </Heading>
        </Flex>
    )
}

export default RunningProjects;
