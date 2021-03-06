import Error from 'next/error'
import { useRouter } from 'next/router'

import Container from '@/components/Container'
import Section from '@/components/Section'
import Layout from '@/components/Layout'
import PostContent from '@/components/post/PostContent'
import PostNavigator from '@/components/post/PostNavigator'
import posts from '@/constants/historyPosts'
import { getPostFirstParagraph } from '@/utils'

type TProps = {
  post: TPost
  index: number
}

const PostSection = ({ post, index }: TProps): JSX.Element => {
  return (
    <Section className="pb-20">
      <div
        className="w-full h-72 sm:h-96 xl:h-120 bg-center bg-cover mb-8"
        style={{ backgroundImage: `url('${post.coverUrl}')` }}
      ></div>

      <Container className="article-header">
        <h2 className="title">{post.title}</h2>
        <div className="authors">
          <p>作者 / {post.author}</p>
        </div>
      </Container>

      <PostContent contents={post.contents} />

      <PostNavigator prefix="history" posts={posts} index={index} />
    </Section>
  )
}

const HistoryPostPage = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  const index = posts.findIndex((c) => c.slug == slug)
  if (index == -1) return <Error statusCode={404} />
  const post = posts[index]

  const firstParagraph = getPostFirstParagraph(post)
  const metadata: TMetadata = {
    imageUrl: post.coverUrl,
    description: firstParagraph,
  }

  return (
    <Layout title={post.title} metadata={metadata}>
      <PostSection post={post} index={index} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug == params.slug)

  // Pass post data to the page via props
  return { props: { post } }
}

export default HistoryPostPage
