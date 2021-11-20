import { Link } from 'react-router-dom';

export default function ClientsPage() {
  return (
    <div className="container">
      <Link to="/team">
        <p>Vodafone</p>
      </Link>
      <p>Agritech</p>
      <p>SJJS</p>
    </div>
  );
}
