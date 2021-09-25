import { useState } from 'react'

import { Nav } from './nav'

export const Home = ({ onLogin, onSignUp }) => {
        const [login, setLogin] = useState("");
        const [pass, setPass] = useState("");

        const handleLoginChange = (e) => {
                setLogin(e.target.value);
        };

        const handlePassChange = (e) => {
                setPass(e.target.value);
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                setLogin("");
                setPass("");
                if (!!onLogin) {
                        onLogin(login, pass);
                } else {
                        onSignUp(login, pass);
                }
        };


        return <>
                <Nav />
                <h3>{!!onLogin ? 'Login' : 'SignUp'}</h3>
                <form onSubmit={handleSubmit}>
                        <input type="text" value={login} onChange={handleLoginChange} />
                        <input type="password" value={pass} onChange={handlePassChange} />
                        <input type="submit" />
                </form>
        </>;
};