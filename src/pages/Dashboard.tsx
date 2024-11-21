import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Activity, Flame, Trophy } from 'lucide-react';

const mockData = [
  { date: 'Mon', workouts: 2, calories: 500 },
  { date: 'Tue', workouts: 1, calories: 300 },
  { date: 'Wed', workouts: 3, calories: 800 },
  { date: 'Thu', workouts: 2, calories: 600 },
  { date: 'Fri', workouts: 4, calories: 1000 },
  { date: 'Sat', workouts: 1, calories: 400 },
  { date: 'Sun', workouts: 2, calories: 700 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <Activity className="w-8 h-8 text-white" />
            <div>
              <p className="text-purple-200">Total Workouts</p>
              <h3 className="text-2xl font-bold text-white">15</h3>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <Flame className="w-8 h-8 text-white" />
            <div>
              <p className="text-blue-200">Calories Burned</p>
              <h3 className="text-2xl font-bold text-white">4,300</h3>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <Trophy className="w-8 h-8 text-white" />
            <div>
              <p className="text-green-200">Achievements</p>
              <h3 className="text-2xl font-bold text-white">8</h3>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-gray-800 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-white mb-4">Weekly Progress</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="workouts" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                dot={{ fill: '#8B5CF6' }}
              />
              <Line 
                type="monotone" 
                dataKey="calories" 
                stroke="#60A5FA" 
                strokeWidth={2}
                dot={{ fill: '#60A5FA' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;