import React from "react";
import wedding4 from "../../components/Assets/wedding4.mp4";
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
