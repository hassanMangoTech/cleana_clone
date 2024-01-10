import React from 'react'
import './contact.css'
import bg from "../../assets/Contact/bg.jpg"
import phone from "../../assets/Contact/phone.png"
import residential from "../../assets/Contact/01.png"
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Contact = () => {
  return (
    <div className='contact-main'>
      <div className='contact-detail'>
        <div className='contact-phone'>
          <img src={phone} alt="" />
        </div>
        
        <h5>Feel Free To Contact</h5>
        <h2>Call Us: +1234-464890</h2>
      </div>
      
      <div className='contact-cards'>

        <div className="contact-card">

          <div className="card-heading">
            <div>
              <img src={residential} alt="" />
            </div>
            <h3>
              Residential <br /><span>Cleaning Services</span>
            </h3>
          </div>

          <p>When you work with clanta cleaning you can cross a major choir off your list, cleaning your home.</p>
          <div className='contact-list'>
            <ul>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Kitchen
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Bathrooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/>  Bedrooms & Living Rooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Windows
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Extra Services
              </li>
          </ul>
            <ul>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Kitchen
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Bathrooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/>  Bedrooms & Living Rooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Windows
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Extra Services
              </li>
          </ul>
          </div>
         
         <div className="contact-button">
          <button>Purchase Now</button>
          <h5>
            $400/  
            <span>
              <b> Per </b>
              Monthly
            </span>
          </h5>
         </div>

        </div>

        <div className="contact-card contact-card-2">

          <div className="card-heading">
            <div>
              <img src={residential} alt="" />
            </div>
            <h3>
              Residential <br /><span>Cleaning Services</span>
            </h3>
          </div>

          <p>When you work with clanta cleaning you can cross a major choir off your list, cleaning your home.</p>
          <div className='contact-list'>
            <ul>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Kitchen
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Bathrooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/>  Bedrooms & Living Rooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Windows
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Extra Services
              </li>
          </ul>
            <ul>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Kitchen
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Bathrooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/>  Bedrooms & Living Rooms
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Windows
              </li>
              <li>
                <IoIosArrowDroprightCircle size={22}/> Extra Services
              </li>
          </ul>
          </div>
         
         <div className="contact-button">
          <button>Purchase Now</button>
          <h5>
            $400/  
            <span>
              <b> Per </b>
              Monthly
            </span>
          </h5>
         </div>

        </div>


      </div>
    </div>
  )
}

export default Contact