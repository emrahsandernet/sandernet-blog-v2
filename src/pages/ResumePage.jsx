import React, { useEffect } from "react";
import { Resume } from '../components/Resume/Resume'
import { useLocation } from "react-router-dom";
export const ResumePage = (props) => {
     const location = useLocation();
     useEffect(() => {
       props.setRoute(location.pathname);
     });

  return (
    <Resume   />
  )
}
