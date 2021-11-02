import React from 'react'
import {Flex, Tag} from "@chakra-ui/react";

const RecentProjects = props => {
    return(
        <Flex fontSize={12} fontWeight={'bold'} direction={'column'}>
            recent projects
            <Flex direction={'row'} justifyContent={'center'}>
                {
                    props.projectInitials.map((initial, index) => (
                        <Tag
                            size={'lg'}
                            key={'lg'}
                            variant="solid"
                            bg={'blue.400'}
                            borderWidth={1}
                            marginX={-2}
                            borderRadius={20}
                            zIndex={index}
                            fontWeight={'bold'}
                            marginTop={1}
                        >
                            {initial}
                        </Tag>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default RecentProjects;
