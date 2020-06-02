import Head from 'next/head';

import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/posts-api';

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Cleveland React Blog Example</title>
        </Head>
        <Container>
          <Intro />

          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    unstable_revalidate: 1,
    props: { allPosts },
  };
}
