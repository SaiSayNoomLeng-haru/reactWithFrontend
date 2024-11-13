import classNames from "classnames";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export default function Footer(){
    const footerClass = classNames(
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'bg-slate-300',
        'p-10',
        'gap-5'
    );
    return(
        <footer className={footerClass}>
            <img src="/assets/img/logo.svg" alt="clipboard logo" aria-label="clipboard logo image" className="max-w-[20%] mb-5" />

            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Press Kit</p>
            <p>Install Guide</p>

            <div className="flex gap-3 text-3xl text-slate-600">
                <FaFacebookSquare/> 
                <FaTwitterSquare />
                <FaInstagramSquare />
            </div>
        </footer>
    )
}