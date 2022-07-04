import React from 'react';
import Footer from '../footer';
import Header from '../header';

import './mainlayout.scss';

interface MainLayoutProps {
  children: React.ReactChild;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
