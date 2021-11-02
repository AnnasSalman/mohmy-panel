import React from 'react';
import {Fade, Flex, Heading} from '@chakra-ui/react';

const ContentContainer = props => {
    return (
        <Fade in={true}>
            <Flex
                paddingX={10}
                paddingY={10}
                direction={"column"}>
                <Heading as="h3" size="2xl" fontWeight={'bold'}>
                    {props.heading}
                </Heading>
                {props.children}
            </Flex>
        </Fade>
    )
}

export default ContentContainer;
