import Title from "../components/Title";
import Counter from "../components/Counter";

const Countdown = () => {
  return (
    <>
      <Title title="Contagem regressiva para 2023!" />
      <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </>
  );
};

export default Countdown;
