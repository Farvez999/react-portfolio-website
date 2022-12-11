import './App.css';
import ParticleBg from './components/ParticleBg/ParticleBg';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <div>
      <ParticleBg></ParticleBg>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
