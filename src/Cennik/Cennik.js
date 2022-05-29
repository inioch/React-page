import React from 'react'
import './Cennik.css'

const Cennik = () => {
  return (
    <div className='cen-main'>
       <div className='bar'>
           <h1>Paznokcie</h1>
           <div className='podmenu'>
               <p>Ściąganie stylizacji</p>
               <p>10zł</p>
           </div>
           <div className='podmenu'>
               <p>Manicure Hybrydowy</p>
               <p>50zł</p>
           </div>
           <div className='podmenu'>
               <p>Pedicure Hybrydowy</p>
               <p>60zł</p>
           </div>
           <div className='podmenu'>
               <p>Manicure + Pedicure</p>
               <p>80zł</p>
           </div>
           <div className='podmenu'>
               <p>Manicure Japoński</p>
               <p>40zł</p>
           </div>
           <div className='podmenu'>
               <p>Żele</p>
               <p>80zł</p>
           </div>
           <div className='podmenu'>
               <p>Przedłuzanie</p>
               <p>od 90zł</p>
           </div>
       </div>
       <div className='bar'>
           <h1>Makeup</h1>
       <div className='podmenu'>
               <p>Pielegnacja</p>
               <p>10zł</p>
           </div>
           <div className='podmenu'>
               <p>Makijaż okolicznościowy</p>
               <p>60zł</p>
           </div>
       </div>
    </div>
  )
}


// Paznokcie:Ściaganie poprzedniej stylizacj 10 zł  Manicure hybrydowy 50 zł  Pedicure Hybrydowy 60 zł  Manicure+Pedicure 80zł  Manicure Japoński 40 zł  Żele 80ZŁ  Przedłuzanie od 90zł
// Makeup: Pielegnacja 10 zł   Makijaż okolicznościowy od 60 zł

export default Cennik