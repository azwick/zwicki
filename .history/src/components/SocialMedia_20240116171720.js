import {GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, XingIcon} from './Icons'

const SocialMedia = () => {
    return ( 
        <nav>
              <ul className={styles.list}>
                  <li className={styles.item}>
                    <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anne-debora-zimmermann-184bb4142/">
                      <LinkedInIcon />
                    </a>
                  </li>
                <li className={styles.item}>
                    <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://www.xing.com/profile/AnneDebora_Zimmermann/">
                      <XingIcon />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/azwick">
                      <GitHubIcon />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://twitter.com/Mrs_Zwickermann">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zwickermanns_on_tour/">
                      <InstagramIcon />
                    </a>
                  </li>
              </ul>
            </nav>
     );
}
 
export default SocialMedia;