import { useState } from "react"
import {nanoid} from "nanoid"

export const URLForm = () => {
    const [title, setTitle] = useState('');
    const [long_url, setUrl] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeUrl = (e) => {
        setUrl(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newURL = {
            title,
            long_url,
            short_url: nanoid(8),
            user: 3,
        }
        console.log(newURL);
        const Url = 'http://localhost:8000/url/';
        const data = await fetch(Url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newURL)
        }).then((response) => response.json());
        console.log(data);
        setUrl('');
        setTitle('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>URL</h2>
                <input type="text" placeholder="enter title" name="title" value={title} onChange={handleChangeTitle} />
                <br />
                <input type="url" placeholder="enter url" name="long_url" value={long_url} onChange={handleChangeUrl} />
                <button type="submit">Add URL</button>
            </form>
        </>
    )
}