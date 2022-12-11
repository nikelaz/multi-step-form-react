import { useEffect } from 'react';
import { useMultiStepModel } from '../providers/multi-step-model-provider';
import FormStep from './form-step';

const MultiStepForm = (props) => {
  const {
    steps,
    currentStep,
    setSteps,
    setSubmitHandler
  } = useMultiStepModel();

  useEffect(() => {
    setSteps(props.steps);
  }, [setSteps, props.steps]);

  useEffect(() => {
    setSubmitHandler(() => props.submit);
  }, [setSubmitHandler]);

  return (
    <>
      {steps.map((step, index) => (
        <FormStep
          isHidden={index !== currentStep}
          key={index}
        >
          {step}
        </FormStep>
      ))}
    </>
  );
};

export default MultiStepForm;
