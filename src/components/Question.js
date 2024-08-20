import {
  QuestionContainer,
  QuestionText,
  OptionsContainer,
  OptionButton,
} from '../styles/QuestionStyle';

const Question = ({ question, options, onAnswer }) => {
  return (
    <QuestionContainer>
      <QuestionText>{question}</QuestionText>
      <OptionsContainer>
        {options.map((option, index) => (
          <OptionButton key={index} onClick={() => onAnswer(option)}>
            {option}
          </OptionButton>
        ))}
      </OptionsContainer>
    </QuestionContainer>
  );
};

export default Question;
