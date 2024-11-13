import './App.css'

import Hero from './Components/Hero';
import Track from './Components/Track';
import Access from './Components/Access';
import Clipboard from './Components/Clipboard';
import Footer from './Components/Footer';


function App() {
  

  return (
    <>
     <Hero />
     <main className='grid font-main gap-10 divide-y'>
        <Track />
        <Access />
        <Clipboard />
     </main>
     <Footer />
    </>
  )
}

export default App
