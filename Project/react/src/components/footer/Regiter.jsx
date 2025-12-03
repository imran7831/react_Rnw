import React from 'react'
import Form from '../body/section5/Form'

const Regiter = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='s1'>
            <div className='text-center'>
                <h2>Stay Updated with Exclusive Travel Deals!</h2>
                <p>Subscribe to our newsletter and be the first to receive special offers, insider tips, and curated travel inspiration straight to your inbox.</p>
            </div>
            <div className='form'>
                <Form/>
                <p className='text-center p-2'>We respect your privacy. Unsubscribe at any time.</p>
            </div>
            </div>
            <div className='s2 d-flex'>
               <div className='im1'>
                <img src="../src/assets/images/footer/instagram1.jpg" alt="" />
               </div>
               <div className='im2'>
                <img src="../src/assets/images/footer/instagram2.jpg" alt="" />
               </div>
                <div className='im1'>
                <img src="../src/assets/images/footer/instagram3.jpg" alt="" />
               </div>
               <div className='im2'>
                <img src="../src/assets/images/footer/instagram4.jpg" alt="" />
               </div>
                <div className='im1'>
                <img src="../src/assets/images/footer/instagram5.jpg" alt="" />
               </div>
               <div className='im2'>
                <img src="../src/assets/images/footer/instagram6.jpg" alt="" />
               </div>
                <div className='im1'>
                <img src="../src/assets/images/footer/instagram7.jpg" alt="" />
               </div>
               <div className='im2'>
                <img src="../src/assets/images/footer/instagram8.jpg" alt="" />
               </div>
            </div>
        </div>
        <div className='s3'>
                <div className='abouts col-12 d-flex'>
                    <div className="col-3">
                         <img src="../src/assets/images/footer/white-logo2.svg" alt="" />
                        <p>Your trusted partner for unforgettable travel experiences. We specialize in curated tours and personalized travel solutions around the globe.</p>
                    </div>
                      <div className='col-3 d-flex justify-content-center'>
                           <div className="col-6">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>About Us</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                      </div>
                       <div className='col-3 d-flex justify-content-center'>
                        <div className="col-6">
                        <h2>Social Media</h2>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                       </div>
                    <div className="col-3 ">
                        <h2>Contact info</h2>
                        <p>258 Travel Street, Suite 101 San Francisco, CA 94847</p>
                        <div className='mb-1'>
                            <i class="bi bi-envelope ali "></i> 
                            <span>hello@touex.com</span>
                        </div>
                        <div>
                            <i class="bi bi-telephone"></i>
                            <span >+1 (444) 585 - 9282</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Regiter