const Header = (props) => {


    const headingStyle = {
        color: props.color,
        fontFamily: props.fontFamily
    }

    return (
        <header> 
            <h1 style={headingStyle}>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    'title' : 'Service Feedback Form',
    'color' : 'green'
}

export default Header
