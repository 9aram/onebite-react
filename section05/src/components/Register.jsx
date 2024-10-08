import { useState } from "react";
//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개
const Register = () => {
  const [name, setName] = useState("name");
  const [birth, setBirth] = useState("");
  const onChangeName = (e) => {
    //console.log(e);
    //e.target.value
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
    </div>
  );
};
export default Register;
