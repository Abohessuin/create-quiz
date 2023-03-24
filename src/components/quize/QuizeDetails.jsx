import styled from "styled-components";

const QuizeDetails = ({ quize, setQuize }) => {
  const handleChangeTitle = (e) => {
    const updatedQuize = { ...quize };
    updatedQuize.title = e.target.value;
    setQuize(updatedQuize);
  };
  const handleChangeDesc = (e) => {
    const updatedQuize = { ...quize };
    updatedQuize.description = e.target.value;
    setQuize(updatedQuize);
  };
  return (
    <Container>
      <label>Title:</label>
      <TitleInput
        type="text"
        value={quize.title}
        onChange={(e) => handleChangeTitle(e)}
      />
      <label>Description:</label>
      <DescriptionInput
        type="text"
        value={quize.description}
        onChange={(e) => handleChangeDesc(e)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="text"] {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
`;

const TitleInput = styled.input`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DescriptionInput = styled.input`
  height: 100px;
`;

export default QuizeDetails;
