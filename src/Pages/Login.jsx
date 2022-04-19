import "./Login.css";

const Login = () => {
  return (
    <>
      <form className="login-form">
        <h2>LogIn</h2>
        <div>
          <label>Full Name :</label>
          <input name="fullName" type="text"></input>
        </div>
        <br />
        <div>
          <label>Email Id :</label>
          <input name="emailId" type="email"></input>
        </div>
        <br />
        <div>
          <label>Password :</label>
          <input name="password" type="password"></input>
        </div>
        <br />
        <span className="forget">Forget Password..?</span>
        <br />
        <div className="button-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Login;
