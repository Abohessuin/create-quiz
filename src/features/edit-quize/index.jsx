import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../components/quize-data";
import CreateQuestionForm from "../../components/quize/CreateQuestionForm";
import QuizeDetails from "../../components/quize/QuizeDetails";
import { useParams } from "react-router";

const EditQuize = () => {
  const { getQuize, EditQuize } = useContext(AppContext);
  const [questions, setQuestions] = useState([]);
  const [quize, setQuize] = useState({});
  const [editedQuize, setEditedQuize] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (editedQuize) {
      setQuize({ ...editedQuize });
      setQuestions([...editedQuize.questions]);
    }
  }, [editedQuize]);

  useEffect(() => {
    if (id) {
      setEditedQuize(() => {
        return getQuize(id);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const handleCreateQuestion = () => {
    EditQuize({ ...quize, questions: [...questions], modifiedAt: new Date() });
    alert("Edited");
  };
  return (
    <Container>
      <Heading>Create Your Quiz Questions and Choices</Heading>
      <div>
        <CreateQuestionForm questions={questions} setQuestions={setQuestions} />
      </div>
      <div>
        <QuizeDetails quize={quize} setQuize={setQuize} />
      </div>
      <CreateQuestionsButton onClick={handleCreateQuestion}>
        Edit Quize
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

export default EditQuize;
