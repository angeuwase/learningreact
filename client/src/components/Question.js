const Question = (props) => {



    const questionStyle = {
        fontFamily: props.fontFamily
    }

    return (
        

        <div className='form-control' style={questionStyle}> 
            <label>{props.question.text}</label><br></br>
            <input type="text" name={props.question.text}/>
        </div>
    )
}

Question.defaultProps = {
    'text' : 'Ipsim',
    'fontFamily' : 'sans-serif',
    'question' : 'Form text'

}

export default Question
