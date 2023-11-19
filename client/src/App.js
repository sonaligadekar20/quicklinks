import React, { useState } from 'react'
import './App.css'
import ImgCopy from "./copy-icon.png";
import axios from 'axios'

function App(){
  const [url, setUrl] = useState('')
  const [slug, setSlug] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const generatedLink = async () => {
     const response = await axios.post('/link', {
      url,
      slug
    })
    
    setShortUrl(response?.data?.data?.shortUrl)
  }
  return(
    <div>
      <h1 className='app-title'>🔗 Quick Links</h1>

      <div className='app-container'>
        <div className='link-generation-card'>
          <h2>Link Generation</h2>
          <input type ='text'
           placeholder='URL'
            className='user-input' 
            value={url}
            onChange={(e) => 
            {setUrl(e.target.value)}}/>

           <input type ='text'
            placeholder='Slug (optional)'
            className='user-input' 
            value={slug}
            onChange={(e) => 
            {setSlug(e.target.value)}}/>
           
           <div className='
           '>
           <input
            type='text'
            placeholder='Short URL'
            className='input-short-url'
            value={shortUrl}
            disabled/>
            <img src ={ImgCopy} alt="copy" className='copy-icon'/>
           </div>
           
            <button type='button'
             className='btn-generate-link'
             onClick={generatedLink}>
            Do Magic 🪄
            </button>
        </div>
        <div>
          <h2>All Links</h2>
        </div>
      </div>
    </div>
  )
}
export default App