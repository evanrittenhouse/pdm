import { john, dave, dan } from '../components/employee_background_index';
import EmployeeSection from '../components/employee_section';

export default function TeamPage() {
  return (
    <div>
      <h1 className='header'>PDM Partners</h1>
      <EmployeeSection name='John Beaulieu' background={john} />
      <EmployeeSection name='Dave Terry' background={dave} />
      <EmployeeSection name='Dan Wasserman' background={dan} />
    </div>
  );
}
