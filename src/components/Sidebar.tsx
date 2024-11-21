import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Dumbbell, 
  Heart, 
  UserCircle,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Sidebar: React.FC = () => {
  const { logout } = useAuthStore();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Dumbbell, label: 'Workouts', to: '/workouts' },
    { icon: Heart, label: 'Vitals', to: '/vitals' },
    { icon: UserCircle, label: 'Profile', to: '/profile' },
  ];

  return (
    <motion.div 
      className="w-64 bg-gray-800 text-white p-6"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          FitTrack AI
        </h1>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        onClick={logout}
        className="flex items-center space-x-3 px-4 py-3 mt-auto w-full text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-200"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </motion.div>
  );
};

export default Sidebar;