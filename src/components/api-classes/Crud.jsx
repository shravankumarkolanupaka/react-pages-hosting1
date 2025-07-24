import React, { useEffect, useState } from 'react'
import { POST_API } from '../../constants'
const Crud = () => {
    const [posts, setPosts] = useState(null)
    const [formData, setFormData] = useState({ title: '', views: '' })
    useEffect(() => {
        // onpage load logic
        fetch(POST_API)
            .then(response => response.json())
            .then(result => setPosts(result))
    }, [])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handlePost = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }

        fetch(POST_API, reqOptions)
            .then(response => response.json())
            .then(result => {
                alert("record added successfully")
                setPosts([...posts, result])
                setFormData({ title: '', views: '' })
            })

    }

    if (posts == null) {
        return <p>loading...</p>
    }
    return (
        <div style={{ padding: '20px' }}>
            <h2>Crud Operations</h2>
            <form onSubmit={handlePost}>
                <input type='text' placeholder='enter title'
                    name='title'
                    value={formData.title}
                    onChange={handleInput}
                />
                <input type='number' placeholder='enter views'
                    name='views'
                    value={formData.views}
                    onChange={handleInput}
                />
                <input type='submit' />
            </form>
            {/* <p>Title:{formData.title}</p>
            <p>Views:{formData.views}</p> */}
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>
                            <strong>{post.title}</strong> - {post.views}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Crud