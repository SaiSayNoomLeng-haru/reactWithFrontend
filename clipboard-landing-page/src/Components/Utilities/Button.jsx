import { memo } from "react"
import classNames from "classnames";

const Button = ({children, className = ''}) => {
    const buttonClass = classNames(
        className,
        'rounded-3xl',
        'py-3',
        'px-5',
        'text-white',
        'font-bold',
        'active:translate-y-1',
    )
    return(
        <button className={buttonClass}>{children}</button>
    )
    
}

export default memo(Button);