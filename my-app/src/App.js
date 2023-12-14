import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';
import Login from './components/common/Login'; // Asume que tienes este componente
import Home from './components/common/Home';  
import Register from './components/common/Register';  
import MainLayout from './components/layout/MainLayout';
import Logout from './components/common/Logout';
// Importa otros componentes necesarios como Home

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user && user.typeUser === 1 ? children : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
        <Router>
          <MainLayout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
                <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
                <Route path="/" element={<Home />} /> {/* Asume que tienes un componente Home */}
            </Routes>
          </MainLayout>
        </Router>
    </AuthProvider>
);
}

export default App;