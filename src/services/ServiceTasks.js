import axios from "axios";

// Define a URL da API que será usada para obter, adicionar, editar e excluir tarefas.
const API_URL = 'http://localhost:5000/tasks';

// Função que busca as tarefas da API e atualiza o estado com as tarefas recebidas.
export const fetchTasks = async (setTasks) => {
const response = await axios.get(API_URL); // Faz uma requisição GET para obter as tarefas.
setTasks(response.data); // Atualiza o estado com os dados recebidos.
};

// Função que adiciona uma nova tarefa.
export const addTask = async (task, setTask, tasks, setTasks) => {
if (task) { // Verifica se o campo da tarefa não está vazio.
    const newTask = { text: task }; // Cria um objeto de tarefa com o texto fornecido.
    const response = await axios.post(API_URL, newTask); // Faz uma requisição POST para adicionar a nova tarefa.
    setTasks([...tasks, response.data]); // Atualiza o estado com a nova tarefa adicionada.
    setTask(''); // Limpa o campo de entrada.
}
};

// Função que exclui uma tarefa.
export const deleteTask = async (id, setTasks, tasks) => {
await axios.delete(`${API_URL}/${id}`); // Faz uma requisição DELETE para excluir a tarefa com o id fornecido.
setTasks(tasks.filter(task => task.id !== id)); // Atualiza o estado removendo a tarefa excluída.
};

// Função que inicia o processo de edição de uma tarefa.
export const editTask = (id, text, setEditingTaskId, setEditingTaskText) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
};

// Função que atualiza uma tarefa existente.
export const updateTask = async (id, editingTaskText, tasks, setTasks, setEditingTaskId, setEditingTaskText) => {
    const updatedTask = { text: editingTaskText }; // Cria um objeto de tarefa com o texto atualizado.
    await axios.put(`${API_URL}/${id}`, updatedTask); // Faz uma requisição PUT para atualizar a tarefa.
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editingTaskText } : task))); // Atualiza o estado com a tarefa modificada.
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(''); // Limpa o texto da tarefa em edição.
};
