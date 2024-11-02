import { memo, useCallback, useContext, useMemo} from "react"
import Button from "../Utility/Button";
import { AppContext } from "../App";
import useFetchData from "../Components/Custom Hooks/UseFetchData";
import useSetParam from "../Components/Custom Hooks/useSetParam";
import useLoading from "../Components/Custom Hooks/useLoading";

const Destinations = () => {
    const { data } = useContext(AppContext);
    const destination = useFetchData(data, 'destinations');
    const loading = useLoading(data);
    const { getParam, setParam } = useSetParam();

    const nameFilter = getParam('name') || 'moon';

    const style = useMemo(() => {
        return {
        color : 'hsl(var(--clr-white))',
        fontWeight: 600,
        backgroundColor : 'transparent'
    }}, [])

    const activeStyle = useMemo(() => {return {
        borderBottom : '1px solid hsl(var(--clr-white))'
    }},[]);

    const displayDestination = useMemo(()=>(
        nameFilter ?
        destination.filter(place => place.name.toLowerCase() === nameFilter) : destination || []
    ), [destination, nameFilter]);

    const destinationImage = useMemo(()=>(
        displayDestination.map(place => (
            <div key={place.name}>
                <img src={place.images.png} alt="" />
            </div>
        ))
    ), [displayDestination])

    const destinationData = useMemo( () => (
        displayDestination.map(place => (
            <div key={place.name} className="flow"> 
                <h1 className="ff-serif text-uppercase letter-spacing-2">{place.name}</h1>
                <p className="fs-300">{place.description}</p>
    
                <div className="divider"></div>
    
                <div className="destination-travel flex">
                    <p className="ff-condensed text-uppercase">AVG. Distance 
                        <span className="fs-500 ff-serif text-uppercase d-block
                        ">{place.distance}</span>
                    </p>
    
                    <p className="ff-condensed text-uppercase">est. travel time
                        <span className="fs-500 ff-serif text-uppercase d-block
                        ">{place.travel}</span>
                    </p>
                </div>
            </div>
        ))
    ), [displayDestination])

    const setNameParam = useCallback((name) => (
        setParam('name', name)
    ), [setParam])

    const getButtonStyles = (filterName) => {
        nameFilter === filterName ? {...style, ...activeStyle} : style
    }

    return(
       <section id="destination" className="destination container">
        <p className="text-uppercase ff-condensed letter-spacing-2"><span className="numbered-title fs-400 text-accent">01</span>Pick your destination</p>
        
        { loading ? 
            (<p className="fs-500 text-center">Loading...</p>)
        :
        (<div className="destination-content grid">
            <div className="destination-image-container">
                {destinationImage}
            </div>

            <div className="button-group">
                <Button 
                  style={getButtonStyles('moon')}  
                 onClick={() => setNameParam('moon')}>
                    Moon
                 </Button>

                 <Button 
                   style={getButtonStyles('mars')}  
                  onClick={() => setNameParam('mars')}>
                    Mars
                 </Button>

                 <Button 
                   style={getButtonStyles('europa')}  
                  onClick={() => setNameParam('europa')}>
                    Europa
                 </Button>

                 <Button 
                   style={getButtonStyles('titan')}  
                  onClick={() => setNameParam('titan')}>
                    Titan
                 </Button>
            </div>

            <div className="destination-content">
                {destinationData}
            </div>
        </div>)}
       </section>
    )
}

export default memo(Destinations);