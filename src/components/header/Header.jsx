import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs'
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import LOGO from "../../assets/logo.png"
import InfoContext from '../../context/infoContext';

const Header = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    const ctx = useContext(InfoContext);
    const [searchInput, setSearchInput] = useState("");

    const updateSearchInput = event => {
        setSearchInput(event.target.value);
    }

    const searchAddressHandler = async(e) => {
        e.preventDefault()

        
        ctx.fetchUserData(searchInput);
        setSearchInput("")
    }

    const changeModeHandler = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark')
        // document.body.classList.toggle('light-mode');
        props.onChangeDarkMode();
    }

    const modeContent = darkMode ? <span onClick={changeModeHandler} className="material-icons-sharp text-white cursor-pointer">light_mode</span> : <span onClick={changeModeHandler} className="material-icons-sharp text-gray-900 cursor-pointer">dark_mode</span>;

    return (
    <div className=' p-6 border-b-2 bg-slate-300 border-cyan-600 dark:bg-gray-800'>
        <div className="flex justify-evenly items-center">
            <div className="logo items-center flex space-x-3">
                <Link to='/' className='w-12'>
                    <img src={LOGO} className="w-[100%] " alt="" />
                </Link>
                <Link to="/" className='link'>
                    <h1 className='text-cyan-800 dark:text-cyan-300 text-4xl'>HARMATCH</h1>
                </Link>
            </div>
            <div className="hidden items-center md:flex">
                <div className="search-icon w-auto cursor-pointer rounded-l-md  p-3 bg-cyan-800 text-white">
                    <BsSearch className='' onClick={searchAddressHandler}/>
                </div>
                <form onSubmit={searchAddressHandler} className="w-[90%]">
                    <input className='w-[93%] bg-transparent text-black dark:text-white outline-none border-2 border-cyan-800 rounded-md p-3 focus:ring-2 focus:ring-cyan-400 placeholder:text-black dark:placeholder:text-white' value={searchInput} onChange={updateSearchInput} type="text" name="search"  placeholder='Search Address...'/>
                </form>
            </div>
            <div className="mode-toggle">
                { modeContent }
            </div>
        </div>
        {/* serach on mobile */}
        <div className="flex items-center mt-5 mx-auto w-[80%] md:hidden">
            <div className="search-icon w-auto cursor-pointer rounded-l-md  p-3 bg-cyan-800 text-white">
                <BsSearch className='' onClick={searchAddressHandler}/>
            </div>
            <form onSubmit={searchAddressHandler} className="w-[90%]">
                <input className='w-[93%] bg-transparent text-black dark:text-white outline-none border-2 border-cyan-800 rounded-md p-3 focus:ring-2 focus:ring-cyan-400 placeholder:text-black dark:placeholder:text-white' value={searchInput} onChange={updateSearchInput} type="text" name="search"  placeholder='Search Address...'/>
            </form>
        </div>
        
        <ToastContainer />
    </div>
    )
}

export default Header