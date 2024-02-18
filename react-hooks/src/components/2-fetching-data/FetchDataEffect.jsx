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
    const [singlePost, setSinglePost] = useState();
    
    return ( 
        <>
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
        </>
    );
}

export default FetchDataEffect;