import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "@pathfindr.dev/recorder/dist/recorder.css"
import { useEffect } from 'react'

export async function getServerSideProps(context) {
  return {
    props: { prop :'xxxx'}, // will be passed to the page component as props
  }
}

const Home: NextPage = ({prop}) => {
  let isLoaded = false;
  useEffect(() =>{
    
    
    if (isLoaded) {
      return
    }
    isLoaded = true;
    const loadLib = async () => {
      return (await import('@pathfindr.dev/recorder')).default;
    }
    
    loadLib().then((Recorder)=>{
      new Recorder("#recorder-container", { recorderType: 'camera' });
      
    });
    
    
  }, [isLoaded]);
  return (
    <div className={styles.container}>
    
    <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <img src="logo.svg"/>
    <div id="recorder-container"></div>
    </div>
    )
  }
  
  export default Home
  