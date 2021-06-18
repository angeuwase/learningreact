const Button = (props) => {
    const buttonStyle = {
        backgroundColor : props.color
 
    }
    return (
        <button style={buttonStyle}>{props.text}</button>
    )
}

Button.defaultProps = {
    'text' : 'Submit',
    'color' : 'grey'
}


export default Button
