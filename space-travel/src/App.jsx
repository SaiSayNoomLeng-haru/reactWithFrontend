import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect, createContext, lazy,Suspense } from 'react';

import MainLayout from './Layout/MainLayout';
import { getData } from './Api';

const Home = lazy(() => import('./Pages/Home'));
const Destinations = lazy(() => import('./Pages/Destinations'));
const Technology = lazy(() => import('./Pages/Technology'));
const Crew = lazy(() => import('./Pages/Crew'));

const AppContext = createContext();

export default function App() {
  const [ data, setData] = useState([]);

  useEffect(() => {
    async function loadData(){
      try{
        const data = await getData();
        setData(data);
      }
      catch(error){
        console.error(error);
      }
    }
    loadData();
  }, []);

  return (
    <>
    <AppContext.Provider value={{data}}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='destinations' element={<Destinations />}/>
              <Route path='technology' element={<Technology />}/>
              <Route path='crew' element={<Crew />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}


export {AppContext}
