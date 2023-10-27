import { useState } from "react";

export const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password,
        }
        console.log(newUser);
        const Url = 'http://localhost:8000/auth_user/';
        const data = await fetch(Url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        }).then((response) => response.json());
        console.log(data);
        setUrl('');
        setUsername('');
    }
    return (
        <>
            <form>
                <h2>Create your account</h2>
                <input type="text" placeholder="create username" onChange={handleChangeUsername}/>
                <br/>
                <input type="text" placeholder="create password" />
                <br/>
                <input type="text" placeholder="confirm password" onChange={handleChangePassword}/>
            </form>
            <button>Submit</button>
        </>
    )
}