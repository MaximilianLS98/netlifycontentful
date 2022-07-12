import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { fetchEntries } from '../util/contentfulPosts'
import Post from '../components/Post'

export default function Home() {
  return (
    <div className='posts'>
      {posts.map(post => {
        return <Post key={Date.now()} title={post.title} description={post.description} image={post.image.fields} />
      })}
    </div>
  )
}

  export async function getStaticProps() {
    const res = await fetchEntries()
    const posts = await res.map(post => {
      return post.fields
      })

    return {
      props: {
        posts,
    },
  }
}