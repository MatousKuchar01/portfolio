import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return ( 
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.welcome}>Čau, jmenuji se Matouš!</h1>
        <p className={styles.desc}>Jsem začínající SW developer, který rád tvoří zajímavé věci a učí se nové technologie. </p>
        <a href="mailto:matous.kuchar@post.cz" className={styles.emailBtn}>Napište mi</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  )
}
