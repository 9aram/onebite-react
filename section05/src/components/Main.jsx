import "./Main.css"
//JSX주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 삼항연산자, 값, 변수명. if,for문 같은건 x -> 한줄로서 값으로 평가될 수 없기때문
//2. 숫자, 문자열, 배열 값만 랜더링 된다. true, undefined, null 같은건 x. 객체(obj)도 랜더링 할 수 없고 점표기법으로 obj.a 같이 문자열이나 숫자값을 랜더링하도록 바꿔줘야 한다.
//3. 모든 태그는 닫혀있어야 한다. ex> <<img> x, <img/> or <img> </img>
//4. 최상위 태그는 반드시 꼭 하나여야만 한다. <Main></Main>으로 안묵어도 되고  <></> 이렇게 빈값이여도 된다.
const Main = () => {
    const user = {
        name: "garam lee",
        isLogin: true
         
    }
    if(user.isLogin){
        return <div className="logout">로그아웃</div>
    }else {
        return<div>로그인</div>
    }
    // return (
    //     <>
    //         {user.isLogin ? <div>로그아웃</div>:<div>로그인</div>}
    //     </>
    // );
}
export default Main;