import axios from 'axios';

const getQuestions = () => {
  return axios.get(
    'https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple'
  );
};

export default getQuestions;
