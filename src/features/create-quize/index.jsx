import { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/quize-data";
import CreateQuestionForm from "../../components/quize/CreateQuestionForm";
import QuizeDetails from "../../components/quize/QuizeDetails";
const CreateQuize = () => {
  const { addNewQuize } = useContext(AppContext);
  const [questions, setQuestions] = useState([
    {
      question: "",
      choices: [{ id: 1, value: "" }],
      answer: "",
      feedback_true: "",
      feedback_false: "",
    },
  ]);

  const [quize, setQuize] = useState({
    id: Math.floor(Math.random() * 100),
    questions: [...questions],
    createdAt: new Date(),
    modifiedAt: null,
    description: "",
    title: "",
    url: "https://www.youtube.com/watch?v=e6EGQFJLl04",
    score: null,
  });

  const handleCreateQuestion = () => {
    addNewQuize({ ...quize, questions: [...questions] });
    setQuestions([
      {
        question: "",
        choices: [{ id: 1, value: "" }],
        answer: "",
        feedback_true: "",
        feedback_false: "",
      },
    ]);
  };
  return (
    <Container>
      <Heading>Create Your Quiz Questions and Choices</Heading>

      <CreateQuestionForm questions={questions} setQuestions={setQuestions} />

      <QuizeDetails quize={quize} setQuize={setQuize} />

      <CreateQuestionsButton onClick={handleCreateQuestion}>
        Create Quize
      </CreateQuestionsButton>
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  margin: 10px auto;
`;
const Heading = styled.h1`
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;
const CreateQuestionsButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default CreateQuize;
