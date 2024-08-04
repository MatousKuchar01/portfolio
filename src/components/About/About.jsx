import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"



export const About = () => {
  return (
    <section className={styles.container} id="omne">
        <h2 className={styles.title}>O mně</h2>
        <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/firstIcon.png")} alt="First icon" />
            <div className={styles.aboutItemText}>
              <h3>SW Developer</h3>
              <p>
              Mám základní zkušenosti s vývojem softwaru a považuji se za začátečníka, který se neustále učí a zdokonaluje v této oblasti 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/secondIcon.png")} alt="Second icon" />
            <div className={styles.aboutItemText}>
              <h3>Informační management</h3>
              <p>
              Jsem absolventem studia informačního managementu a mám praktické zkušenosti s implementací a správou informačních systémů
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/thirdIcon.png")} alt="Third icon" />
            <div className={styles.aboutItemText}>
              <h3>Datová analýza</h3>
              <p>
              Při zpracování své bakalářské a diplomové práce jsem se intenzivně věnoval datové analýze a získal jsem také příslušný certifikát, což mi poskytlo cenné praktické zkušenosti v tomto oboru
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
