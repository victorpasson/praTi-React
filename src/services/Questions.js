// Define um array de perguntas, cada uma com a pergunta, opções e resposta correta.
export const questions = [
{
    question: "What is 2+2?", // Pergunta da primeira questão.
    options: ["3", "4", "5", "6"], // Opções de resposta para a primeira questão.
    answer: "4", // Resposta correta para a primeira questão.
},
{
    question: "What is 3+3?", // Pergunta da segunda questão.
    options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
    answer: "6", // Resposta correta para a segunda questão.
},
];

// Função que é chamada quando o usuário responde uma pergunta.
export const handleAnswer = (answer, setScore, score, setCurrentQuestion, currentQuestion) => {
// Verifica se a resposta fornecida está correta.
if (answer === questions[currentQuestion].answer) {
    // Se a resposta estiver correta, aumenta a pontuação em 1.
    setScore(score + 1);
}
// Passa para a próxima pergunta.
setCurrentQuestion(currentQuestion + 1);
};