import React from "react";
import wedding4 from '../../components/Assets/wedding4.mp4';
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  

  return (
    
      
    <div className="bg">
    <video src={wedding4} autoPlay loop muted />
     

    <div className="Apps">
      <InlineWidget url="https://calendly.com/barkerd85/free-consultation" />
    </div>

  </div>

  );
};

export default Calendar;



{/* <div className="calendly-inline-widget"
<Link to={`https://calendly.com/barkerd85`}></Link>; style={{min-width:320 + "px", height:630 + "px"}} */}