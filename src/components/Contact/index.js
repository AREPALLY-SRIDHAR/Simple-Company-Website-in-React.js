// Write your JS code here

import {FaLinkedin} from 'react-icons/fa'

import {BsTwitter} from 'react-icons/bs'

import {MdBrowseGallery} from 'react-icons/md'

import './index.css'

const Contact = () => (
  <div className="contact-container">
    <img
      src="https://www.smartxadvisory.com/wp-content/uploads/2022/08/Artboard-1-480x371.png"
      alt="logo"
      className="images"
    />
    <h1 className="heading">Follow Us</h1>
    <div className="con">
      <a href="https://www.linkedin.com/company/flyerft/">
        <FaLinkedin className="icons" />
      </a>
      <a href="https://twitter.com/flyer_ft">
        <BsTwitter className="icons" />
      </a>
      <a href="https://flyerft.com/">
        <MdBrowseGallery className="icons" />
      </a>
    </div>
  </div>
)

export default Contact
