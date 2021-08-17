import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Index = (props) => {
  return (
    <div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <Head>
        <title>blog</title>
      </Head>
      <h1>olá</h1>
      {
        props.data.map(p => (
          <div key={p.title}>
            <h2>{p.id}</h2>
            <h2><Link href={`/blog/${p.id}`}>{p.title}</Link></h2>
            <p>{`${p.body?.substr(0,10)}...`}</p>
          </div>
        ))
      }
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      currentDate: new Date().getTime(),
      data
    }
  }
}

export default Index