import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
      <footer id="kontakt" className={styles.container}>
        <div className={styles.text}>
          <h2>Kontakt</h2>
          <p>Ozvěte se!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:matous.kuchar@post.cz">matous.kuchar@post.cz</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/matouš-kuchař-398186294">www.linkedin.com/matouš-kuchař</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/MatousKuchar01">github.com/MatousKuchar01</a>
          </li>
        </ul>
      </footer>
    )
  }