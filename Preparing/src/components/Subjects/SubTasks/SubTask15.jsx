import { useState } from "react";
import Button from "../../Button/Button";
import { answers } from "../../data";

export default function SubTask15({ topic, condition, solution }) {
  const [form, setForm] = useState({
    vis: false,
    corr: null,
  });

  function handleVisClick() {
    setForm((prev) => ({
      ...prev,
      vis: !form.vis,
    }));
  }

  function greenAnswer() {
    answers[0].correct += 1
    setForm((prev) => ({
      ...prev,
      corr: "green",
    }));
  }

  function redAnswer() {
    answers[0].uncorrect += 1
    setForm((prev) => ({
      ...prev,
      corr: "red",
    }));
  }

  return (
    <div className="column">
      <h3>Задача №{topic} ЕГЭ</h3>
      <p>
        {condition.text}
        <img src={condition.images[0]} />
      </p>

      <div className="answer">
        <Button
          isActive={true}
          style={{ background: form.corr, marginLeft: "0rem" }}
        >
          Для данной задачи проверьте ответы сами
        </Button>
        <i onClick={handleVisClick}>Показать решение</i>
      </div>
      <div>
        {form.vis && (
          <>
            <p>
              {solution.text[0]} <img src={solution.images[0]} />
            </p>
            <img src={solution.images[1]} />
            <p>
              {solution.text[1]} <img src={solution.images[2]} />
            </p>

            <div style={{ display: "flex" }}>
              <Button isActive={true} onClick={greenAnswer}>
                Правильно
              </Button>
              <Button isActive={true} onClick={redAnswer}>
                Неправильно
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}