import React from 'react'
import loadingGif from '../img/gif/Spin.gif'

const Loading = () => {
  return (
    <div className='loading'>
     <h4>projects data loading ...</h4>
     <img src={loadingGif} alt="" />
      
    </div>
  )
}

export default Loading
