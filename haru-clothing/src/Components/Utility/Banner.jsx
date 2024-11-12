import { LuPackage } from 'react-icons/lu';
import { RiSecurePaymentFill, RiCustomerServiceLine } from 'react-icons/ri';
import classnames from 'classnames';

export default function Banner({className}){
    const classNames = classnames('banner', 'flex', className)
    return(
        <div className={classNames}>
            <div className='banner-item'>
                <LuPackage />
               <div>
                <p className="bold-2 fs-300">Free Shipping</p>
                <p className='fs-300'>Free shipping for order above $180</p>
               </div>
            </div>

            <div className='banner-item'>
                < RiSecurePaymentFill />
               <div>
                <p className="bold-2 fs-300">Secure Payment</p>
                <p className='fs-300'>Secure payments and multiple payment options</p>
               </div>
            </div>

            <div className='banner-item'>
                <RiCustomerServiceLine />
               <div>
                <p className="bold-2 fs-300">24x7 Support</p>
                <p className='fs-300'>We support online all days.</p>
               </div>
            </div>
        </div>
    )
}