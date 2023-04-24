import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts/baseLayout/baseLayout';
import HomePage from './screens/Home';
import DataPage from './screens/Data';
import PortalPage from './screens/Portal';
import IframeLayout from './layouts/IframeLayout';
import IframePage from './screens/Iframe';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="data" element={<DataPage />} />
          <Route path="portal" element={<PortalPage />} />
        </Route>
        <Route path="/iframe" element={<IframeLayout />}>
          <Route
            path="e-learning"
            element={<IframePage link="https://learning.sta.gov.sa/" />}
          />
          <Route
            path="stoch"
            element={
              <IframePage link="https://stoch.sta.gov.sa/content/scp/sa/en/home.html" />
            }
          />
          <Route
            path="marketplace"
            element={<IframePage link="http://enablement.sta.gov.sa/s" />}
          />
          <Route
            path="business"
            element={
              <IframePage link="https://stoch.sta.gov.sa/en/business-directory/search-results.html" />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
