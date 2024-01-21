import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function CustomFooter() {
    const footerStyle = {
        backgroundColor: '#f1f1f1',
        color: 'white',
        textAlign: 'center',
    };

    const socialMediaStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    };

    return (
        <footer style={footerStyle} className='bg-light'>
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.facebook.com/m.phong.912/"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.com/MPhong03"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </section>
            </div>

            <div className="text-center text-dark p-3" style={socialMediaStyle}>
                © 2024 Designed by:&nbsp;
                <a className="text-dark" href="#!">Dang Minh Phong</a>
            </div>
        </footer>
    );
}

export default CustomFooter;
