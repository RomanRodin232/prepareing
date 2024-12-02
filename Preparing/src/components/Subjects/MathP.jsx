import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import SubTask1 from "./SubTasks/SubTask1";
import SubTask2 from "./SubTasks/SubTask2";
import SubTask3 from "./SubTasks/SubTask3";
import SubTask4 from "./SubTasks/SubTask4";
import SubTask5 from "./SubTasks/SubTask5";
import SubTask6 from "./SubTasks/SubTask6";
import SubTask7 from "./SubTasks/SubTask7";
import SubTask8 from "./SubTasks/SubTask8";
import SubTask9 from "./SubTasks/SubTask9";
import SubTask10 from "./SubTasks/SubTask10";
import SubTask11 from "./SubTasks/SubTask11";
import SubTask12 from "./SubTasks/SubTask12";
import SubTask13 from "./SubTasks/SubTask13";
import SubTask14 from "./SubTasks/SubTask14";
import SubTask15 from "./SubTasks/SubTask15";
import SubTask16 from "./SubTasks/SubTask16";
import SubTask17 from "./SubTasks/SubTask17";
import SubTask18 from "./SubTasks/SubTask18";
import SubTask19 from "./SubTasks/SubTask19";
import {
  tasks1,
  tasks2,
  tasks3,
  tasks4,
  tasks5,
  tasks6,
  tasks7,
  tasks8,
  tasks9,
  tasks10,
  tasks11,
  tasks12,
  tasks13,
  tasks14,
  tasks15,
  tasks16,
  tasks17,
  tasks18,
  tasks19,
} from "../data";

export default function MathP() {
  const [form, setForm] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    modal19: false,
  });

  return (
    <div className="column">
      <i> Краткий ответ</i>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal1: !form.modal1,
          }))
        }
      >
        1. Планиметрия
      </p>
      <Modal open={form.modal1}>
        <>
          {tasks1.map((el) => (
            <SubTask1 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal1: !form.modal1,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal2: !form.modal2,
          }))
        }
      >
        2. Векторы
      </p>
      <Modal open={form.modal2}>
        <>
          {tasks2.map((el) => (
            <SubTask2 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal2: !form.modal2,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal3: !form.modal3,
          }))
        }
      >
        3. Стереометрия
      </p>
      <Modal open={form.modal3}>
        <>
          {tasks3.map((el) => (
            <SubTask3 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal3: !form.modal3,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal4: !form.modal4,
          }))
        }
      >
        4. Начала теории вероятностей
      </p>
      <Modal open={form.modal4}>
        <>
          {tasks4.map((el) => (
            <SubTask4 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal4: !form.modal4,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal5: !form.modal5,
          }))
        }
      >
        5. Вероятности сложных событий
      </p>
      <Modal open={form.modal5}>
        <>
          {tasks5.map((el) => (
            <SubTask5 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal5: !form.modal5,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal6: !form.modal6,
          }))
        }
      >
        6. Простейшие уравнения
      </p>
      <Modal open={form.modal6}>
        <>
          {tasks6.map((el) => (
            <SubTask6 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal6: !form.modal6,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal7: !form.modal7,
          }))
        }
      >
        7. Вычисления и преобразования
      </p>
      <Modal open={form.modal7}>
        <>
          {tasks7.map((el) => (
            <SubTask7 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal7: !form.modal7,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>

      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal8: !form.modal8,
          }))
        }
      >
        8. Производная и первообразная
      </p>
      <Modal open={form.modal8}>
        <>
          {tasks8.map((el) => (
            <SubTask8 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal8: !form.modal8,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal9: !form.modal9,
          }))
        }
      >
        9. Задачи с прикладным содержанием
      </p>
      <Modal open={form.modal9}>
        <>
          {tasks9.map((el) => (
            <SubTask9 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal9: !form.modal9,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal10: !form.modal10,
          }))
        }
      >
        10. Текстовые задачи
      </p>
      <Modal open={form.modal10}>
        <>
          {tasks10.map((el) => (
            <SubTask10 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal10: !form.modal10,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal11: !form.modal11,
          }))
        }
      >
        11. Графики функций
      </p>
      <Modal open={form.modal11}>
        <>
          {tasks11.map((el) => (
            <SubTask11 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal11: !form.modal11,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal12: !form.modal12,
          }))
        }
      >
        12. Наибольшее и наименьшее значение функций
      </p>
      <Modal open={form.modal12}>
        <>
          {tasks12.map((el) => (
            <SubTask12 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal12: !form.modal12,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <i> Развернутый ответ</i>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal13: !form.modal13,
          }))
        }
      >
        13. Уравнения
      </p>
      <Modal open={form.modal13}>
        <>
          {tasks13.map((el) => (
            <SubTask13 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal13: !form.modal13,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal14: !form.modal14,
          }))
        }
      >
        14. Стереометрическая задача
      </p>
      <Modal open={form.modal14}>
        <>
          {tasks14.map((el) => (
            <SubTask14 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal14: !form.modal14,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal15: !form.modal15,
          }))
        }
      >
        15. Неравенства
      </p>
      <Modal open={form.modal15}>
        <>
          {tasks15.map((el) => (
            <SubTask15 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal15: !form.modal15,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal16: !form.modal16,
          }))
        }
      >
        16. Финансовая математика
      </p>
      <Modal open={form.modal16}>
        <>
          {tasks16.map((el) => (
            <SubTask16 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal16: !form.modal16,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal17: !form.modal17,
          }))
        }
      >
        17. Планиметрическая задача
      </p>
      <Modal open={form.modal17}>
        <>
          {tasks17.map((el) => (
            <SubTask17 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal17: !form.modal17,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal18: !form.modal18,
          }))
        }
      >
        18. Задача с параметром
      </p>
      <Modal open={form.modal18}>
        <>
          {tasks18.map((el) => (
            <SubTask18 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal18: !form.modal18,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
      <p
        onClick={() =>
          setForm((prev) => ({
            ...prev,
            modal19: !form.modal19,
          }))
        }
      >
        19. Числа и их свойства
      </p>
      <Modal open={form.modal19}>
        <>
          {tasks19.map((el) => (
            <SubTask19 key={el.id} {...el} />
          ))}
        </>
        <Button
          isActive={true}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              modal19: !form.modal19,
            }))
          }
        >
          Закрыть
        </Button>
      </Modal>
    </div>
  );
}
