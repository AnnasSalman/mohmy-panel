import React from 'react'
import {Flex, Icon, Text, Tooltip} from "@chakra-ui/react";

const PendingDues = props => {
    return(
        <Flex fontSize={12} direction={'column'}>
            <Text>
                Outstanding dues for the month
            </Text>
            <Flex direction={'row'} marginY={1}>
                {
                    props.data.map(item => (
                        <Tooltip label={item.name}>
                            <Flex
                                bg={'gray.400'}
                                _hover={{
                                    bg: 'white',
                                }}
                                marginX={1}
                                borderRadius={2}
                                paddingY={1}>
                                <Icon
                                    as={item.icon}
                                    width={5}
                                    height={5}
                                    marginX={1}
                                    color={'blue.700'}/>
                            </Flex>
                        </Tooltip>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default PendingDues;
