import React, { useState } from 'react'
import Nav from './Nav'
import './LanguagePage.css'
import SubHeader from './SubHeader'
import Row from './Row'
import requests from './api/requests'

export default function LanguagePage() {
  const [fetchUrl, setFetchUrl] = useState('');
  const handleFetchUrlChange = (newFetchUrl) => {
    setFetchUrl(newFetchUrl);
  };
  return (
    <div className='LanguagePage'>
        <Nav/>
        <SubHeader onFetchUrlChange={handleFetchUrlChange}/>
        <Row
        id="NO"
        fetchUrl={fetchUrl}
      />
       
        

    </div>
  )
}
