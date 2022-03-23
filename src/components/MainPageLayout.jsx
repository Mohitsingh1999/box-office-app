import React from 'react';
import Navs from './Navs';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title="Box Ofiice"
        subtitle="Are you looking for movie or actor?"
      />
      <Navs />
      {children}
    </div>
  );
}

export default MainPageLayout;
