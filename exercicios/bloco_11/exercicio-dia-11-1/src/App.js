const taskArray = ['Acordar', 'Tomar banho', 'Escovar os dentes', 'Lavar a louça', 'Tomar café da manhã', 'Começar o dia no computador'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {taskArray.map((list) => {
        return task(list);
      })}
    </ol>
  );
}

export default App;
