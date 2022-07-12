import styles from '../styles/Home.module.css'
import { fetchEntries } from '../util/contentfulPosts'
import Post from '../components/Post'

export default function Home({ posts }) {
  return (
    <div className='posts'>
      {posts.map(post => {
        return <Post key={post.date} date={post.date} title={post.title} image={post.image.fields} />
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