import React from 'react';
import HeaderTyping from './typed_header';
import '../../App.css';
import '../../css/main.css';

const MainPageHeader: React.FC = () => {
  return (
    <div className="App-header">
      <HeaderTyping strings={['Pacific Data Management\nMove your data forward']} />
    </div>
  );
};

export default MainPageHeader;
