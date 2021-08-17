import React from 'react'

const Post = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <h1>post</h1>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const params = data.map(p => ({
    params: { id: `${p.id}` }
  }))
  return {
    paths: params,
    fallback: false //true needs server
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      currentDate: new Date().getTime(),
      params
    }
  }
}

export default Post