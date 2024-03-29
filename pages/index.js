import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/site/client.layout';

//Sections
import Header from '../components/layouts/common/header/'
import About from '../components/sections/about';
import Resume from '../components/sections/resume';
import Portfolio from '../components/sections/portfolio';
import Footer from '../components/layouts/common/footer';

//Data
import resumeData from '../data/resumeData.json';

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Stephen Fields - Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>   
        <Header personal={resumeData.main} />
        <About about={resumeData.main} />
        <Resume resume={resumeData.resume} />
        <Portfolio />
        <Footer social={resumeData.main.social} />
      </Layout>
  )
}
