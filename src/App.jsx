export const App = () => {
  const onClickBotton = () => {
    alert();
  };

  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <p style={contentStyle}>お元気ですか?</p>
      <button onClick={onClickBotton}>ボタン</button>
    </>
  );
};