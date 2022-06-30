import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, i'm frontend development intern in Global Systems Products!
        </p>
        <p>
          (This is a sample website like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <h2 className={utilStyles.headingLg}>Blog</h2>
      {allPostsData.map(({ id, date, title }) => (
        <div class="card mb-3" key={id}>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{date}</p>
            <Link href={`/posts/${id}`} className="btn btn-primary">
              Читать подробнее
            </Link>
          </div>
        </div>
      ))}
    </Layout>
  )
}
