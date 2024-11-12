import { FaMinus, FaPlus } from "react-icons/fa";

export default function FaqDropdown({question, answer, handleOn, on}){
    const styles = {
        backgroundColor: on ? 'hsl(var(--clr-brown))' : 'hsl(var(--clr-white))',
        color: on ?  'hsl(var(--clr-white))' : 'hsl(var(--clr-brown))'
    }
    return(
        <div className="faq-dropdown-container flow padding-1" style={styles}>
            <div className="faq-question-container flex">
                <p>{question}</p>
                {on ? <FaMinus onClick={handleOn}/> :
                <FaPlus onClick={handleOn}/>}
            </div>
            {on ? <p>{answer}</p> : ''}
        </div>
    )
}