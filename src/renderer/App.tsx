import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts/baseLayout/baseLayout';
import HomePage from './screens/Home';
import DataPage from './screens/Data';
import PortalPage from './screens/Portal';
import IframeLayout from './layouts/IframeLayout';
import IframePage from './screens/Iframe';
import './App.css';

export default function App() {
  console.log(global.data);
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
            element={<IframePage link={global.data.elearning} />}
          />
          <Route
            path="stoch"
            element={
              <IframePage link={global.data.stoch} />
            }
          />
          <Route
            path="marketplace"
            element={<IframePage link={global.data.marketplace} />}
          />
          <Route
            path="business"
            element={
              <IframePage link={global.data.business} />
            }
          />
           <Route
            path="chinese"
            element={
              <IframePage link={global.data.chinese} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
