import {NavLink} from "react-router";
import {useContext, useRef} from "react";
import {UserNameContext} from "../utils/context.ts";

const Login = () => {
    const{setUserName} = useContext(UserNameContext)
    const userName=useRef<HTMLInputElement>(null)
    function handleSetNickName(){
        console.log(userName.current!.value)
        setUserName(userName.current!.value)

    }
    return (
        <div>
            <label>Login
                <input type="text" placeholder={"Your name"}/>
            </label>
            <label>Password
                <input ref={userName} type="password" placeholder={"Your password"}/>
                <NavLink to={"/game"}>
                <button onClick={()=>handleSetNickName()}>Sign In</button>
            </NavLink>
            </label>

        </div>
    );
};

export default Login;