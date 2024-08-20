import React, { useState, useEffect } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import { AppContainer, Score } from '../styles/AppStyle';
import Question from './Question';

const Questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
    answer: 'Brasília',
  },
  {
    question: 'Quantos estados tem o Brasil?',
    options: ['26', '25', '27', '28'],
    answer: '26',
  },
  {
    question: 'De onde é a invenção do chuveiro elétrico?',
    options: ['França', 'Inglaterra', 'Brasil', 'Austrália', 'Itália'],
    answer: 'Brasil',
  },
  {
    question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
    options: [
      'O Senhor dos Anéis',
      'Dom Quixote',
      'O Pequeno Príncipe',
      'Ela, a Feiticeira',
      'Um Conto de Duas Cidades',
    ],
    answer: 'Dom Quixote',
  },
  {
    question: 'Quantas casas decimais tem o número pi?',
    options: ['Duas', 'Centenas', 'Infinitas', 'Vinte', 'Milhares'],
    answer: 'Infinitas',
  },
  {
    question: 'De quem é a famosa frase “Penso, logo existo”?',
    options: [
      'Platão',
      'Galileu Galilei',
      'Descartes',
      'Sócrates',
      'Francis Bacon',
    ],
    answer: 'Descartes',
  },
];

const shuffleArray = (param) => {
  for (let valor = param.length - 1; valor > 0; valor--) {
    const sorteio = Math.floor(Math.random() * (valor + 1));
    [param[valor], param[sorteio]] = [param[sorteio], param[valor]];
  }
  return param;
};

const shuffleOptions = (questions) => {
  const shuffledQuestions = shuffleArray([...questions]);
  return shuffledQuestions.map((question) => ({
    ...question,
    options: shuffleArray([...question.options]),
  }));
};

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(shuffleOptions(Questions));
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(
        `Fim do jogo! Você acertou ${score + 1} de ${
          questions.length
        } perguntas.`,
      );
      setCurrentQuestion(0);
      setScore(0);
      setQuestions(shuffleOptions(Questions));
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Score>Pontuação: {score}</Score>
        {questions.length > 0 && (
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
          />
        )}
      </AppContainer>
    </>
  );
};

export default App;
