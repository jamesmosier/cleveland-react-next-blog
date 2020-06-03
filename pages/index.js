import Head from 'next/head';

import Container from '../components/container';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';

import { getAllPosts } from '../lib/posts-api';

export default function Index(props) {
  const { posts } = props;

  return (
    <Layout>
      <Head>
        <title>Cleveland React Blog</title>
      </Head>
      <Container>
        <section>
          <h2 className="mb-8 mt-4 text-6xl md:text-5xl font-bold tracking-tighter leading-tight">
            Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
            {posts.map(post => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    unstable_revalidate: 1,
    props: { posts },
  };
}
