import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
//Imported icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { FaGenderless } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import "../cStyles/register_login.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    // userId: "",
    name: "",
    username: "",
    gender: "",
    dob: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //validation for fullname
  const [name, setFirstName] = useState("");
  const handleName = (e) => {
    let result = e.target.value.replace(/[^a-z]/gi, "");
    setFirstName(result);
  };

  // validation for username
  const [uname,setUname]=useState("");
  const [unameErr,setUnameErr]=useState(false);
  
  function unameHandler(e){
    let item=e.target.value;
    if(item.length<3 )
    {
       setUnameErr(true)
    }
    else
    {
        setUnameErr(false)
    }
    setUname(item)
    
    
}

//validation for email
const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState(null);
  const checkEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleEmail = (e) => {
    if (!checkEmail(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(e.target.value);
  };

  //validation for password
  const [pass,setPass]=useState("");
  const [passErr,setPassErr]=useState(false);
  
  function passHandler(e){
    let item=e.target.value;
    if(item.length<6 )
    {
       setPassErr(true)
    }
    else
    {
        setPassErr(false)
    }
    setPass(item)
    
    
}
  
  const register = (e) => {
    e.preventDefault();
    const { name, username, gender, dob, email, password, reEnterPassword } =
      user;
    if (
      name  &&
      username &&
      gender &&
      dob &&
      email &&
      password &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:3001/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <div className="registerPage flexDiv">
        <div className="contanier flexDiv">
          <div className="videoDiv">
            <img
              src={"/assests/exp.gif"}
              alt="Logo Image"
              className="absolut"
            />
            <div className="textDiv">
              <h2 className="title">Explore the books</h2>
              <p>Books at your fingertips!!</p>
            </div>
            <div className="footerDiv flexDiv">
              <span className="text">Already have an account?</span>
              <Link to={"/login"}>
                <button className="btn">Sign In</button>
              </Link>
            </div>
          </div>

          <div className="fromDiv scrollDi">
            <div className="headerDiv flex flex-col items-center justify-center overflow-hidden">
              <img
                src={"/assests/logoExplore.png"}
                alt="Logo Image"
                className="w-auto h-auto scale-90 border-[1px]"
              />
              <h3>Let us Know about you!!</h3>
            </div>

            <form onSubmit={register} className="form">
              <div className="inputDiv">
                <label htmlFor="name">Name</label>
                <div className="input flexDiv">
                  <CiFaceSmile className="icon" />
                  <input
                    type="text"
                    name="name"
                    value={name}     //changes
                    placeholder="Your Name"
                    onChange={handleName}  //changes
                  ></input>
                 
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flexDiv">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Set Username"
                    value={uname}          //changes 
                    onChange={unameHandler} //changes and on line 179
                  // onChange={(e) => setUsername(e.target.value)}
                  />
                   {unameErr?<span>Username Not Valid</span>:""} 
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="gender">Gender</label>
                <div className="input flexDiv">
                  <FaGenderless className="icon" />
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    // value={user.gender}
                    onChange={handleChange}
                  />{" "}
                  Male
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    // value={user.gender}
                    onChange={handleChange}
                  />{" "}
                  Female
                  <input
                    type="radio"
                    value="Other"
                    name="gender"
                    // value={user.gender}
                    onChange={handleChange}
                  />{" "}
                  Other
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="DOB">Date Of Birth</label>
                <div className="input flexDiv">
                  <MdDateRange className="icon" />
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="Enter DOB"
                    value={user.dob}
                    onChange={handleChange}
                  // onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flexDiv">
                  <MdMarkEmailRead className="icon" />
                  <input
                    type="text"
                    name="email"
                    value={email}  //changes 
                    placeholder="Your Email"
                    onChange={handleEmail}  //changes and on line 239
                  />
                   {emailError?<span>Email Not Valid</span>:""} 
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flexDiv">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    name="password"
                    value={pass}   //changes 
                    placeholder="Set Password"
                    onChange={passHandler} //changes and on line 253
                  />
                   {passErr?<span>Password must have 6 characters </span>:""} 
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flexDiv">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    placeholder="Re-enter Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn flexDiv">
                <span>Register</span>
                <AiOutlineSwapRight className="icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
