import Footer from './Footer';
import Header from './Header'

//
// Only used in _app.js
//

export const Layout = ({children}) => {
    return (
        <div className={styles.page}>
            <div className="noise"></div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

//
// Content structure for all pages
//

export const Main = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}
