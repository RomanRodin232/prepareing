export default function Stats({ correct, uncorrect }) {
  return (
    <div>
      <h1>Статистика заданий</h1>
      <div style={{margin: '0.5rem'}}>
        <p>Количество раз правильно выполненных заданий: {correct}</p>
        <p>Количество раз неправильно выполненных заданий: {uncorrect}</p>
      </div>
    </div>
  );
}
