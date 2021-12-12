import { fourD, apple, cisco, moma, nasa, quantum, sprint, stanford, sybase } from '../components/images/imageIndex.js';

export default function ClientsPage() {
  return (
    <div>
      <h1 className="header">Partial Client List</h1>
      <div className="image-container">
        <ImageBox imagePath={fourD} clientName="4D Systems" clientPath="https://4dsystems.com.au" />
        <ImageBox imagePath={apple} clientName="Apple, Inc." clientPath="https://www.apple.com" />
        <ImageBox imagePath={cisco} clientName="Cisco Systems, Inc." clientPath="https://www.cisco.com" />
        <ImageBox imagePath={moma} clientName="San Francisco Museum of Modern Art" clientPath="https://www.sfmoma.org" />
        <ImageBox imagePath={nasa} clientName="NASA Ames Research Lab" clientPath="https://www.nasa.gov/ames" />
        <ImageBox imagePath={sprint} clientName="Sprint" clientPath="https://www.sprint.com" />
        <ImageBox imagePath={stanford} clientName="Stanford University" clientPath="https://www.stanford.edu" />
        <ImageBox imagePath={sybase} clientName="Sybase, Inc." clientPath="https://www.sap.com/acquired-brands/what-is-sybase.html" />
      </div>
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
      <a href={clientPath}>
        <img className="image" src={imagePath} alt={clientName} />
        <span>{clientName}</span>
      </a>
    </div>
  );
}
