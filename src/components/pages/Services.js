import React, {useState} from 'react'
import '../../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getImages} from '../../dev/images';

export default function Services() {

  const [image, setImage] = useState('')

  setImage(getImages('dog',3))


    const toastId = React.useRef(null);
  
    const notify = () => {
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast("I cannot be duplicated!");
      }
    }
    
    return (
    <>
        <h1 className='services'>SERVICES</h1>
        <div className="service__main__container">
            <img src={image} alt="" />
        </div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </>
    )
    
}