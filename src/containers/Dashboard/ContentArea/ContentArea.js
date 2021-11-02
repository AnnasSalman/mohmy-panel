import React from 'react'
import {Flex} from "@chakra-ui/react";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../Dashboard";
import HomeContent from "../../HomeContent/HomeContent";

const ContentArea = props => {
    return(
        <Flex>
            <Switch>
                <Route path="/home">
                    <HomeContent/>
                </Route>
            </Switch>
        </Flex>
    )
}

export default ContentArea;
