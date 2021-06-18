import Header from './components/Header'
import Button from './components/Button'

const tenantFormData = {
  title: 'Client feedback Form',
  questions: {
    '1' : 'What is your name?',
    '2' : 'What is your email address?',
    '3' : 'Which consultant did you work with?',
    '4' : 'How would you rate the service?'

  },
  styling: {
    'buttonColor' : 'blue',
    'buttonText' : 'Next',
    'fontFamilyHeader' : 'sans-serif',
    'fontFamilyQuestions' : '"Times New Roman", Times, serif',
    'headingColor' : 'red'
  },

}

function App() {

  return (
    <div className="container">
      <Header title={tenantFormData.title} color={tenantFormData.styling.headingColor} fontFamily={tenantFormData.styling.fontFamilyHeader}/>

      <Button text = {tenantFormData.styling.buttonText} color = {tenantFormData.styling.buttonColor} />



    </div>
  );
}

export default App;
