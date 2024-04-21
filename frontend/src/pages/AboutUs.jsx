import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
    return (
        <>
        <Navbar brand=" BlogSpace"/>
        <div className="container my-5">
            <h2 className='pt-4 pb-2'>About Us</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What we are
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                        Welcome to BlogSpace, your go-to destination for inspiration, knowledge, and empowerment.
                        At BlogSpace, we believe in the power of storytelling to ignite change and foster growth. Our platform is dedicated to providing a diverse array of perspectives, insights, and practical advice to help you navigate lifes journey with confidence and resilience.<br/><br/>

                        Whether youre seeking personal development tips, wellness strategies, career advice, or creative inspiration, weve got you covered. Our team of passionate writers and contributors are committed to delivering high-quality content that resonates with our readers and sparks meaningful conversations.<br/>

                        Driven by a shared mission to make a positive impact, we strive to create a welcoming and inclusive community where individuals from all walks of life can come together to learn, connect, and thrive.<br/>

                        Join us as we embark on this enriching journey of self-discovery, growth, and transformation. Together, lets embrace the beauty of lifes complexities and celebrate the endless possibilities of what it means to live authentically and purposefully.<br/><br/>
                        Thank you for being a part of our BlogSpace family. We are excited to have you here!   
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Who we are
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                        We are a team of dedicated writers, creatives, and storytellers united by our shared love for exploring the intricacies of life and the human experience. With diverse backgrounds and unique perspectives, we come together to create a platform that celebrates the beauty of individuality and the power of collective wisdom.<br/><br/>

                        At BlogSpace, we believe in the transformative potential of knowledge, empathy, and connection. <br/>
                        From thought-provoking articles on personal growth and wellness to captivating narratives that transport you to new worlds, we strive to offer something for everyone. Whether you are here to learn, to be inspired, or simply to find solace in shared experiences, we invite you to join us on this journey of exploration and discovery.<br/><br/>

                        Above all, we are storytellers at heart, weaving together the threads of human experience to create a tapestry of understanding and connection. We are BlogSpace, and we are honored to be a part of your story.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>This is the third item accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
