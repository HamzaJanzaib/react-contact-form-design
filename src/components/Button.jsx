

const Button = (props) => {
    console.log(props);
    
    return (
        <button className="button"> 
           {props.icon}
           {props.text}
        </button>
    )
}

export default Button