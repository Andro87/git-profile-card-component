import Head from 'next/head'
import Info from '../components/info'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Profile card component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.box}>

        <img src="images/bg-pattern-card.svg"  alt="top"  className={styles.top} />

        <div className={styles.profile}></div>

        <h6>Victor Crest <span className={styles.age}>26</span> </h6>
        <p>London</p>

        <div className={styles.details}>

          <Info
           number={80000}
           title="Followers"
          />

          <Info
           number={803000}
           title="Likes"
          />

          <Info
           number={1400}
           title="Photos"
          />  

        </div>

      </div>

      <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Andro87</a>.
      </div>
      
    </div>
  )
}
