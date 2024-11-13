import { RiFileShredLine } from 'react-icons/ri';
import { IoTextSharp } from 'react-icons/io5'; 
import { BsEyeFill } from 'react-icons/bs';
import { SiIbm } from 'react-icons/si'
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { PiGraphicsCardFill } from 'react-icons/pi';

export default function Access(){
    return(
        <section>
            <h1>Access Clipboard Anywhere</h1>

            <p>Whether you're on the go, or at your computer, you can aceess all your Clipboard snippets in a few simple clicks.
            </p>
            <img src="./assets/img/image-devices.png" alt="iphone and ipad image" aria-label="iphone and ipad image" loading="lazy" />

            <h2>Supercharge your workflow</h2>
            <p>We've got the tools to boost your productivity.</p>

            <div className='flex flex-col md:flex-row gap-10'>
                
                <div className='text-center'>
                    <RiFileShredLine className='svg-icons' />

                    <h2 className='md:text-base'>Create blacklists</h2>
                    <p className='md:text-xs'>Ensure sensitive informatino never makes its way to your clipboard by excluding certian sources.</p>
                </div>

                <div className='text-center'>
                    <IoTextSharp className='svg-icons'/>
                    <h2 className='md:text-base'>Plain text snippets</h2>
                    <p className='md:text-xs'>Remove unwanted formatting from copied text for a consistent look.</p>
                </div>
                
                <div className='text-center'>
                    <BsEyeFill  className='svg-icons'/>

                    <h2 className='md:text-base'>Sneak preview</h2>
                    <p className='md:text-xs'>Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>
                
            </div>

            <div className="flex flex-col  gap-2 mt-10 md:flex-row md:gap-10 md:justify-between md:w-full p-2">
                <FaGoogle  className='svg-icons'/>
                <SiIbm  className='svg-icons'/>
                <FaMicrosoft className='svg-icons' />
                <PiGraphicsCardFill className='svg-icons' />
            </div>
        </section>
    )
}