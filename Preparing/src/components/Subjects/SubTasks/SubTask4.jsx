import { useState } from "react";
import Button from "../../Button/Button";
import { answers } from "../../data";

export default function SubTask4({ topic, condition, solution, answer }) {
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
      <p>{condition.text}</p>

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
            <p>{solution.text}</p>
            <img src={solution.images[0]} />
          </>
        )}
      </div>
    </div>
  );
}
