import { memo, useCallback, useState } from "react";
import Button from "../Utility/Button";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../Utility/Banner";

const ContactUs = () =>{
    const [ userData, setUserData ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [ error, setError] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const errorStyles = {
        border: "2px solid hsl(var(--clr-red))"
    }

    const reg_Email = /^[a-zA-Z0-9%_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = useCallback((e) => {
        const { value, name } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        
        setErrorMsg((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    }, []);
    
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        const {name, email, subject, message } = userData;
        const newError = {}

        if(name === ''){
            setError(true);
            newError.name = `Name field can't be empty`;
        }
        if(email === ''){
            setError(true);
            newError.email = `Email field can't be empty`;
        }
        if(email && !reg_Email.test(email)){
            setError(true);
            newError.email = `Must be a valid email address`;
        }
        if(subject === ''){
            setError(true);
            newError.subject = `Subject field can't be empty`;
        }
        if(message === ''){
            newError.message = `Message field can't be empty`;
        }

        setErrorMsg(newError)

        if(Object.keys(newError).length === 0){
            console.log('submitted')
        }
    }, [userData, reg_Email]);

    return(
       <section id="contact-us" className="flow">
        <div className="contact-us-header bg-accent flex">
            <h1 className="bold-1">Contact Us</h1>
            <p className="fs-300">Home / Contact Us</p>
        </div>

        <div className="contact-us-body flex container">
            <form action="" className="contact-us-form grid" onSubmit={handleSubmit}>
                <p className="fs-500 bold-2">Get in Touch</p>
                <p className="fs-300">Your email address will not be published. Required fields are marked.</p>

                <div className="input-boxes grid">
                    <label htmlFor="name">
                        Name
                        {error ? <span className="text-orange fs-300 text-italic"> &nbsp;{errorMsg.name}</span> : ''}
                    </label>
                    <input 
                        type="text"
                        name='name'
                        placeholder="Ex. John Doe"
                        id="name"
                        value={userData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        style={error ? errorStyles : null}/>
                </div>

                <div className="input-boxes grid">
                    <label htmlFor="email">
                        Email
                        {error ? <span className="text-orange fs-300 text-italic"> &nbsp;{errorMsg.email}</span> : ''}
                    </label>
                    <input 
                        type="text"
                        name="email"
                        placeholder="example@gmail.com"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        style={error ? errorStyles : null}/>
                </div>

                <div className="input-boxes grid subject">
                    <label htmlFor="subject">
                        Subject
                        {error ? <span className="text-orange fs-300 text-italic"> &nbsp;{errorMsg.subject}</span> : ''}
                        </label>
                    <input 
                        type="text"
                        name="subject"
                        placeholder="Enter Subject"
                        id="subject" 
                        value={userData.subject}
                        onChange={handleChange}
                        autoComplete="off"
                        style={error ? errorStyles : null}/>
                </div>

                <div className="input-boxes grid message">
                    <label htmlFor="message">
                        Your Message
                        {error ? <span className="text-orange fs-300 text-italic"> &nbsp;{errorMsg.message}</span> : ''}
                        </label>
                    <textarea 
                        name="message" 
                        id="message"
                        value={userData.message}
                        onChange={handleChange}
                        style={error ? errorStyles : null}></textarea>
                </div>

                <Button className='bg-brown text-white'>Send Message</Button>
            </form>

            <div className="contact-us-content bg-accent flow">
                <div>
                    <p className="bold-2">Address</p>
                    <p className="text-muted fs-300">4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>

                <div>
                    <p className="bold-2">Contact</p>
                    <p className="text-muted fs-300">Phone : +1 234 567 8910</p>
                    <p className="text-muted fs-300">Email: example@gmail.com</p>
                </div>

                <div>
                    <p className="bold-2">Business Hours</p>
                    <p className="text-muted fs-300">Monday - Friday : 10:00 - 20:00</p>
                    <p className="text-muted fs-300">Saturday - Sunday : 11:00 18:00</p>
                </div>

                <div>
                    <p className="bold-2">Stay Connected</p>
                    <div className="flex text-dark fs-500">
                        <Link to='https://www.facebook.com'>
                            <FaFacebookSquare />
                        </Link>

                        <Link to='https://www.youtube.com'>
                            <FaYoutubeSquare />
                        </Link>

                        <Link to='https://www.twitter.com'>
                            <FaTwitterSquare />
                        </Link>

                        <Link to='https://www.instagram.com'>
                            <FaInstagramSquare />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <Banner className='container' />
       </section>
    )
}

export default memo(ContactUs);