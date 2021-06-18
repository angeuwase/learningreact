import Header from './components/Header'
import Button from './components/Button'
import Question from './components/Question'
import {useState} from 'react'

function App() {


  const [tenantFormData, setTenantData] = useState({
    title: 'Client feedback Form',
    questions: [
      {id: 1,
      text: 'What is your name?'
    },
      {id: 2,
      text: 'What is your email address?'
    },
      {id: 3,
      text: 'How would you rate the service?'
    }, 
    {id: 4,
      text: 'Will you come again?'
    }, 
  ],
    styling: {
      'buttonColor' : 'orange',
      'buttonText' : 'Next',
      'fontFamilyHeader' : 'sans-serif',
      'fontFamilyQuestions' : 'Ariel',
      'headingColor' : 'red'
    },
  
  })

  return (
    <div className="container">
      <Header title={tenantFormData.title} color={tenantFormData.styling.headingColor} fontFamily={tenantFormData.styling.fontFamilyHeader}/>
      {tenantFormData.questions.map((question)=>(<Question question={question} fontFamily={tenantFormData.styling.fontFamilyQuestions}/>))}
      <Button text = {tenantFormData.styling.buttonText} color = {tenantFormData.styling.buttonColor} />



    </div>
  );
}

export default App;
