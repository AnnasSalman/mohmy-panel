import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./styles/theme";

// containers
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
  return (
      <ChakraProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
      </ChakraProvider>
  );
}

export default App;
