import React,{useEffect} from 'react'
import { Contacts } from "../components/Contact/Contact";
import { useLocation } from "react-router-dom";
export const ContactPage = (props) => {
    const location = useLocation();
    useEffect(() => {
      props.setRoute(location.pathname);
    });
  return (
    <Contacts route={props.route} setRoute={props.setRoute} />
    
  );
}
