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
                                <a href="#" className="btn btn-primary">Read Our Latest Posts</a>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://via.placeholder.com/400" alt="Blog Introduction Image" className="img-fluid mt-3" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna eget libero ultricies facilisis id vel ligula. Quisque sit amet enim ac ligula dapibus cursus. Nullam auctor varius erat, in dignissim ante auctor a.</p>

                            <h2>Our Mission</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna eget libero ultricies facilisis id vel ligula. Quisque sit amet enim ac ligula dapibus cursus. Nullam auctor varius erat, in dignissim ante auctor a.</p>
                        </div>

                        <div className="col-lg-4">
                            <div className="card my-4">
                                <h5 className="card-header">Search</h5>
                                <div className="card-body">
                                </div>
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
