import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const Posts = () => {
  const [posts , setPosts] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => setPosts(json) )
  })
  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        
            <div className="row  ">
              { posts.map(post => {
                return (
                  <div key={post.id} className='col-sm-6 ' >
                    <div className="card-title">{post.title} </div>
                    <div className="card-text">{post.body} </div>
                  </div>
                )
              }) }
              
            </div>
      
      </div>
    </main>
  )
}



