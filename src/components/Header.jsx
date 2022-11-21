import React,{useState} from 'react'
import App from '../App'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import Home from './Home'


const Header = () => {

    const [change, setChange] = useState(true); 

    const styles = { section: { fontSize: "18px", color: "#292b2c", backgroundColor: "#fff", padding: "0 20px" }, wrapper: { textAlign: "center", margin: "0 auto", marginTop: "50px" } }

    const handleClick =  (event, message)  => {
        console.log(event.target);
        console.log(message);
        console.log('image clicked');

    }
  return (
      
    <div className='container'>
         {change?<Home />:<h1></h1>
                }

        <div className='story-container'>
            <div className='content'>
                <div className='img-container'>
                    <img src={image1} alt="Mountain" onClick = {() => setChange(!change)} />
                   
                </div>
            <div className='text-container'>
                    Alaska
                </div>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img src={image2} alt="Mountain" onClick={handleClick} />
                </div>
            <div className='text-container'>
                    Canada
                </div>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img src={image3} alt="Mountain" onClick={handleClick} />
                </div>
            <div className='text-container'>
                    Mexico
                </div>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img src={image4} onClick={handleClick} />
                </div>
            <div className='text-container'>
                    Italy
                </div>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img src={image1} onClick={handleClick} />
                </div>
            <div className='text-container'>
                    Austria
                </div>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img src={image2} onClick={handleClick} />
                </div>
            <div className='text-container'>
                    Spain
                </div>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img src={image3}/>
                </div>
            <div className='text-container'>
                    Denmark
                </div>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img src={image4}/>
                </div>
            <div className='text-container'>
                    Nepal
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;