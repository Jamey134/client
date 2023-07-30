import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Form from '../components/Form';
// import Store from '../components/Store';
import { Link } from "react-router-dom";


// import storeController from '../../../server/controllers/store.controller';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([])
    // const navigator =useNavigate()

    const fetchBlog = () => {
        axios.get("http://localhost:8000/api/blogs/")
            .then(res =>{

                setBlogs(res.data.notes)
                console.log(res)
            })          
            .catch (err => console.log(err))
    }



useEffect(fetchBlog, [])

return (
    <div>
        
            {notes.map((notes, i) => {
                return (
                    <div key={i}>
                        
                        <p>{notes.noteTitle}</p> 
                        <p>{notes.noteBody}</p>
                        <Link to={`/note/${notes._id}/edit`}>Edit Note</Link>
                        
                    </div>
                )
            })
            }

            <br></br>
        <Link to='/note/new'><button>Write Note</button> </Link>
    </div>
)
}


export default Dashboard