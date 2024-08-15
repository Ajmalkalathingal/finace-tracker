import { useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../input/input";
import "./style.css";
import Button from "../button";
import { auth } from "../../firebase";
import {toast} from "react-toastify";
function SignupSigninComponents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPssword] = useState("");
  const [conformpsw, setComformPsw] = useState("");

  const signupWithEmail = () => {
    // console.log("name", name);
    // console.log("email", email);
    // console.log("password", password);
    // console.log("confo", conformpsw);
    if (name != "" && email != "" && password != "" && conformpsw != "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage)
          // ..
        });
    }else{
      toast.error("all feilds are madetory")
    }
  };

  return (
    <div className="signup-wrapper">
      <h2 className="title">
        sigh up on <span style={{ color: "#2970ff" }}>finance</span>
      </h2>
      <form>
        <Input
          labal="Full name"
          type="text"
          state={name}
          setState={setName}
          placeholder={"ajmal farzan"}
        />
        <Input
          labal="Email"
          type="email"
          state={email}
          setState={setEmail}
          placeholder={"enter your email"}
        />
        <Input
          labal="password"
          type="password"
          state={password}
          setState={setPssword}
          placeholder={"enter password"}
        />
        <Input
          labal="conform psw"
          type="password"
          state={conformpsw}
          setState={setComformPsw}
          placeholder={"conform psw "}
        />
        <Button
          text={"signup using email and password"}
          onclick={signupWithEmail}
        />
        <p style={{ textAlign: "center" }}>or</p>
        {/* <Button
          text={"signup using email and password"}
          onclick={handleClick}
          blue={true}
        /> */}
      </form>
    </div>
  );
}

export default SignupSigninComponents;
