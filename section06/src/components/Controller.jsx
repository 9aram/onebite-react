const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          //화살표함수를 이벤트 헨들러로 설정하고 해당이벤트 핸들러에서 onClickButton()함수를 호출해 인수를 우리가 원하는 값으로 넘긴다
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};
export default Controller;
