import React, {useState} from 'react'
import axios from "axios";
import "./LoginPage.css"
import image from "./Assets/Logos/CodeTogetherText.png"

export default function LoginPage() {

    const [values, setValues] = useState({ cfID: "", password: "" });

    const handleSubmit = async (event) => {
        if (handleValidation()) {
            try {
                    const { password, cfID } = values;
                    const { data } = await axios.post("http://localhost:8000/login", { cfID, password }, { withCredentials: true });
                    if (data.status === false) console.log(data.msg)
                    else if (data.status === true) {
                        console.log(data);
                        localStorage.setItem(process.env.CODETOGETHER_APP_LOCALHOST_KEY, JSON.stringify(data.data));
                        console.log("success");
                    }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleValidation = () => {
        const { password, cfID } = values;
        if (password === "" || cfID === "") { console.log("cfID and password required"); return false; }
        return true;
    };

    const handleChange = (event) => { setValues({ ...values, [event.target.name]: event.target.value }) };

    return (
        <>
            <div id="loginPageMain1">
                <div id="loginPageMain2">
                    <img id='loginMainPageTitle' src={image} alt="" />
                    <div id='loginForm'>
                        <input id="loginFormcfID" type="text" placeholder="CodeForces ID" name="cfID" onChange={(e) => handleChange(e)} min="3" autoComplete="off" />
                        <input id="loginFormPassword" type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} autoComplete="off" />
                        <button id="loginFormButton" onClick={() => handleSubmit()}>Log In</button>
                    </div>
                </div>
            </div>
        </>
    )
}