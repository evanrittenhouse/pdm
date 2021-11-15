import React from 'react';
import HeaderTyping from './typed_header';
import '../../App.css';
import '../../css/main.css';

// TODO: need to forward ref from Main to here
const MainPageHeader: React.FC = () => {
  return (
    <div className="App-header">
      <header>
        <HeaderTyping strings={['<b>Pacific Data Management, Inc.</b>\nMove your data forward.']} />
      </header>
    </div>
  );
};

export default MainPageHeader;
