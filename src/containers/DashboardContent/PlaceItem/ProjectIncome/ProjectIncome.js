import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from "@chakra-ui/react"

const ProjectIncome = props => {
    return(
        <Stat alignItems={'flex-end'} textAlign={'right'}>
            <StatHelpText fontSize={12} textAlign={'right'} mb={0}>
                <StatArrow type="increase" />
                23.36%
            </StatHelpText>
            <StatLabel
                fontSize={12}
                textAlign={'right'}
                fontWeight={'bold'}
            >
                income this month
            </StatLabel>
        </Stat>
    )
}

export default ProjectIncome;
