import React, {useState, useEffect} from 'react'
import "./Nav.css"
import logo from '../Img/diamoncik.png'
import {Link} from 'react-router-dom'
import {BsList} from 'react-icons/bs'

const Nav = () => {
//Nav styl
  const [displays, setdisplays] = useState("none");

//Bool na Nav
  const [checkNavState, setcheckNavstate] = useState(true);

  const [widthsize, setWidthsize] = useState(window.innerWidth);

 const  widthscreen = () =>{
    const navWidth = window.innerWidth
    console.log(navWidth)
  }

    const screens = window.addEventListener('resize', widthscreen);


const screenWide = window.innerWidth
//pojawianie sie paska menu
  const handleNone = () =>{
    if(checkNavState){
    setcheckNavstate(!checkNavState)
    setdisplays("none")

    }
    else{
      setdisplays("flex")
      setcheckNavstate(!checkNavState)
    }
  }
// warunek wielkosci
  {
  return (
    <>
    <div id='nav' className='nav'>
         <div className='nav'>
            <Link  className='items' to='/paznokcie'>PAZNOKCIE</Link>
            <Link className='items' to='/makeup'>MAKEUP</Link>
            <Link  className='items'to='/promocje'>PROMOCJE</Link>
            <Link  className='items'to='/' ><img className='logo' alt='logo' src={logo} /></Link>
            <Link  className='items'to='/onas'>O NAS</Link>
            <Link  className='items'to='/cennik'>CENNIK</Link>
            <Link  className='items'to='/kontakt'>KONTAKT</Link>
            </div>  
    </div>
     <div id='nav-sm' className='nav-sm'>
     <button onClick={handleNone} className='icon-small'><BsList /></button>
     <div className='nav-sma' id='navsma' style={{display: displays}}>
         <Link onClick={handleNone} className='items-sm' to='/paznokcie'>PAZNOKCIE</Link>
         <Link onClick={handleNone} className='items-sm' to='/makeup'>MAKEUP</Link>
         <Link onClick={handleNone} className='items-sm'to='/promocje'>PROMOCJE</Link>
         <Link onClick={handleNone} className='items-sm'to='/onas'>O NAS</Link>
         <Link onClick={handleNone} className='items-sm'to='/cennik'>CENNIK</Link>
         <Link onClick={handleNone} className='items-sm'to='/kontakt'>KONTAKT</Link>
         </div> 
   </div>
   </>
  )
  }
     
   
  


}

export default Nav