import { useState } from "react";
import Calendar from "./Calendar";
import { format } from "date-fns";

const CalendarTest = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">
          Selected Date: {format(selectedDate, "dd LLLL yyyy")}
        </p>
        <Calendar
          value={currentDate}
          value2={selectedDate}
          onChange={setSelectedDate}
        ></Calendar>
      </div>
    </div>
  );
};

export default CalendarTest;
