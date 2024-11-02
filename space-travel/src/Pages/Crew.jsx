import { useCallback, useContext, useMemo, memo} from "react";
import Button from "../Utility/Button";
import { AppContext } from "../App";
import useFetchData from "../Components/Custom Hooks/UseFetchData";
import useSetParam from "../Components/Custom Hooks/useSetParam";
import useLoading from "../Components/Custom Hooks/useLoading";


const Crew = () => {
    const { data } = useContext(AppContext);
    const crew = useFetchData(data, 'crew');
    const loading = useLoading(data);
    const { getParam, setParam } = useSetParam();

    let idFilter = parseInt(getParam('id') || 1);

    const displayCrew = useMemo( () => (
        idFilter ?
        crew.filter(person => person.id == idFilter ) : crew || []
    ), [idFilter, crew])

    const crewImage = useMemo(() => (
        displayCrew.map(person => (
            <div key={person.name}>
                <img src={person.images.webp} alt={`${person.name}'s image`} />
            </div>
        ))
    ), [displayCrew])

    const crewData = useMemo(() => (
        displayCrew.map(person => (
            <div key={person.name}>
                <p className="text-accent text-uppercase ff-serif letter-spacing-3">{person.role}</p>
                <h1 className="text-uppercase ff-serif bold-2">{person.name}</h1>
                <p>{person.bio}</p>
            </div>
        ))
    ), [displayCrew])

    const setIdParam = useCallback((id) => (
        setParam('id', id)
    ), [setParam])

    const getButtonStyles = (id) => {
        idFilter === id ? 'active' : ''
    }

    return (
       <section id="crew" className="crew container grid">
             <p className="text-uppercase ff-condensed letter-spacing-2"><span className="numbered-title fs-400 text-accent">03</span>Meet your crew</p>

             { loading ? 
                (<p className="fs-500 text-center">Loading...</p>)
                :
             (<>
                <div className="crew-content">
                {crewData}
             </div>

             <div className="crew-button-group flex">
                <Button
                    className={`circle-btn bg-muted ${getButtonStyles(1)}`}
                    onClick={() => setIdParam(1)}
                ></Button>

                <Button
                    className={`circle-btn bg-muted ${getButtonStyles(2)}`}
                    onClick={() => setIdParam(2)}
                ></Button>

                <Button
                    className={`circle-btn bg-muted ${getButtonStyles(3)}`}
                    onClick={() => setIdParam(3)}
                ></Button>

                <Button
                    className={`circle-btn bg-muted ${getButtonStyles(4)}`}
                    onClick={() => setIdParam(4)}
                ></Button>
             </div>

             <div className="crew-image">
                {crewImage}
             </div>
             </>)}
       </section>
    )
}

export default memo(Crew)