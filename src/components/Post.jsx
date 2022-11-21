import React from 'react'
import './Post.css';
import Mexicon from '../assets/Mexicon.jpg'

const Post = () => {
  return (
    <div className='post-container'>
        <div className='poststory-container'>
            <div className='postcontent'>
                <div className='postimg-container'>
                    <img src={ Mexicon }/>
                    <h4>Thisis nature</h4><br/>
                    <p>Paid Partnership</p>
                </div>
               <div className='Mexicon'>
                  <p className='Mexicon-description'><b>Nature</b> is a British weekly scientific journal founded and based in London, England. </p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Post;