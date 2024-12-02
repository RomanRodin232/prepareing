import { styled } from "styled-components";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState } from "react";
import Stats from "./Stats";
import { answers} from "./data";



const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [modal, SetModal] = useState(false);

  return (
    <HeaderContainer>
      <h3 className="zagalovok">Выберите предмет и начните готовиться</h3>

      <Button value="stats" isActive={true} onClick={() => SetModal(!modal)}>
        Статистика
      </Button>
      <Modal open={modal}>
          <>
          {answers.map((el) => (
            <Stats key={el.id} {...el} />
          ))}
          </>
          <Button isActive={true} onClick={() => SetModal(!modal)}>
            Закрыть
          </Button>
        </Modal>
    </HeaderContainer>
  );
}
