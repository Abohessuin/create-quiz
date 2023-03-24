import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "../../../components/quize-data";
const QuizCard = ({ quiz }) => {
  const { removeQuize } = useContext(AppContext);
  return (
    <Card>
      <div>
        <h2>{quiz.title}</h2>
        <p>{quiz.description}</p>
      </div>
      <div>
        <Link to={`/quiz/${quiz.id}`}>
          <button>Start Quiz</button>
        </Link>
        <Link to={`/edit-quize/${quiz.id}`}>
          <button>Edit Quiz</button>
        </Link>

        <button
          onClick={() => {
            removeQuize(quiz.id);
          }}
        >
          Remove Quiz
        </button>
      </div>
    </Card>
  );
};

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  button {
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin: 0px 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #3e8e41;
    }
    &:nth-child(1) {
      background-color: #4caf50;
    }

    &:nth-child(3) {
      background-color: red;
    }
  }
`;

export default QuizCard;
