import "bootstrap/dist/css/bootstrap.css";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="container">
        {" "}
        <h3>Register Now!</h3>
        <form className="reg-form">
          <div class="form-group col-md-6">
            <label for="inputName">Name :</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email :</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password :</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address :</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City :</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State :</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip :</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group"></div>
          <br />
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
