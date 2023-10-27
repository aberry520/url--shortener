import { useState } from "react"

export const LogInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setName(username);
        const user = {
            username,
            password
        }
        
        const url = 'http://localhost:8000/token/';
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then((response) => response.json());
        console.log(data);
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        // console.log("Username: ", username)
        // console.log("Name: ", name)
        // localStorage.setItem('username', name);
        setPassword('');
        setUsername('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Log In Here</h2>
                <input type="text" placeholder="enter username" name="username" value={username} onChange={handleChangeUsername} />
                <br />
                <input type="password" placeholder="enter password" name="password" value={password} onChange={handleChangePassword} />
                <button type="submit">LogIn</button>
            </form>
            <h2>{name}</h2>
        </>
    )
}