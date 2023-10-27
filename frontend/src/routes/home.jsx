import { URLForm } from "../components/URLForm";

export async function loader() {
    const url = "http://127.0.0.1:8000/url";
    const urls = await fetch(url,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
        },
    }).then(response => response.json());
    console.log(urls)
    return urls;
}
export default function Home (){

    return (
        <>
            <URLForm/>
        </>
    )
}