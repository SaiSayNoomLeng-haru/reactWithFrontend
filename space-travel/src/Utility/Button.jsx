import { memo } from "react"

const Button = ({children, ...props}) => {
    return(
        <button {...props}>{children}</button>
    )
}

export default memo(Button)