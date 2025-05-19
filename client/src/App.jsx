import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import BaseLayout from './components/layout/BaseLayout';
import { AIProviderProvider } from './context/AIProviderContext';
import ChatBot from './components/chatbot/ChatBot';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Domain from './pages/Domain';
import ArticleDetail from './pages/articles/ArticleDetail';
import DomainExplorer from './pages/domains/DomainExplorer';
import ArticleList from './pages/articles/ArticleList';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import About from './pages/About';
import Team from './pages/Team';

// Domain Pages
import DSA from './pages/domains/DSA';
import Aptitude from './pages/domains/Aptitude';
import DataScience from './pages/domains/DataScience';
import GenAI from './pages/domains/GenAI';
import AIML from './pages/domains/AIML';
import DevOps from './pages/domains/DevOps';
import CloudComputing from './pages/domains/CloudComputing';
import Blockchain from './pages/domains/Blockchain';
import CyberSecurity from './pages/domains/CyberSecurity';
import AndroidDev from './pages/domains/AndroidDev';
import IOSDev from './pages/domains/IOSDev';
import WebDev from './pages/domains/WebDev';
import GameDev from './pages/domains/GameDev';
import UIUX from './pages/domains/UIUX';
import EthicalHacking from './pages/domains/EthicalHacking';
import Web3 from './pages/domains/Web3';
import IoT from './pages/domains/IoT';
import VLSI from './pages/domains/VLSI';

// Root redirect component
const RootRedirect = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AIProviderProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<RootRedirect />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          
          {/* Protected Routes */}
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Protected Domain routes */}
          <Route path="domains" element={
            <ProtectedRoute>
              <Domain />
            </ProtectedRoute>
          } />
          
          {/* Protected Individual domain routes */}
          <Route path="domains/data-structures-and-algorithms" element={<ProtectedRoute><DSA /></ProtectedRoute>} />
          <Route path="domains/aptitude" element={<ProtectedRoute><Aptitude /></ProtectedRoute>} />
          <Route path="domains/data-science" element={<ProtectedRoute><DataScience /></ProtectedRoute>} />
          <Route path="domains/generative-ai" element={<ProtectedRoute><GenAI /></ProtectedRoute>} />
          <Route path="domains/artificial-intelligence-and-machine-learning" element={<ProtectedRoute><AIML /></ProtectedRoute>} />
          <Route path="domains/devops" element={<ProtectedRoute><DevOps /></ProtectedRoute>} />
          <Route path="domains/cloud-computing" element={<ProtectedRoute><CloudComputing /></ProtectedRoute>} />
          <Route path="domains/blockchain" element={<ProtectedRoute><Blockchain /></ProtectedRoute>} />
          <Route path="domains/cyber-security" element={<ProtectedRoute><CyberSecurity /></ProtectedRoute>} />
          <Route path="domains/android-development" element={<ProtectedRoute><AndroidDev /></ProtectedRoute>} />
          <Route path="domains/ios-development" element={<ProtectedRoute><IOSDev /></ProtectedRoute>} />
          <Route path="domains/web-development" element={<ProtectedRoute><WebDev /></ProtectedRoute>} />
          <Route path="domains/game-development" element={<ProtectedRoute><GameDev /></ProtectedRoute>} />
          <Route path="domains/ui-ux" element={<ProtectedRoute><UIUX /></ProtectedRoute>} />
          <Route path="domains/ethical-hacking" element={<ProtectedRoute><EthicalHacking /></ProtectedRoute>} />
          <Route path="domains/web-3" element={<ProtectedRoute><Web3 /></ProtectedRoute>} />
          <Route path="domains/iot-(internet-of-things)" element={<ProtectedRoute><IoT /></ProtectedRoute>} />
          <Route path="domains/vlsi" element={<ProtectedRoute><VLSI /></ProtectedRoute>} />
          
          {/* Protected Article routes */}
          <Route path="articles" element={<ProtectedRoute><ArticleList /></ProtectedRoute>} />
          <Route path="articles/:id" element={<ProtectedRoute><ArticleDetail /></ProtectedRoute>} />
          <Route path="domains" element={<ProtectedRoute><DomainExplorer /></ProtectedRoute>} />

          {/* Protected Profile route */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/profile/edit" element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
      
      <ChatBot />
    </AIProviderProvider>
  );
}

export default App;
