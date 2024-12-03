import { useState } from "react";
import Button from "../../Button/Button";
import { answers } from "../../data";

export default function SubTask9({ topic, condition, solution, answer }) {
  const [form, setForm] = useState({
    vis: false,
    name: "",
    hasError: true,
    chAnswer: null,
  });

  function handleVisClick() {
    setForm((prev) => ({
      ...prev,
      vis: !form.vis,
    }));
  }

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value === "",
    }));
  }

  function checkAnswer() {
    
    if(form.name === answer){
      answers[0].correct += 1
    }
    else{
      answers[0].uncorrect += 1
    }
    setForm((prev) => ({
      ...prev,
      chAnswer: form.name === answer ? "1px solid green": "1px solid red",
    }));
  }

  return (
    <div className="column">
      <h3>Задача №{topic} ЕГЭ</h3>
      <p>
        {condition.text[0]}
        <img src={condition.images[0]} /> {condition.text[1]}
      </p>

      <input
        type="text"
        className="portal"
        value={form.name}
        onChange={handleNameChange}
        style={{ border: form.chAnswer}}
      />

      <div className="answer">
        <Button
          disabled={form.hasError}
          isActive={!form.hasError}
          style={{ marginLeft: "0rem" }}
          onClick={checkAnswer}
        >
          Проверить решение
        </Button>
        <i onClick={handleVisClick}>Показать решение</i>
      </div>
      <div>
        {form.vis && (
          <>
            <p>
              {solution.text[0]} <img src={solution.images[0]} />
              {solution.text[1]}<img src={solution.images[1]} />
              {solution.text[2]}<img src={solution.images[2]} />
              {solution.text[3]}<img src={solution.images[3]} />
              {solution.text[4]}
            </p>
            <img src={solution.images[4]} />
            <p>{solution.text[5]}</p>
          </>
        )}
      </div>
    </div>
  );
}
