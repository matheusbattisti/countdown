import Title from "../components/Title";
import Counter from "../components/Counter";

import { useContext, useEffect } from "react";
import { CountdownContext } from "../context/CountdownContext";

import useCountdown from "../hooks/useCountdown";
import { Navigate } from "react-router-dom";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" replace />;

  let eventTitle = null;

  if (event.title) eventTitle = event.title;

  let eventColor = null;

  if (event.color) eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
