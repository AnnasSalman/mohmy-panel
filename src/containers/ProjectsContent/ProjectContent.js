import React from 'react'
import {
    Heading,
    Input,
    InputLeftElement,
    Flex,
    Button,
    InputGroup,
    Icon,
    SimpleGrid,
    Checkbox,
} from "@chakra-ui/react";

import {
    AiOutlineSearch,
    AiOutlineCalendar,
    FaArrowCircleUp,
    FaArrowCircleDown
} from "react-icons/all";

import ContentContainer from "../../components/ContentContainer/ContentContainer";
import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectContent = props => {
    return(
        <ContentContainer heading={'Projects'}>
            <Heading as="h1" size="md" fontWeight={'bold'} my={5} mt={8}>
                Search Projects
            </Heading>
            <SimpleGrid columns={[1, 2, 4]} spacing={2}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={AiOutlineSearch}/>}
                    />
                    <Input placeholder="Input Project Name" size="md" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={AiOutlineCalendar}/>}
                    />
                    <Input placeholder="Input Time Frame" size="md" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaArrowCircleUp}/>}
                    />
                    <Input placeholder="Input Project Income Limit" size="md" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaArrowCircleDown}/>}
                    />
                    <Input placeholder="Input Project Expense Limit" size="md" />
                </InputGroup>
            </SimpleGrid>
            <Flex justifyContent={'space-between'} flexDirection={['column', 'row']}>
                <Flex marginY={4}>
                    <Checkbox defaultIsChecked marginX={3}>Indoor Projects</Checkbox>
                    <Checkbox defaultIsChecked marginX={3}>Outdoor Projects</Checkbox>
                </Flex>
                <Button colorScheme="facebook" size="md" marginY={4}>
                    Search Project
                </Button>
            </Flex>
            <Heading as="h1" size="md" fontWeight={'bold'} my={5} mt={8}>
                Your Projects
            </Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
                {
                    [1, 2, 4, 5, 6, 7, 8, 1, 2, 4, 5, 6, 7, 8,].map(()=>(
                        <ProjectItem
                            name={'Some Project'}

                        />
                    ))
                }
            </SimpleGrid>
        </ContentContainer>
    )
}

export default ProjectContent;
