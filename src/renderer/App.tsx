import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts/baseLayout';
import HomePage from './screens/Home';
import DataPage from './screens/Data';
import PortalPage from './screens/Portal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="data" element={<DataPage />} />
          <Route path="portal" element={<PortalPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
