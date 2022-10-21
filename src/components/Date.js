import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DatePicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} locale="en-EN" />
    </div>
  );
}

export default DatePicker;
