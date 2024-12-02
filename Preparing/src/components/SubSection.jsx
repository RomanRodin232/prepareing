import { useState } from "react";
import MathP from "./Subjects/MathP";

export default function SubSection() {
  const [tab, SetTab] = useState("mathp");

  return (
    <section>
      <div style={{ marginLeft: "1rem",  marginRight: "1rem"}}>
        <select
          className="subjectSelector"
          onChange={(event) => SetTab(event.target.value)}
        >
          <option value="mathp">Профильная математика</option>
          <option value="mathb">Базовая математика</option>
          <option value="inf">Информатика</option>
          <option value="rus">Русскикй язык</option>
          <option value="eng">Английский язык</option>
          <option value="phys">Физика</option>
          <option value="chem">Химия</option>
          <option value="bio">Биоголия</option>
          <option value="geog">Геогрфия</option>
          <option value="soc">Обществознание</option>
          <option value="hist">История</option>
          <option value="lit">Литература</option>
        </select>
      </div>
      {tab === "mathp" && <MathP />}

      {tab === "mathb" && 
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>}

      {tab === "inf" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}

      {tab === "rus" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}

      {tab === "eng" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}

      {tab === "phys" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}

      {tab === "chem" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}

      {tab === "bio" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}

      {tab === "geog" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}
      {tab === "soc" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}
      {tab === "hist" && (
        <>
          <h1>Раздел скоро будет добавлен</h1>
        </>
      )}
    </section>
  );
}
