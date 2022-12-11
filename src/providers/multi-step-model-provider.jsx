import { createContext, useContext, useState } from 'react';

const MultiStepModelContext = createContext();

const MultiStepModelProvider = ({ children }) => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  const [submitHandler, setSubmitHandler] = useState(null);

  const isFirstStep = () => currentStep === 0;

  const isLastStep = () => currentStep === steps.length - 1;

  const prevStep = () => {
    setCurrentStep(currentStep => {
      if (isFirstStep()) return currentStep;
      return currentStep -= 1;
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep => {
      if (isLastStep()) return currentStep;
      return currentStep += 1;
    });
  };

  const submit = (inputData) => {
    const formData = {
      ...data,
      ...inputData
    };

    setData(formData);

    if (!isLastStep() || !submitHandler) return;

    submitHandler(formData);
  }

  const model = {
    setSteps,
    steps,
    currentStep,
    isFirstStep,
    isLastStep,
    prevStep,
    nextStep,
    data,
    setSubmitHandler,
    submit
  };

  return (
    <MultiStepModelContext.Provider value={model}>
      { children }
    </MultiStepModelContext.Provider>
  );
}

export const useMultiStepModel = (steps) => useContext(MultiStepModelContext);

export default MultiStepModelProvider;
