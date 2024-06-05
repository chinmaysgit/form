import { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [disable, setDisable] = useState(false);
  const [msg, setMsg] = useState("");
  const [eye, setEye] = useState("fa-solid fa-eye");
  const showAsObj = {};
  
  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && password) {
      showAsObj.name = name;
      showAsObj.email = email;
      showAsObj.password = password;
      showAsObj.desc = desc;
      setMsg("Data submitted successfully");
      console.log(showAsObj);
    }
  }

  useEffect(() => {
    if (name && email && password) {
      setDisable(true);

    }else{
      setDisable(false);
    }
  },[name,email,password])
  function changeEye(e){
    if(e.target.parentElement.children[0].type == "password"){
      e.target.parentElement.children[0].type = "text";
      setEye("fa-solid fa-eye-slash")
    }else{
      e.target.parentElement.children[0].type = "password";
      setEye("fa-solid fa-eye")
    }
  }
  return (
    <div className="container">
      <h2 style={{ color: "#fff" }}>{msg}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="CapFront"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <div className="password-field">
          <input
            type="password"
            placeholder="password#1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <i className={eye} onClick={(e) => changeEye(e)}></i>
        </div>

        <p style={{ color: "red" }}>
          {password &&
            password.length < 6 &&
            "more than 6 char required"}
        </p>
        <textarea
          cols={10}
          rows={5}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="something about you"
          value={desc}
        ></textarea>
        <button
          style={{
            background:
              disable == false
                ? "grey"
                : "linear-gradient(80deg, rgb(0, 162, 255), rgb(131, 77, 255))",
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            setName(""); 
            setEmail("");
            setPassword("");
            setDesc("");
            setDisable(false);
            setMsg("");
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default Form;
