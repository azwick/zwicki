import Head from 'next/head'
import { Main } from '../components/Layout'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const Iframex = ({ url, title } : any) => {
    return (
        <iframe className="iframe" src={url}
            title={title}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            loading="lazy"
        ></iframe>
    );
  }

  return (
    <>
      <Head>
        <title>Zwickermann</title>
            <meta name="keywords" content="front-end design, design, designer, designerin, grafik design, illustration, corporate design, cd, corporate identity, wedding, wedding design, diving stamps, frontend-development, development, front-end development, dev, developer, Anne Debora Zimmermann-Zwick, Anne Zwickermann, Anne Debora" />
      </Head>
      <Main>
          <div className={styles.intro}>
              <h2 className={styles.introSubline}>I'm Anne,</h2>
              <h1 className={styles.introMobile}>multi-passionate <br/> front-end dev & <br/> designer</h1>

              <div className={styles.introRow1}>
                  <h1>multi-passionate</h1>
                  <ParallaxBanner
                    className={styles.introParaImg}
                    layers={[
                      {
                        image:
                          "/anne-zwickermann-1.jpg",
                        amount: 0.2
                      }
                    ]}
                    style={{
                      height: "17vw",
                      width: "17vw",
                      maxHeight: "260px",
                      maxWidth: "260px",
                    }}
                  />
              </div>
              <div className={styles.introRow2}>
                  <ParallaxBanner
                    className={styles.introParaImg}
                    layers={[
                      {
                        image:
                          "/anne-zwickermann-2.jpg",
                        amount: 0.2
                      }
                    ]}
                    style={{
                      height: "25vw",
                      width: "25vw",
                      maxHeight: "360px",
                      maxWidth: "360px",
                    }}
                  />
                  <h1>front-end dev &amp;</h1>
              </div>
              <div className={styles.introRow3}>
                <h1>designer</h1>
                <ParallaxBanner
                    className={styles.introParaImg}
                    layers={[
                      {
                        image:
                          "/anne-zwickermann-3.jpg",
                        amount: 0.2
                      }
                    ]}
                    style={{
                      height: "37vw",
                      width: "37vw",
                      maxHeight: "420px",
                      maxWidth: "420px",
                    }}
                  />
              </div>
              <a className="primary" href="https://www.linkedin.com/in/anne-debora-zimmermann-184bb4142/" title="Linkedin CV" target="_blank">
                  About <br/> Me
              </a>
          </div>


          <div className={styles.design}>
            <div className={styles.designGrid}>
              <div>
                  <img src="/az-corporate-design.jpg" title="Wedding Corporate Design" alt="Wedding Corporate Design" />
              </div>
              <div>
                  <img src="/az-picture-factory.jpg" title="Photoshop Magic" alt="Photoshop Magic" />
              </div>
              <div>
                  <img src="/az-logos.jpg" title="Logo Design" alt="Logo Design" />
              </div>
              <div>
                  <img src="/az-diving-stamps.jpg" title="Diving Stamps" alt="Diving Stamps" />
              </div>
            </div>

            <a className="primary" href="/az-portfolio.pdf" title="UNSPLASH Profile" target="_blank">
                Design <br/>Portfolio
            </a>
            <div className={styles.designQuote}>
                  <h2>"Design is thinking <br/> made visual."</h2>
                  <h3>Saul Bass</h3>
            </div>
          </div>


          <div className={styles.dev}>
            <div className={styles.devGrid}>
              <div>
                  <Iframex 
                      url="https://codesandbox.io/embed/1-todo-list-s34v4?fontsize=14&hidenavigation=1&module=%2Fsrc%2FToDoApp.tsx&theme=dark"
                      title="To-Do List (React + Typescript)"
                  />
              </div>
              <div>
                  <Iframex 
                    url="https://codesandbox.io/embed/2-github-user-search-n9wm9?fontsize=14&module=%2Fsrc%2FGitHubApp.tsx&theme=dark"
                    title="Github User Search (React + Typescript)"
                />
              </div>
            </div>
            <a className="primary" href="https://github.com/azwick" title="GitHub Profile" target="_blank">
                Coding <br/> Playground
            </a>
            <div className={styles.devQuote}>
                  <h2>„Be willing to be a beginner every <br/>  single morning“</h2>
                  <h3>Meister Eckhart</h3>
            </div>
          </div>
      </Main>
    </>
  )
}
