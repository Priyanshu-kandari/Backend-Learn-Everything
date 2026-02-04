import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const Feed = () => {

  const [posts, setPosts] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts)
    })
  },[])

  return (

    <section className='feed-section'>
        <h1>Feed</h1>
        {
          posts.length>0?(
            posts.map((post) => {
              return <div key={post._id} className='post-card'>
                <img src={post.image} alt="" />
                <p>{post.caption}</p>
              </div>
            })
          ):(
            <h1>No posts Available</h1>
          )
        }
    </section>
  )
}

export default Feed