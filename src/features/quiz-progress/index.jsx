import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { AppContext } from "../../components/quize-data";
const Quiz = () => {
  const [Quize, setQuize] = useState(undefined);
  const [score, setScore] = useState(undefined);
  const { getQuize } = useContext(AppContext);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setQuize(() => {
        return getQuize(id);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    let totalQuestions = Quize.questions.length;

    for (let i = 0; i < totalQuestions; i++) {
      const q = Quize.questions[i];
      const userAnswer = answers[i];

      if (userAnswer === q.answer) {
        score++;
      }
    }

    const percentageScore = ((score / totalQuestions) * 100).toFixed(2);

    setScore(percentageScore);
  };

  const handleAnswerChange = (event) => {
    const { value } = event.target;
    console.log("aloo", answers);
    setAnswers([...answers, value]);
  };

  return (
    <Container>
      <Title>{Quize && Quize.title}</Title>
      <Description>{Quize && Quize.description}</Description>
      <Metadata>
        Created At: {Quize && Quize.createdAt?.toLocaleString()}
      </Metadata>
      {Quize && (
        <Metadata>
          Modified At: {Quize && Quize.modifiedAt?.toLocaleString()}
        </Metadata>
      )}{" "}
      {score && <Score>Score: {score}%</Score>}
      <form onSubmit={handleSubmit}>
        {Quize &&
          Quize.questions?.map((q) => (
            <Question key={q.id}>
              <QuestionTitle>{q.question}</QuestionTitle>
              {q.answer === "true" ? (
                <RadioList>
                  {q.choices.map((c) => (
                    <li key={c.id}>
                      <Label>
                        <Input
                          type="radio"
                          name={q.id}
                          value={c.value}
                          onChange={handleAnswerChange}
                        />
                        {c.value}
                      </Label>
                    </li>
                  ))}
                </RadioList>
              ) : (
                <CheckList>
                  {q.choices.map((c) => (
                    <li key={c.id}>
                      <Label>
                        <Input
                          type="checkbox"
                          name={q.id}
                          value={c.value}
                          onChange={handleAnswerChange}
                        />
                        {c.value}
                      </Label>
                    </li>
                  ))}
                </CheckList>
              )}
            </Question>
          ))}
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
`;

const Title = styled.h1``;

const Description = styled.p``;

const Metadata = styled.p`
  margin-bottom: 10px;
`;

const Question = styled.div`
  margin-bottom: 20px;
`;

const QuestionTitle = styled.h2``;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const RadioList = styled.ul`
  list-style-type: none;
`;

const CheckList = styled.ul`
  list-style-type: none;
`;

const Score = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;
export default Quiz;
