import React from 'react';
import ReactDOM from 'react-dom';
import AppWithRedux from './AppWithRedux';
import AppWithContext from './AppWithContext';
import AppWithRecoil from './AppWithRecoil';

ReactDOM.render(

  <React.StrictMode>
    <>
      <AppWithRedux />
        <AppWithContext/>
        <AppWithRecoil/>
      </>
  </React.StrictMode>,
  document.getElementById('root')
);
