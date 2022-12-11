import MultiStepForm from './components/multi-step-form';
import MultiStepModelProvider from './providers/multi-step-model-provider';
import UserDetails from './components/user-details';
import PersonalInfo from './components/personal-info';
import LegalAgreements from './components/legal-agreements';

const App = () => (
  <MultiStepModelProvider>
    <MultiStepForm
      steps={[
        <UserDetails />,
        <LegalAgreements />,
        <PersonalInfo />
      ]}
    />
  </MultiStepModelProvider>
);

export default App
