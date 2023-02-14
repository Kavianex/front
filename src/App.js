import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Menu from './components/menu';
import Footer from "./components/footer";
import Landing from './components/landing';
import Faq from './components/faq';
import Roadmap from './components/roadmap'
import Docs from './components/docs'
import Whitepaper from './components/whitepaper'
import Brokers from './components/brokers'
import Marketmakers from './components/marketmakers'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
  {
    path: "/roadmap",
    element: <Roadmap/>,
  },
  {
    path: "/docs",
    element: <Docs/>,
  },
  {
    path: "/whitepaper",
    element: <Whitepaper/>,
  },
  {
    path: "/brokers",
    element: <Brokers/>,
  },
  {
    path: "/market-makers",
    element: <Marketmakers/>,
  },
]);
function App() {
  return (
    <>
    <Menu/>
    <Container style={{minHeight: "70vh"}}>
        <br></br>
        <br></br>
      <RouterProvider router={router} />
    </Container>
    <Footer/>
    </>
  );
}

export default App;
