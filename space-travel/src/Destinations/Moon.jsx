import { useOutletContext, useSearchParams } from "react-router-dom"

export default function Moon(){
    const { data } = useOutletContext();
    const [ searchParams, setSearchParams] = useSearchParams();
   
    const nameFilter = searchParams.get('name');

    const filter = data.filter(item => item.name === 'Moon')


    // const displayDestination = nameFilter ? 
    // data.filter


}