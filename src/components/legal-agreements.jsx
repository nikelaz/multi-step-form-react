import FormStep from './form-step';

const LegalAgreements = () => (
  <FormStep>
    <label>
      <input name="gdpr" type="checkbox" required />
      I agree with <a href="#">Cookie Policy</a>
    </label>
    <label>
      <input name="privacyPolicy" type="checkbox" required />
      I agree with the <a href="#">Privacy Policy</a>
    </label>
  </FormStep>
);

export default LegalAgreements;
