import { useEffect, useState } from "react";

export default function useFetchData(data, key){
    const [state, setState] = useState([]);

    useEffect(()=>{
        if(data && data[key]){
            setState(data[key])
        }
    }, [data, key])

    return state;
}