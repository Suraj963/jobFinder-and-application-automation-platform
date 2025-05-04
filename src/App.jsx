
import { Button } from '@material-tailwind/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import './App.css'
import { Navigationbar } from './Layout/Components/Navbar';
import Home from './Screens/Home/Components/index';

function App() {

  return (
    <>
      <Navigationbar/>
      <Home/>
    </>
  )
}

export default App
