import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {

    const [blogTitle, setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState("")

    const formSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/blogs', {
            blogTitle,
            blogBody
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={formSubmit}>
            <h2>What's On Your Mind?</h2>

            <label>Title:</label>
            <input type='text' onChange={(e) => setBlogTitle(e.target.value)} value={blogTitle} />
            <br />
            <label>Body:</label>
            <textarea id='body' type="text" rows="20" cols="70" onChange={(e) => setBlogBody(e.target.value)} value={blogBody} />
            <br />
            <br />
            <button type='submit' value={"Create"}>POST!</button>
        </form>
    )
}

export default Form 