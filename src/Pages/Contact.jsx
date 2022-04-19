import { Formik, Form, ErrorMessage, Field } from "formik";

import "./Contact.css";
const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const Contact = () => {
  return (
    <>
      <h2>Contact Us..!</h2>
      <div className="whole-cont">
        <div className="contact-details">
          <div className="cont1">
            <h5>Main Branch</h5>
            <h6>123,ks Road</h6>
            <h6>NewYork</h6>
          </div>
          <br />
          <div className="cont2">
            <h5>Phone Number</h5>
            <h6>1234567890</h6>
            <h6>6523871999</h6>
          </div>
        </div>
        <div className="contact-details2">
          <div className="cont3">
            <h5>FAX</h5>
            <h6>1-234-567-890</h6>
          </div>
          <div className="cont4">
            <h5>Email</h5>
            <h6>beast@gmail.com</h6>
          </div>
        </div>

        <div className="main-cont">
          <Formik
            initialValues={{
              fullName: "",
              emailId: "",
            }}
            validate={(values) => {
              const errors = {};
              if (values.fullName <= 5) {
                errors.fullName = "Full name should be atleast 6 characters";
              } else if (values.emailId <= 5) {
                errors.emailId = "Email should be atleast 6 characters";
              } else if (!validateEmail.test(values.emailId)) {
                errors.emailId = "Email is invalid";
              }
              return errors;
            }}
            onSubmit={() => {
              console.log("Form Submitted");
            }}
          >
            {() => {
              return (
                <>
                  <Form>
                    <h1>For Enquiry</h1>
                    <div className="abt-cont">
                      <label>Your Name :</label>
                      <Field name="fullName" type="text" />
                    </div>
                    <br />
                    <div className="abt-cont">
                      <label>Email Id :</label>
                      <Field name="emailId" type="email" />
                    </div>
                    <br />
                    <div className="abt-cont">
                      <textarea
                        name="textArea"
                        placeholder="details"
                        type="text"
                        rows="5"
                        cols="20"
                      />
                    </div>
                    <br />
                    <div className="abt-cont ">
                      <button type="submit">Submit</button>
                    </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Contact;
