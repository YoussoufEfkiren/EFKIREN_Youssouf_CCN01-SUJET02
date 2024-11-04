import VoitureList from "./component/VoitureList";
import styled from "styled-components";

const StyledButton = styled.button`
  color: black;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #ffd43b;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin: 25px 0 0 25px;
  display: flex;
  align-items: center;

  &:hover {
    color: white;
    background-color: green;
    transform: scale(1.05);
  }

  i {
    color: blue; /* Change to the color you prefer for the icon */
    margin-left: 8px;
  }

  &:hover i {
    color: #ffd43b;
  }
`;

function App() {
  return (
    <>
      <a
        href="https://youssoufefkiren.github.io/EFKIREN_Youssouf_CCN01-SUJET01/"
        style={{ textDecoration: "none" }}
      >
        <StyledButton>
          SUJET 01 : HTML5, CSS3, JavaScript/JQUERY{" "}
          <i className="fa-sharp fa-solid fa-arrow-right  fa-beat fa-2xl"></i>
        </StyledButton>
      </a>
      <VoitureList />
    </>
  );
}

export default App;
