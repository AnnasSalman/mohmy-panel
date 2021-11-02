import React from 'react'
import {Button, IconButton, Tooltip} from "@chakra-ui/react";

const NavigationButton = props => {
    if(props.size === 'large'){
        return (
            <Button
                _hover={{
                    backgroundColor: '#3b68ff',
                    color: 'white',
                }}
                _focus={{
                    outline: 'none',
                }}
                variant={'ghost'}
                w={'75%'}
                height={10}
                fontSize={14}
                color={props.active?'white':'gray.400'}
                fontWeight={'bold'}
                leftIcon={props.icon}
                justifyContent={'flex-start'}
                backgroundColor={props.active?'#3b68ff':'transparent'}
                mb={4}
                onClick={props.onClick}
            >
                {props.children}
            </Button>
        )
    }
    else {
        return(
            <Tooltip
                label={props.children}
                placement="auto-start"
            >
                <IconButton
                    icon={props.icon}
                    onClick={props.onClick}
                    mb={4}
                    backgroundColor={props.active?'#3b68ff':'transparent'}
                    color={props.active?'white':'gray.400'}
                    height={10}
                    variant={'ghost'}
                    _hover={{
                        backgroundColor: '#3b68ff',
                        color: 'white',
                    }}
                />
            </Tooltip>
        );
    }
}

export default NavigationButton
