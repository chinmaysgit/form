import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [disable, setDisable] = useState(false);
  const [msg, setMsg] = useState("");
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
  function checkDisable(){
    if (name && email && password){
        setDisable(true);
    }
  }
  return (
    <div className="container">
        <h2 style={{color: "#fff"}}>{msg}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="CapFront"
          onChange={(e) => {setName(e.target.value);
            checkDisable();
          }} value={name}
        />
        <input
          type="text"
          placeholder="example@gmail.com"
          onChange={(e) => {setEmail(e.target.value);
            checkDisable();
          }
        } value={email}
        />
        <input
          type="text"
          placeholder="password@1"
          onChange={(e) => {
            setPassword(e.target.value);
            checkDisable();

          }} value={password}
        />
        <p style={{ color: "red" }}>
          {password.length > 0 &&
            password.length < 6 &&
            "more than 6 char required"}
        </p>
        <textarea
          cols={10}
          rows={5}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="something about you" value={desc}
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
        <button onClick={() => {
            setName("");
            setEmail("");
            setPassword("");
            setDesc("");
            setDisable(false);
            setMsg("");
        }}>Clear</button>
      </form>
    </div>
  );
}

export default Form;
