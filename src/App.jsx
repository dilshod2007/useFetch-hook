import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./components/home/Home'));
const Single = lazy(() => import('./components/single/Single'));


function App() {
  return (
    <>
      <Routes>
        <Route path='' element={ <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path='/single/:id' element={ <Suspense fallback={<div className='loading text-center text-[50px] '>Loading...</div>}><Single /></Suspense>} />
      </Routes>
    </>
  );
}

export default App;

