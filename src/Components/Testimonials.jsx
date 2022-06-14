import React from 'react'
import '../style/Testimonials.css'

function Testimonials () {
    return (
        <section className='testimonial-container'>
            <img
                className='testimonial-container_image'
                src={require('../assets/images/testimonial-Shawn.png')}
                alt='Emma photography'
            />

            <div className='testimonial-container_text'>
                <p className='testimonial-name'><strong>Shawn Wang</strong> in Singapore</p>
                <p className='testimonial-charge'>Software Engineer at <strong>Amazon</strong></p>
                <p className='testimonial-text'>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>
            </div>
        </section>
    )
}

export default Testimonials;