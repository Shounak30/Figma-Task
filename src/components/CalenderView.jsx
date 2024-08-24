import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalenderView() {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (date) => {
    setValue(date);
  };
  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        className={`bg-slate-200 rounded-md shadow-lg border-none`}
      />
    </div>
  );
}

export default CalenderView;
