import FormStep from './form-step';

const UserDetails = () => (
  <FormStep>
    <label>Email</label>
    <input name="email" type="email" required />
    <label>Password</label>
    <input name="password" type="password" required />
  </FormStep>
);

export default UserDetails;
