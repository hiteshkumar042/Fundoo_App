import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./SignUp.css";
import { signup } from "../../services/userservices";

const fNameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/
const lNameRegex = /^[A-Z]{1}[a-zA-Z]{2,}$/
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /[A-Za-z]/;

export default function SignUp() {
  const [signUpObj, setSignUpObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    service: "advance",
  });
  const [errorObj, setErrorObj] = useState({
    fNameError: false,
    fNameHelper :"",
    lNameError: false,
    lNameHelper:"",
    emailError: false,
    emailHelper:"",
    passwordError: false,
    passwordHelper:"",

  }) 

  //get First Name
  const getFirstName = (event) => {
    console.log(event.target.value);
    setSignUpObj((prev) => ({ ...prev, firstName: event.target.value }));
  };

  //get Last Name
  const getLastName = (event) => {
    console.log(event.target.value);
    setSignUpObj((prev) => ({ ...prev, lastName: event.target.value }));
  };
  //get username
  const getUsename = (event) => {
    console.log(event.target.value);
    setSignUpObj((prev) => ({ ...prev, email: event.target.value }));
  };
  //get password
  const getPassword = (event) => {
    console.log(event.target.value);
    setSignUpObj((prev) => ({ ...prev, password: event.target.value }));
  };
  //get confirm password
  const getConfirmPassword = (event) => {
    console.log(event.target.value);
    setSignUpObj((prev) => ({ ...prev, confirmPassword: event.target.value }));
  };

  const submit = async () => {
    console.log(signUpObj);
    let fNameTest = fNameRegex.test(signUpObj.firstName)
    let lNameTest = lNameRegex.test(signUpObj.lastName)
    let emailTest = emailRegex.test(signUpObj.email)
    let passwordTest = passwordRegex.test(signUpObj.password)
    //First name 
    if(fNameTest===true){
      setErrorObj((prev)=>({...prev,fNameError:false,fNameHelper:""}))
    }else{
      setErrorObj((prev)=>({...prev,fNameError:true,fNameHelper:"Invalid first name"}))
    }
    //Last Name
    if(lNameTest===true){
      setErrorObj((prev)=>({...prev,lNameError:false,lNameHelper:""}))
    }else{
      setErrorObj((prev)=>({...prev,lNameError:true,lNameHelper:"Invalid last name"}))
    } 
    //Email Id
    if(emailTest===true){
      setErrorObj((prev)=>({...prev,emailError:false,emailHelper:""}))
    }else{
      setErrorObj((prev)=>({...prev,emailError:true,emailHelper:"Invalid email id"}))
    } 
    //password
    if(passwordTest===true){
      setErrorObj((prev)=>({...prev,passwordError:false,passwordHelper:""}))
    }else{
      setErrorObj((prev)=>({...prev,passwordError:true,passwordHelper:"Invalid password"}))
    }

    if(emailTest===true&&passwordTest===true&&fNameTest===true&&lNameTest===true){
      let response= await signup(signUpObj)
        console.log(response)
      
    }
  };
  return (
    <div>
      <div className="signup-main-container">
        <Box sx={{ border: "1px solid lightgrey", borderRadius: "10px" }}>
          <div className="signup-container">
            <div className="signup-left-container">
              <div className="signup-logo">
                <svg
                  viewBox="0 0 75 24"
                  width="75"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g id="qaEJec">
                    <path
                      fill="#ea4335"
                      d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"
                    ></path>
                  </g>
                  <g id="YGlOvc">
                    <path
                      fill="#34a853"
                      d="M58.193.67h2.564v17.44h-2.564z"
                    ></path>
                  </g>
                  <g id="BWfIk">
                    <path
                      fill="#4285f4"
                      d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"
                    ></path>
                  </g>
                  <g id="e6m3fd">
                    <path
                      fill="#fbbc05"
                      d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"
                    ></path>
                  </g>
                  <g id="vbkDmc">
                    <path
                      fill="#ea4335"
                      d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"
                    ></path>
                  </g>
                  <g id="idEJde">
                    <path
                      fill="#4285f4"
                      d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="signup-heading">
                <h2>Create Your Google Account</h2>
              </div>
              <form className="form-container">
                <div className="name-container">
                  <div className="name-field">
                    <TextField
                      id="outlined-basic"
                      className="name-input"
                      label="First Name"
                      size="small"
                      variant="outlined"
                      error={errorObj.fNameError}
                      helperText={errorObj.fNameHelper}
                      onChange={getFirstName}
                    />
                  </div>
                  <div className="name-field">
                    <TextField
                      id="outlined-basic"
                      className="name-input"
                      label="Last Name"
                      size="small"
                      variant="outlined"
                      error={errorObj.lNameError}
                      helperText={errorObj.lNameHelper}
                      onChange={getLastName}
                    />
                  </div>
                </div>
                <div className="username-field">
                  <TextField
                    fullWidth
                    label="Username"
                    id="fullWidth"
                    size="small"
                    error={errorObj.emailError}
                    helperText={errorObj.emailHelper}
                    onChange={getUsename}
                  />
                  <br />
                  <p className="ptext">You can use letters,numbers & periods</p>
                </div>
                <div className="current-email">
                  <a href="https://google.com">
                    <h5>Use my current email address instead</h5>
                  </a>
                </div>
                <div className="password-container">
                  <div className="pass">
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      size="small"
                      error={errorObj.passwordError}
                    helperText={errorObj.passwordHelper}
                      onChange={getPassword}
                    />
                  </div>
                  <div className="confirm pass">
                    <TextField
                      id="outlined-basic"
                      label="Confirm"
                      variant="outlined"
                      size="small"
                      error={errorObj.passwordError}
                      helperText={errorObj.passwordHelper}
                      onChange={getConfirmPassword}
                    />
                  </div>
                </div>
                <div className="pass-condition">
                  <p className="ptext">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </p>
                </div>
                <div className="show-pass">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Show Password"
                    />
                  </FormGroup>
                </div>
                <div className="sign-next-container">
                  <div className="signin">
                    <a href="http://google.com">
                      <h5>Sign in instead</h5>
                    </a>
                  </div>
                  <div className="next">
                    <Button variant="contained" size="small" onClick={submit}>
                      Next
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-right-container">
              <div className="image-box">
                <img
                  src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                  alt=""
                  width="244"
                  height="244"
                />
              </div>
              <div className="img-heading-text">
                <h3>
                  One Account. All of Google <br />
                  working for you
                </h3>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
