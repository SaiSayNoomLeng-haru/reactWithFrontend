import classNames from "classnames";
import { lazy, Suspense } from "react";

const Button = lazy(() => import('./Utilities/Button'))

export default function Hero(){
    const header = classNames(
        'grid',
        'text-center',
        'font-main',
        'w-full'
    )
    return(
        <header className={header}>
            <img src="./assets/img/logo.svg" alt="clipboard logo" loading="lazy" aria-label="Clipboard Landing Page Logo" className="place-self-center max-w-[20%]"/>
            
            <div className="container">
                <h1>A history of everything you copy</h1>

                <p className="mt-3">Clipborad allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
            </div>

            <div className="btn-group flex flex-col gap-4 container md:flex-row md:justify-center place-self-center">
                <Suspense fallback={<p>Loading...</p>}>
                    <Button className='bg-strong-cyan shadow-custom-cyan'>Download for iOS</Button>
                    <Button className="bg-light-blue shadow-custom-blue">Download for Mac</Button>
                </Suspense>
            </div>
        </header>
    )
}