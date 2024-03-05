
export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Contact Us</h4>
                            <p>Email: info@example.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Follow Us</h4>
                            <p>Stay connected on social media:</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#" className="text-light">Facebook</a></li>
                                <li className="list-inline-item"><a href="#" className="text-light">Twitter</a></li>
                                <li className="list-inline-item"><a href="#" className="text-light">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>&copy; 2024 Your Website. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
