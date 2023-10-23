import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);


    // Set up the IPC listener when the component mounts
    window.electron.ipcRenderer.once('ipc-example', (arg) => {
      // eslint-disable-next-line no-console
      console.log(arg);
     
    });

    // Clean up the IPC listener when the component unmounts
    window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
  
// calling IPC exposed from preload script

// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
