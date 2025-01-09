

const Button = ({icon  , text , ...rest}) => {

    
    return (
        <button {...rest} className="button"> 
           {icon}
           {text}
        </button>
    )
}

export default Button