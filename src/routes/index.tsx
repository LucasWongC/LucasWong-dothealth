import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layout/mainlayout';

import Questions from 'pages/questions';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Questions />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
