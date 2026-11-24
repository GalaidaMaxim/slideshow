import "./App.css";
import styled from "@emotion/styled";
import { Herro } from "./components/Herro";
import { useEffect, useState } from "react";

const StyledApp = styled.div`
  background-image: url("./background.jpg");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  background-size: contain;
  & .backdrop {
    /* background-color: green; */
    backdrop-filter: blur(12px);
    width: calc((100vh * 4 / 3) + 1px);
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
`;

function App() {
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    const maxSlide = 10;
    const id = setInterval(() => {
      setSlide((prev) => {
        if (prev === maxSlide) {
          return 1;
        }
        return prev + 1;
      });
    }, 6000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <StyledApp className="App">
      <div className="backdrop">
        <Herro
          slide={slide}
          tPosX={50}
          slideMe={1}
          role={'"Боєць"'}
          actor={"Петро Копієвський"}
          photo={"./petro.png"}
        />
        <Herro
          slide={slide}
          slideMe={2}
          bPosX={-750}
          tPosX={450}
          tPosY={100}
          role={'"Коза"'}
          actor={"Олег Конопліч"}
          photo={"./goat.png"}
        />
        <Herro
          slide={slide}
          slideMe={3}
          role={`"Дівчина-зв'язківець"`}
          actor={"Ірина Калько"}
          photo={"./ira.png"}
          tPosX={50}
          bPosY={-200}
        />
        <Herro
          slide={slide}
          slideMe={4}
          bPosX={-700}
          tPosX={350}
          tPosY={100}
          role={'"Медикиня"'}
          actor={"Марина Волочнюк"}
          photo={"./med.png"}
        />
        <Herro
          slide={slide}
          slideMe={5}
          role={`"Марічка"`}
          actor={"Анжеліка Шевчук"}
          photo={"./anj.png"}
          tPosX={50}
          tPosY={100}
          bPosY={-900}
          bPosX={-400}
          bSizeY={2700}
        />
        <Herro
          slide={slide}
          slideMe={6}
          role={`"Михайло"`}
          actor={"Володимир Трибель"}
          photo={"./tribel.png"}
          tPosX={50}
          tPosY={100}
          bPosY={-150}
          bPosX={-380}
        />
        <Herro
          slide={slide}
          slideMe={7}
          bPosX={-770}
          bPosY={-100}
          tPosX={350}
          tPosY={100}
          role={'"Степан"'}
          actor={"Володимир Білобров"}
          photo={"./bil.png"}
        />
        <Herro
          slide={slide}
          slideMe={8}
          role={`"Тарас"`}
          actor={"Юрій Вітошко"}
          photo={"./vit.png"}
          tPosX={50}
          tPosY={100}
          bPosY={-200}
          bPosX={-440}
        />
        <Herro
          slide={slide}
          slideMe={9}
          bPosX={-740}
          bPosY={-850}
          tPosX={350}
          tPosY={100}
          bSizeY={2600}
          role={'"Яринка"'}
          actor={"Юлія Карачевцева"}
          photo={"./jul.png"}
        />
        <Herro
          slide={slide}
          slideMe={10}
          role={`"Оленка"`}
          actor={"Марія Тична"}
          photo={"./tich.png"}
          tPosX={50}
          tPosY={100}
          bPosY={-700}
          bPosX={-500}
          bSizeY={2600}
        />
      </div>
    </StyledApp>
  );
}

export default App;
