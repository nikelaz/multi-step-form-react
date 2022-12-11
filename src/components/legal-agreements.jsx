import FormStep from './form-step';

const LegalAgreements = () => (
  <FormStep>
    <label>
      <input name="gdpr" type="checkbox" required />
      I agree with GDPR
    </label>
    <label>
      <input name="privacyPolicy" type="checkbox" required />
      I agree with the Privacy Policy
    </label>
  </FormStep>
);

export default LegalAgreements;
