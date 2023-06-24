import React,{useEffect} from 'react'

import { Name } from '../components/Home/Name'
import { Projects } from "../components/Home/Projects";
import { Skill } from "../components/Home/Skill";
import { useLocation } from "react-router-dom";
const Home = (props) => { 

  const location = useLocation();
  useEffect(() => { 
    props.setRoute(location.pathname);
    
  });


  

  return (
    <>
      <Name />
      <Projects />
      <Skill />
    </>
  );
}

export default Home;
