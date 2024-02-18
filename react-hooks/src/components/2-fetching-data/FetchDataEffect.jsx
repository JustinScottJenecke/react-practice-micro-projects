import { useEffect, useState } from "react";
import axios from "axios";

const FetchDataEffect = () => {
    
    // Get all post objects
    const [allPosts, setAllPosts] = useState([]);
    useEffect( () => {
        axios.get(`https://jsonplaceholder.org/posts`)
            .then(
                response => {
                    console.log(response)
                    setAllPosts(response.data)
                }
            )
            .catch( error => console.log(error))
    }, [])

    // grab single post object
    const [post, setPost] = useState({});
    const [idInput, setIdInput] = useState(1);
    const [submittedId, setSubmittedId] = useState(1)

    const handleGetPostButton = () => {
        setSubmittedId(idInput)
    }

    useEffect( () => {
        axios.get(`https://jsonplaceholder.org/posts/${submittedId}`)
            .then(
                response => {
                    console.log(response.data)
                    setPost(response.data)
                }
            )
    }, [submittedId])
    
    return ( 
        <>
            <div>
                <h3>Single Post Display</h3>
                <input type="number" onChange={ (e) => { setIdInput(e.target.value) }}/>
                <button onClick={ handleGetPostButton }></button>
                <ul>
                    <li>{post.id}</li>
                    <li>{post.slug}</li>
                    <li>{post.title}</li>
                </ul>
            </div>
            <hr /> 
            <div>
                <h3>All Posts</h3>
                <ul>
                    {
                        allPosts.map( singlePost => {
                            return ( 
                                <li key={singlePost.id}>
                                    {singlePost.title}
                                </li>
                            )
                        })
                    }
                </ul>          
            </div>
        </>
    );
}

export default FetchDataEffect;