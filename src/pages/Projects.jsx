import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Project } from "../components/Project/Projects";
import { Name } from "../components/Home/Name";
import { Help } from '../components/Project/Help';


const Projects = (props) => {
    const location = useLocation();
    useEffect(() => {
      props.setRoute(location.pathname);
    });

  return (
    <>
        <Name />
        <Project />
        <Help />
    </>
  );
}

export default Projects;