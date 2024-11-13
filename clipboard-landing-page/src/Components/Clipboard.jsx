import { lazy, Suspense } from "react"


const Button = lazy(() => import('./Utilities/Button'));

export default function Clipboard(){
    return(
        <section>
            <h1>Clipboard for iOS and Mac OS</h1>
            <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</p>

            <div className="btn-group flex flex-col gap-4 container md:flex-row md:justify-center">
                <Suspense fallback={<p>Loading...</p>}>
                    <Button className='bg-strong-cyan shadow-custom-cyan'>Download for iOS</Button>
                    <Button className="bg-light-blue shadow-custom-blue">Download for Mac</Button>
                </Suspense>
            </div>

        </section>
    )
}