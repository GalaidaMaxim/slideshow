import styled from "@emotion/styled";

const StyledHeroo = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: relative;
  transition-duration: 1500ms;
  opacity: ${({ slide, slideMe }) => (slide === slideMe ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;

  & h1 {
    font-family: "Balsamiq Sans";
    color: white;
    text-shadow: 5px 5px 10px black;
    font-size: 50px;
    position: absolute;
    top: ${({ params }) => params.tPosY}px;
    left: ${({ params }) => params.tPosX}px;
    text-align: left;
  }
  & .img {
    background-image: url("${({ photo }) => photo}");
    width: 100vw;
    height: 100vh;

    background-size: cover;
    width: calc(100vh * 4px / 3px);
    background-repeat: no-repeat;
    background-size: ${({ params }) => params.bSizeX}px
      ${({ params }) => params.bSizeY}px;
    background-position: ${({ params }) => params.bPosX}px
      ${({ params }) => params.bPosY}px;
  }
`;

export const Herro = ({
  slide,
  slideMe,
  actor,
  role,
  photo,
  bSizeX = 2000,
  bSizeY = 1500,
  tPosX = 100,
  tPosY = 50,
  bPosX = -450,
  bPosY = -150,
}) => {
  return (
    <StyledHeroo
      slide={slide}
      slideMe={slideMe}
      params={{ bSizeX, bSizeY, tPosX, tPosY, bPosX, bPosY }}
      photo={photo}
    >
      <h1>
        {role}
        <br />
        {actor}
      </h1>
      <div className="img"></div>
    </StyledHeroo>
  );
};
