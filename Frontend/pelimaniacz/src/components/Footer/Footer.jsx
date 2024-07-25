/* -------------------------------------------------------------------------- */
/*                                Pie de pagina                               */
/* -------------------------------------------------------------------------- */
function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>We are a team of passionate movie enthusiasts providing the best movie recommendations and reviews.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <ul>
                            <li>Email: contact@pelimaniacz.com</li>
                            <li>Phone: +123 456 7890</li>
                            <li>Address: 123 Movie Street, Film City</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <ul className="social-links">
                            <li><a href="#!">Facebook</a></li>
                            <li><a href="#!">Twitter</a></li>
                            <li><a href="#!">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>&copy; 2024 PeliManiacZ. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;