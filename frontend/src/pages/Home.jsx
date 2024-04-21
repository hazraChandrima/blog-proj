import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

// import { IF, URL } from "../url"


export default function Home() {
    return (
        <>
        <Navbar brand=" BlogSpace"/>
        <div>
            
            <div className='container my-5'>
                <section className="hero-section">
                    <div className="container pt-5">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1>Welcome to BlogSpace</h1>
                                <p>Your go-to source for insightful articles and engaging content.</p>
                                <a href="/register" className="btn btn-primary">Create an account</a>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://reputationtoday.in/wp-content/uploads/2020/04/bigstock-Blog-Blogging-Homepage-Social-134171063.jpg" alt="Blog Introduction Image" className="img-fluid mt-3" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>About Us</h2>
                            <p>At BlogSpace, we believe in the power of storytelling to ignite change and foster growth. Our platform is dedicated to providing a diverse array of perspectives, insights, and practical advice to help you navigate lifes journey with confidence and resilience.</p>

                            <h2>Our Mission</h2>
                            <p>At BlogSpace, our mission is to inspire, educate, and empower our readers to lead happier, healthier, and more fulfilling lives. Through insightful articles, practical tips, and engaging content, we strive to foster personal growth, promote positive change, and provide valuable resources for individuals seeking to improve various aspects of their lives. Whether youre looking for wellness advice, career guidance, or creative inspiration, our goal is to be your trusted companion on the journey towards self-discovery and holistic well-being. Join us as we explore the endless possibilities of personal development, cultivate meaningful connections, and celebrate the joy of living life to the fullest.</p>
                        </div>

                        <div className="col-lg-4">
                            <div className="container mt-5">
                            <img src="https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" alt="Blog Introduction Image" className="img-fluid mt-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
