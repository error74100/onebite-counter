function CounterView({ count }) {
  return (
    <div className="section">
      <h3>현재 카운트 :</h3>
      <p className="count">{count}</p>
    </div>
  );
}

export default CounterView;
