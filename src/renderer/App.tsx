import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './layouts/baseLayout/baseLayout';
import HomePage from './screens/Home';
import DataPage from './screens/Data';
import PortalPage from './screens/Portal';
import IframeLayout from './layouts/IframeLayout';
import IframePage from './screens/Iframe';
import './App.css';
import {useState,useEffect} from 'react';

export default function App() {
  const [data, setdata] = useState([]);



   useEffect(() => {
     // Set up the IPC listener when the component mounts
     window.electron.ipcRenderer.once('ipc-example', (arg) => {
      // eslint-disable-next-line no-console
      console.log(arg);
     setdata(arg)
    });

     // Clean up the IPC listener when the component unmounts
     return () => {
       window.electron.ipcRenderer.removeAllListeners('ipc-example');
     };
   }, []);



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
            element={<IframePage link={data.elearning} />}
          />
          <Route
            path="stoch"
            element={
              <IframePage link={data.stoch} />
            }
          />
          <Route
            path="marketplace"
            element={<IframePage link={data.marketplace} />}
          />
          <Route
            path="business"
            element={
              <IframePage link={data.business} />
            }
          />
           <Route
            path="chinese"
            element={
              <IframePage link={data.chinese} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
