import { useEffect } from 'react';
import { useMultiStepModel } from '../providers/multi-step-model-provider';

const MultiStepForm = (props) => {
  const { steps, currentStep, setSteps, setSubmitHandler } = useMultiStepModel();

  const submit = (data) => {
    console.log('Form Submit');
    console.log('Data:', data);
  }

  useEffect(() => {
    setSteps(props.steps);
  }, [setSteps, props.steps]);

  useEffect(() => {
    setSubmitHandler(() => submit);
  }, [setSubmitHandler]);

  return (
    <>
      {steps.map((step, index) => (
        index === currentStep ? <div key={index}>{step}</div> : <div hidden key={index}>{step}</div>
      ))}
    </>
  );
};

export default MultiStepForm;
