import { useSearchParams } from "react-router-dom";

export default function useSetParam(){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const getParam = (key) => searchParams.get(key);

    const setParam = (key,value) => {
        setSearchParams( prevParmas => {
            const updatedParams = new URLSearchParams(prevParmas);

            if(value === null){
                updatedParams.delete(key);
            }else{
                updatedParams.set(key, value);
            }
            return updatedParams;
        });
    }

    return { getParam, setParam}
}