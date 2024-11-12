import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { createContext, lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { getData } from './Api';

import MainLayout from './Components/Layout/MainLayout';

const Home = lazy(() => import('./Components/Pages/Home'));
const Shop = lazy(() => import('./Components/Pages/Shop'));
const AboutUs = lazy(() => import('./Components/Pages/AboutUs'));
const ContactUs = lazy(() => import('./Components/Pages/ContactUs'));
const Blog = lazy(() => import('./Components/Pages/Blog'));
const Wishlist = lazy(() => import('./Components/Pages/Wishlist'));
const Cart = lazy(() => import('./Components/Pages/Cart'));
const SignIn = lazy(() => import('./Components/Pages/SignIn'));
const ErrorPage = lazy(() => import('./Components/Pages/errorPage'));
const ProductDetail = lazy(() => import('./Components/Pages/ProductDetail'));


const AppContext = createContext();

export default function App() {
  const [ data, setData ] = useState([]);

  const loadData = useCallback(async () => {
      const data = await getData();
      setData(data);  
  }, []);

  useEffect(() => {
    loadData()
  }, [loadData])
  
 
  return (
    <>
    <AppContext.Provider value={{data}}>
     <BrowserRouter>
        <Suspense fallback={<h2>Loading...</h2>}>
         <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />}/>
            <Route path="shop/:id" element={<ProductDetail />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path='blog' element={<Blog />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='cart' element={<Cart />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
         </Routes>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
      
    </>
  )
}

export { AppContext } 
