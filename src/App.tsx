import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import NavBar from './components/Navbar';
import FooterComponent from './components/FooterComponent';
import Launches from './routes/Launches';
import Rockets from './routes/Rockets';
import History from './routes/History';
import LaunchDetail from './routes/LaunchDetail';
import RocketDetail from './routes/RocketDetail';
import NotFound from './routes/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/history" element={<History />} />
            <Route path="/launches/:name" element={<LaunchDetail />} />
            <Route path="/rockets/:name" element={<RocketDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
