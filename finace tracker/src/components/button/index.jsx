import "./style.css";
const Button = ({text,onclick,blue}) => {
  console.log(blue)

  return (
<div className={blue ? "btn btn-blue" : "btn"} onClick={onclick}>{text}</div>
  );
};
export default Button;
