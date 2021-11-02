import React from 'react';
import {
    Flex,
    Icon,
    useColorMode,
    Heading,
    Tag,
} from '@chakra-ui/react';
import {motion} from "framer-motion";
import {AiFillShop, GiElectric, HiCurrencyDollar, IoIosPeople} from "react-icons/all";


// private components
import RunningProjects from "./RunningProjects/RunningProjects";
import RecentProjects from "./RecentProjects/RecentProjects";
import ProjectIncome from "./ProjectIncome/ProjectIncome";
import PendingDues from "./PendingDues/PendingDues";
import OfficeWalkinCustomers from "./OfficeWalkinCustomers/OfficeWalkinCustomers";

const PlaceItem = props => {
    const {colorMode} = useColorMode();
    return(
        <motion.button
            style={{
                borderRadius: 10,
            }}
            whileHover={{
                scale: 1.1,
                boxShadow: '0 19px 38px rgba(235, 102, 218, 0.3), 0 15px 12px rgba(0,0,0,0.22)',
            }}
            whileTap={{ scale: 0.9 }}
        >
            <Flex
                h={'180px'}
                direction={'column'}
                paddingX={4}
                paddingY={4}
                borderWidth={colorMode === 'dark' ? 1 : 0}
                justifyContent={'space-between'}
                borderColor={'gray'}
                borderRadius={10}
                boxShadow={'xl'}
                _hover={{
                    borderWidth: 0,
                    bgGradient: "linear(to-br, #7645d5, #eb66da, #fe959a, #feb25e)"
                }}
            >
                <Flex
                    direction={'row'}
                    width={'100%'}
                    placeSelf={'flex-start'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Flex alignItems={'center'}>
                        <Flex
                            bg={colorMode === 'light' ? 'white' : 'gray.600'}
                            boxShadow={'0 5px 15px rgba(235, 102, 218, 0.3), 0 10px 8px rgba(0,0,0,0.22)'}
                            placeSelf={'flex-start'}
                            padding={2}
                            borderRadius={4}
                        >
                            <Icon
                                as={props.icon}
                                w={6}
                                h={6}
                            />
                        </Flex>
                        <Heading as="h1" size="md" ml={3}>
                            {props.name}
                        </Heading>
                    </Flex>
                    {
                        props.name === 'Projects' &&
                        <ProjectIncome/>
                    }
                    {
                        props.name === 'Office' &&
                            <OfficeWalkinCustomers/>
                    }

                </Flex>
                {
                    props.name === 'Office' &&
                    <Tag
                        my={2}
                        mb={4}
                        w={'45%'}
                        justifyContent={'center'}
                        fontWeight={'bold'}
                        fontSize={12}
                    >
                        Vectors n' Scalars
                    </Tag>
                }
                <Flex justifyContent={'space-between'}>
                    {
                        props.name === 'Projects' &&
                            <>
                                <RunningProjects
                                    description={'In Progress'}
                                    amount={3}
                                />
                                <RecentProjects
                                    projectInitials={['TA', 'KB', 'SD']}
                                />
                            </>
                    }
                    {
                        props.name === 'Office' &&
                            <PendingDues
                                data={[
                                    {icon: AiFillShop, name: 'Rent'},
                                    {icon: GiElectric, name: 'Electricity'},
                                    {icon: HiCurrencyDollar, name: 'nope'},
                                    {icon: IoIosPeople, name: 'Salaries'}
                                ]}
                            />

                    }
                </Flex>
            </Flex>
        </motion.button>
    );
}

export default PlaceItem;
