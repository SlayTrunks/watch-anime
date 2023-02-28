import React from 'react'
import Header from './Header'
import {SiFacebook, SiInstagram, SiLinkedin, SiTwitter} from 'react-icons/si'
import { useState } from 'react'

const Contact = () => {
  const [inp,setInp] = useState({
    name:"" , email:"" , message:""
  })
  const handleChange = (e)=>{
    setInp({...inp,[e.target.name] : e.target.value})
    
    console.log(inp)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inp.name && inp.email && inp.message){
      alert(`Dear ${inp.name} your message have been received by us , kindly wait for our response thankyou!!`)
    setInp({name:"",email:"",message:""})
    }
  }
  return (
    <>
    <Header />
    <section id="contact">
  <h2>Contact Us</h2>
  <form>
    <input type="text" placeholder="Your Name" name='name' value={inp.name } onChange={handleChange}/>
    <input type="email" placeholder="Your Email" value={inp.email} name='email' onChange={handleChange}/>
    <textarea placeholder="Your Message" value={inp.message} name='message' onChange={handleChange}></textarea>
    <button type="submit" onClick={handleSubmit}>Send</button>
  </form>
  <div id="social-icons">
    <a href="https://twitter.com/slaytrunks" target={'_blank'} >
      <SiTwitter className='twitter' />
    </a>
    <a href="https://facebook.com/diwas69" target={'_blank'} >
      <SiFacebook className='facebook' />
    </a>
    <a href="https://instagram.com/diwas.js"  target={'_blank'}>
      <SiInstagram className='instagram' />
    </a>
    <a href="https://linkedin.com/slaytrunks"  target={'_blank'}>
      <SiLinkedin className='linkedin' />
    </a>
  </div>
</section>
</>
  )
}

export default Contact
