import React from 'react'
import {fetchPosts} from '../api/index'

function Home() {
    fetchPosts();
  return (
    <div>{data}</div>
  )
}

export default Home
