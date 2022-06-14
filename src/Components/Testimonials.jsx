import '../style/Testimonials.css'

function Testimonials (props) {
    return (
        <section className='testimonial-container'>
            <img
                className='testimonial-container_image'
                src={require(`../assets/images/testimonial-${props.image}.png`)}
                alt={props.name + ' photography'}
                title={props.name + ' photography'}
            />

            <div className='testimonial-container_text'>
                <p className='testimonial-name'><strong>{props.name}</strong> in {props.country}</p>
                <p className='testimonial-charge'>{props.position} at <strong>{props.business}</strong></p>
                <p className='testimonial-text'>"{props.text}{props.boldFont}{props.finalText}"</p>
            </div>
        </section>
    )
}

export default Testimonials;