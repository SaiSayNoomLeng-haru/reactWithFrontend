import Header from "../Utility/Header"
import { Outlet } from "react-router-dom"

export default function MainLayout(){
    return(
       <>
        <Header />
        <main>
            <Outlet />
        </main>
       </>
    )
}