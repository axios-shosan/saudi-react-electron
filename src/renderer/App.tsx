import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import BaseLayout from './layouts/baseLayout';
import HomePage from './screens/Home';
import DataPage from './screens/Data';
import PortalPage from './screens/Portal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/portal" element={<PortalPage />} />
      </Routes>
    </Router>
  );
}
