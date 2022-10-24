/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AddressInfo from "./components/addressInfo/AddressInfo";
import Header from "./components/header/Header";

import Home from "./components/home/Home";


function App() {
  let navigate = useNavigate()
  const [isDark, setIsDark] = useState(true)
  const changeDarkModeHandler = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    if(window.location.pathname !== '/'){
      navigate('/', {replace : true})
    }
  }, [])


  return (
    <main className="app bg-slate-300 dark:bg-gray-800">
      <div className="contain">
        <Header onChangeDarkMode={changeDarkModeHandler} />
        <div className="">
          <Routes>
              <Route path="/" element={<Home isDark={isDark} />}/>
              <Route path="/address" element={<AddressInfo />}/>
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
