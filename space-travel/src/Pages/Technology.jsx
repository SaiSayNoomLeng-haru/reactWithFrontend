import { memo, useCallback, useContext, useMemo } from "react";
import Button from "../Utility/Button";
import { AppContext } from "../App";
import useFetchData from "../Components/Custom Hooks/UseFetchData";
import useSetParam from "../Components/Custom Hooks/useSetParam";
import useLoading from "../Components/Custom Hooks/useLoading";


const Technology = () => {
    const { data } = useContext(AppContext);
    const technology = useFetchData(data, 'technology');
    const loading = useLoading(data)
    const { getParam, setParam } = useSetParam();

    let idFilter = parseInt(getParam('id') || 1);

    const displayData = useMemo(() => (
        idFilter ? technology.filter(item => item.id === idFilter) : technology || [] 
    ), [idFilter, technology]);


    const imgEl = useMemo(() => (
        displayData.map(item => (
            <div key={item.name}>
                <img src={item.images.portrait} alt={`${item.name}'s picture`} />
            </div>
        ))
    ), [displayData]);

    const dataEl = useMemo(() => (
        displayData.map(item => (
            <div key={item.name}>
                <h1 className="text-accent text-uppercase">
                    The terminology...
                </h1>
                <p className="text-uppercase fs-500 ff-serif">{item.name}</p>
                <p className="fs-300">{item.description}</p>
            </div>
        ))
    ), [displayData])

    const setIdParam = useCallback((id) => (
        setParam('id', id)
    ),[setParam])

    const getButtonStyles = (id) => {
        idFilter === id ? 'active' : ''
    }
    
    return (
        <>
            <p className="tech-title text-uppercase ff-condensed letter-spacing-2 text-center"><span className="numbered-title fs-400 text-accent">02</span>Space Launch 101</p>

        {   loading ? 
        
            (<p className="fs-500 text-center">Loading...</p>)

            :
            
            <section id="technology" className="technology container grid">
            
                
            <div className="technology-img">
                {imgEl}
            </div>

            <div className="tech-btn-group flex">
                <Button
                    className={`number-btn ${getButtonStyles(1)}`}
                    onClick={() => setIdParam(1)}>
                    1
                </Button>

                <Button
                    className={`number-btn ${getButtonStyles(2)}`}
                    onClick={() => setIdParam(2)}>
                    2
                </Button>

                <Button
                    className={`number-btn ${getButtonStyles(3)}`}
                    onClick={() => setIdParam(3)}>
                    3
                </Button>
            </div>

            <div className="technology-content">
                {dataEl}
            </div>
            </section>}
        </>
       
    )
}

export default memo(Technology);