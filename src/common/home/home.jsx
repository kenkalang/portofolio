import './index.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Home extends React.Component {
    scrollToSection(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    render() {
        return (
            <>
                <section className="name">
                    <div className="navbar">
                        <h3 onClick={() => this.scrollToSection('profile')}>
                            Profile
                        </h3>
                        <h3 onClick={() => this.scrollToSection('contacts')}>
                            Contacts
                        </h3>
                    </div>
                    <h1>PORTOFOLIO</h1>
                </section>
                <section className="desc">
                    <h2>Meet Ken Kalang,</h2>
                    <h3>
                        a 4th year college student majoring in Computer Science
                        at Institut Teknologi Bandung. Passionate in Backend and
                        Frontend Development and also interested in Data Science
                        and Machine Learning.
                    </h3>
                </section>
                <section className="experiences" id="profile">
                    <h2>Professional Development</h2>
                    <div className="desc">
                        <h3 className="words">Hi!</h3>
                        <div className="list">
                            <div className="list-item">
                                <h3>BIGIO.ID</h3>
                                <h3 className="last">Jun 2023 - Aug 2023</h3>
                            </div>
                            <div className="list-item">
                                <h3>Cloud Computing Std. (Bangkit)</h3>
                                <h3>Aug 2023 - Present</h3>
                            </div>
                            <div className="list-item">
                                <h3>Institut Teknologi Bandung</h3>
                                <h3>Aug 2020 - Present</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="photo">
                    <h2>Project Experiences</h2>
                    <div className="project-img">
                        <div className="image-item">
                            <img
                                src="https://storage.googleapis.com/ken-bangkit/sarpras.png"
                                alt=""
                            />
                            <div className="text-desc">
                                <h3 className="sarpras">
                                    Booking Management Web Portal DITSP ITB
                                </h3>
                            </div>
                        </div>
                        <div className="image-item">
                            <img
                                src="https://storage.googleapis.com/ken-bangkit/unity.png"
                                alt=""
                            />
                            <div className="text-desc">
                                <h3 className="sarpras">
                                    Survival Shooter Game
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="contact-item" id="contact">
                        <a href="https://www.linkedin.com/in/kenkalang">
                            <FontAwesomeIcon
                                className="logo linkedin"
                                icon={faLinkedin}
                            />
                        </a>
                        <a href="https://github.com/kenkalang">
                            <FontAwesomeIcon className="logo" icon={faGithub} />
                        </a>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;
