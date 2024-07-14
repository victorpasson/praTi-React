import { useEffect, useState } from "react";

const Noticias = () => {
    const [noticias, setNoticias] = useState();

    const fetchPosts = async () => {
        const idnot = Math.floor(Math.random() * 100)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idnot}`)
        const noticiaData = await response.json()
        setNoticias(noticiaData)
    }

    useEffect(() => {
        fetchPosts();
        const timeId = setInterval(() => {
            fetchPosts();
            console.log("Notícia Carregada")
        }, 3000)

        return () => {
            setNoticias(null);
            clearInterval(timeId)
        }
    }, [])

    return(
        <div>
        {noticias ? (
            <>
                <h1>{noticias.title}</h1>
                <p>{noticias.body}</p>
            </>
        ):(
            <>
                <p>Carregando notícias..</p>
            </>
        )}
        </div>
        
    )
}

export default Noticias;