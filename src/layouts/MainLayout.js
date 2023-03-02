import Navigation from '../components/Navigation'

import Footer from '../components/Footer'
import Navbar from 'src/components/Navbar'

export default function MainLayout({ children }) {
  return (
    <>

      <Navbar />
      <Navigation />
      <main>
        <div>{children}</div>
      </main>
      <Footer />

    </>
  )
}
