import { useMultiStepModel } from '../providers/multi-step-model-provider';

const FormStep = ({ children }) => {
  const model = useMultiStepModel();

  const formSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    model.submit(Object.fromEntries(formData));

    if (!model.isLastStep()) {
      model.nextStep();
      return;
    }
  };

  return (
    <form onSubmit={formSubmit}>
      { children }
      { !model.isFirstStep() && <button type="button" onClick={model.prevStep}>Previous</button> }
      { <button type="submit">{ !model.isLastStep() ? 'Next' : 'Submit' }</button> }
    </form>
  );
};

export default FormStep;
