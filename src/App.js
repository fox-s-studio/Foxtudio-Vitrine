import React, {useState, useEffect} from 'react';
import Loading from './layout/Loading';
import Navbar from './layout/Navbar';
import Header from './components/Header';
import MobileMenu from './layout/MobileMenu';


function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout( () => {
      setReady(true);
    },3000);
  });

  return (ready) ? (
    <div className="App">
      <Navbar />
      <MobileMenu />
      <Header />
    </div>
  ) : (
    <Loading />
  )
}

export default App;
