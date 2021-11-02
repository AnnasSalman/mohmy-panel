import React from 'react'
import {Flex} from "@chakra-ui/react";
import {motion} from "framer-motion";

const ProjectItem = props => {
    return(
        <motion.button
            style={{borderRadius: 10}}
            whileHover={{ scale: 1.1, boxShadow: '0 19px 38px rgba(235, 102, 218, 0.3), 0 15px 12px rgba(0,0,0,0.22)' }}
            whileTap={{ scale: 0.9 }}
        >
            <Flex
                h={'180px'}
                direction={'column'}
                paddingX={4}
                paddingY={4}
                borderWidth={1}
                justifyContent={'space-between'}
                borderColor={'gray'}
                borderRadius={10}
                _hover={{
                    borderWidth: 0,
                    bgGradient: "linear(to-br, #380036, #0cbaba)"
                }}
            >

            </Flex>
        </motion.button>
    )
}

export default ProjectItem
