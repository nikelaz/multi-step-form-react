import MultiStepForm from './components/multi-step-form';
import MultiStepModelProvider from './providers/multi-step-model-provider';
import UserDetails from './components/user-details';
import PersonalInfo from './components/personal-info';
import LegalAgreements from './components/legal-agreements';

const App = () => {
  const submit = (data) => {
    console.log('Form Submit');
    console.log('Data:', data);
  }

  return (
    <MultiStepModelProvider>
      <MultiStepForm
        steps={[
          <UserDetails />,
          <LegalAgreements />,
          <PersonalInfo />
        ]}
        submit={submit}
      />
    </MultiStepModelProvider>
  );
};

export default App
