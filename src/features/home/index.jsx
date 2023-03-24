import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/quize-data";
import QuizCard from "./components/QuizCard";
import { Link } from "react-router-dom";
const Listing = () => {
  const { quizes } = useContext(AppContext);
  return (
    <Container>
      <h1>Your Quizes</h1>
      <div className="grid">
        {quizes?.map((quiz) => (
          <QuizCard quiz={quiz} />
        ))}
      </div>
      <Link to="/create-quize">
        <CreateQuizButton>Create Your Quiz Now !</CreateQuizButton>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  width: 95%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-top: 10px;
  }
  .grid {
    margin-top: 5px;
  }
  a {
    margin: 0 auto;
    width: 35%;
  }
`;

const CreateQuizButton = styled.button`
  background-color: #2ecc71;
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #27ae60;
  }
`;

export default Listing;
