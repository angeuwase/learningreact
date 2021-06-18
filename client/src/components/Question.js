const Question = (props) => {



    const questionStyle = {
        fontFamily: props.fontFamily
    }

    return (
        

        <div> 
            <h3 key={props.question.key} style={questionStyle} >{props.question.text}</h3>
        </div>
    )
}

Question.defaultProps = {
    'text' : 'Ipsim',
    'fontFamily' : 'sans-serif',
    'question' : 'Form text'

}

export default Question
