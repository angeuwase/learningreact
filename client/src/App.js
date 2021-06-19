import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Button from './components/Button'
import Question from './components/Question'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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

  useEffect(() => {
    let urlElements = window.location.href.split('/')
    let tenant = urlElements[4]
    const fetchData = async(tenant) => {
      const res = await fetch(`http://localhost:8000/${tenant}`)
      const data = await res.json()
      setTenantData(data[0])
  }

  fetchData(tenant)


},[])


  return (
    <Router>
    <div className="container">

    <Route path='/surveys/' render={(prop)=>(
        <>
        <Header title={tenantFormData.title} color={tenantFormData.styling.headingColor} fontFamily={tenantFormData.styling.fontFamilyHeader}/>
        <form>
        {tenantFormData.questions.map((question)=>(<Question question={question} fontFamily={tenantFormData.styling.fontFamilyQuestions}/>))}
        <Button text = {tenantFormData.styling.buttonText} color = {tenantFormData.styling.buttonColor} />
        </form>
        </>
    )} 
    />
    <Route exact path='/' component={LandingPage} />
    </div>
    </Router>
  );
}

export default App;
