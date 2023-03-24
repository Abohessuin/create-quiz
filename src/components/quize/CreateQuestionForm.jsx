import styled from "styled-components";
import Question from "../../components/quize/Question";

const CreateQuestionForm = ({ questions, setQuestions }) => {
  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleChoiceChange = (e, questionIndex, choiceIndex) => {
    const updatedQuestions = [...questions];
    const updatedChoices = [...questions[questionIndex].choices];
    updatedChoices[choiceIndex].value = e.target.value;
    updatedQuestions[questionIndex].choices = updatedChoices;
    setQuestions(updatedQuestions);
  };

  const handleAddChoice = (questionIndex) => {
    const updatedQuestions = [...questions];
    const newChoiceId = updatedQuestions[questionIndex].choices.length + 1;
    updatedQuestions[questionIndex].choices = [
      ...updatedQuestions[questionIndex].choices,
      { id: newChoiceId, value: "" },
    ];
    setQuestions(updatedQuestions);
  };

  const handleRemoveChoice = (questionIndex, choiceId) => {
    const updatedQuestions = [...questions];
    const updatedChoices = updatedQuestions[questionIndex].choices.filter(
      (choice) => choice.id !== choiceId
    );
    updatedQuestions[questionIndex].choices = updatedChoices;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = e.target.value;
    setQuestions(updatedQuestions);
  };
  const handleRightFeedbackChange = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].feedback_true = e.target.value;
    setQuestions(updatedQuestions);
  };
  const handleWrongFeedbackChange = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].feedback_false = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const updatedQuestions = [
      ...questions,
      {
        question: "",
        choices: [{ id: 1, value: "" }],
        answer: "",
        feedback_true: "",
        feedback_false: "",
      },
    ];
    setQuestions(updatedQuestions);
  };

  return (
    <Container>
      {questions?.map((question, index) => (
        <Question
          handleQuestionChange={handleQuestionChange}
          handleRemoveChoice={handleRemoveChoice}
          handleAddChoice={handleAddChoice}
          handleAnswerChange={handleAnswerChange}
          handleChoiceChange={handleChoiceChange}
          handleRightFeedbackChange={handleRightFeedbackChange}
          handleWrongFeedbackChange={handleWrongFeedbackChange}
          question={question}
          index={index}
        />
      ))}

      <AddQuestionButton onClick={handleAddQuestion}>
        Add Question
      </AddQuestionButton>
    </Container>
  );
};

export default CreateQuestionForm;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 30px;
  border: 1px solid gray;
  width: 50%;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.3);
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const AddQuestionButton = styled.button`
  padding: 8px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
`;
