import { useState } from "react";

import "./Home.css";

const Countdown = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  return (
    <div>
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form">
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input type="date" name="date" />
        </label>
        <label>
          <span>Imagem:</span>
          <input type="text" placeholder="Insira a URL da imagem" />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input type="color" name="color" />
        </label>
        <input type="submit" value="Criar" />
      </form>
    </div>
  );
};

export default Countdown;
