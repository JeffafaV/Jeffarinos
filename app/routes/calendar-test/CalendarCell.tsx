import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const CalendarCell = ({ className, onClick, children }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={onClick} className={`p-2 ${className}`}>
      {children}
    </div>
  );
};

export default CalendarCell;
