export default function Track(){
    return(
        <section>
            <h1>Keep track of your snippets</h1>
            
            <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our mac and iOS apps will help you organize everything.</p>

            <div className="flex flex-col md:flex-row gap-10 p-5 items-center">
                <img loading="lazy" src="./assets/img/image-computer.png" alt="computer img" className="my-5 md:max-w-[50%] aspect-square" />

                <div className="flex flex-col gap-5">
                    <h2>Quick Search</h2>
                    <p>Easily search your snippets by content, category, web address, application, and more.</p>

                    <h2>iCloud Sync</h2>
                    <p>Instantly saves and syncs snippets across all your devices</p>

                    <h2>Complete History</h2>
                    <p>Retrieve any snippets from the first moment you started using the app.</p>
                </div>

            </div>
            
                
        </section>
    )
}