import styled from "styled-components";

const Question = ({
  question,
  index,
  handleQuestionChange,
  handleChoiceChange,
  handleRemoveChoice,
  handleAddChoice,
  handleAnswerChange,
  handleWrongFeedbackChange,
  handleRightFeedbackChange,
}) => {
  return (
    <QuestionContainer key={index}>
      <QuestionLabel>Question {index + 1}:</QuestionLabel>
      <QuestionInput
        type="text"
        value={question.question}
        onChange={(e) => handleQuestionChange(e, index)}
      />
      {question.choices.map((choice, choiceIndex) => (
        <ChoiceContainer key={choice.id}>
          <ChoiceInput
            type="text"
            value={choice.value}
            onChange={(e) => handleChoiceChange(e, index, choiceIndex)}
          />
          <RemoveChoiceButton
            onClick={() => handleRemoveChoice(index, choice.id)}
          >
            Remove Choice
          </RemoveChoiceButton>
        </ChoiceContainer>
      ))}
      <AddChoiceButton onClick={() => handleAddChoice(index)}>
        Add Choice
      </AddChoiceButton>
      <AnswerLabel>Answer:</AnswerLabel>
      <AnswerInput
        type="text"
        value={question.answer}
        onChange={(e) => handleAnswerChange(e, index)}
      />
      <FeedbackLabel>Right feedback:</FeedbackLabel>
      <FeedbackInput
        type="text"
        value={question.feedback_true}
        onChange={(e) => handleRightFeedbackChange(e, index)}
      />
      <FeedbackLabel>Wrong feedback:</FeedbackLabel>
      <FeedbackInput
        type="text"
        value={question.feedback_false}
        onChange={(e) => handleWrongFeedbackChange(e, index)}
      />
    </QuestionContainer>
  );
};
const QuestionContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
`;

const QuestionLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const QuestionInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const ChoiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ChoiceInput = styled.input`
  flex: 1;
  padding: 5px;
  margin-right: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const RemoveChoiceButton = styled.button`
  padding: 5px 10px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const AddChoiceButton = styled.button`
  padding: 5px 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #388e3c;
  }
`;

const AnswerLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const AnswerInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const FeedbackLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

const FeedbackInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export default Question;
