// import About from './Pages/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
      <Contact/>
      <Footer/>
    </main>
  )
}
