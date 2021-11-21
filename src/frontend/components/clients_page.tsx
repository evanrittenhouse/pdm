import { Link } from 'react-router-dom';
import { fourD, apple, cisco, moma, nasa, quantum, sprint, stanford, sybase } from './images/imageIndex.js';

export default function ClientsPage() {
  return (
    <div className="image-container">
      <ImageBox imagePath={fourD} clientName="4D Systems" clientPath="https://4dsystems.com.au" />
      <ImageBox imagePath={apple} clientName="Apple, Inc." clientPath="https://www.apple.com" />
      <ImageBox imagePath={cisco} clientName="Cisco Systems, Inc." clientPath="https://www.apple.com" />
      <ImageBox imagePath={moma} clientName="San Francisco Museum of Modern Art" clientPath="https://www.apple.com" />
      <ImageBox imagePath={nasa} clientName="NASA Ames Research Lab" clientPath="https://www.apple.com" />
      <ImageBox imagePath={quantum} clientName="Quantum" clientPath="https://www.apple.com" />
      <ImageBox imagePath={sprint} clientName="Sprint" clientPath="https://www.apple.com" />
      <ImageBox imagePath={stanford} clientName="Stanford University" clientPath="https://www.apple.com" />
      <ImageBox imagePath={sybase} clientName="Sybase, Inc." clientPath="https://www.apple.com" />
    </div>
  );
}

interface ImageBoxProps {
  imagePath: string;
  clientPath: string;
  clientName: string;
}

function ImageBox({ imagePath, clientPath, clientName }: ImageBoxProps) {
  return (
    <div>
      <Link to={clientPath}>
        <img className="image" src={imagePath} alt={clientName} />
        <p>{clientName}</p>
      </Link>
    </div>
  );
}
