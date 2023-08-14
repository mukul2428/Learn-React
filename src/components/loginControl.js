import { useState } from "react";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />
    } else {
        button = <LoginButton onClick={handleLoginClick} />
    }
    return <div>{button}</div>;
}

function LoginButton (props) {
    return <button onClick={props.onClick}>LogIn</button>
}
function LogoutButton (props) {
    return <button onClick={props.onClick}>LogOut</button>
}

export default LoginControl;