import {
  addDays,
  eachDayOfInterval,
  endOfWeek,
  format,
  getDate,
  getMonth,
  getYear,
  set,
  startOfWeek,
} from "date-fns";
import CalendarCell from "./CalendarCell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// add another prop for the number of valid days for the calendar
interface Props {
  value?: Date; // not a state
  value2?: Date; // is state (need to name these better and probably don't need this variable)
  onChange?: (value2: Date) => void;
}

const Calendar = ({
  value = new Date(),
  value2 = new Date(),
  onChange,
}: Props) => {
  const firstDay: Date = startOfWeek(value);
  const lastValidDay = addDays(value, 31);
  console.log(lastValidDay);
  const lastDay: Date = endOfWeek(lastValidDay);
  const calendarDays = eachDayOfInterval({ start: firstDay, end: lastDay });

  const handleClickDate = (date: Date) => {
    const newDate = set(new Date(), {
      year: getYear(date),
      month: getMonth(date),
      date: getDate(date),
    });
    if (onChange !== undefined) {
      onChange(newDate);
    }
  };

  return (
    <div className="calendar w-fit h-auto flex flex-col p-2 bg-white rounded-xl shadow-lg">
      <div className="header flex flex-row justify-center text-center items-center p-2">
        <div className="monthYear">{format(value2, "LLLL yyyy")}</div>
      </div>
      <div className="days grid grid-cols-7 justify-center text-center items-center">
        {daysOfWeek.map((day) => (
          <CalendarCell key={day} className="font-bold">
            {day}
          </CalendarCell>
        ))}

        {calendarDays.map((date, index) => {
          const isCurrentDate =
            getYear(date) === getYear(value2) &&
            getMonth(date) === getMonth(value2) &&
            getDate(date) === getDate(value2);
          if (isCurrentDate === false) {
            return (
              <CalendarCell
                className="hover:bg-gray-100"
                onClick={() => handleClickDate(date)}
                key={index}
              >
                {getDate(date)}
              </CalendarCell>
            );
          } else {
            return (
              <CalendarCell
                className="text-white bg-blue-600"
                onClick={() => handleClickDate(date)}
                key={index}
              >
                {getDate(date)}
              </CalendarCell>
            );
          }
        })}
      </div>
      <div className="dates" id="dates"></div>
    </div>
  );
};

export default Calendar;
