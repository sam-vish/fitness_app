import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Heart, Scale, Flame } from 'lucide-react';

const mockVitalsData = [
  { date: '03/04', heartRate: 75, weight: 70, calories: 2200 },
  { date: '03/05', heartRate: 72, weight: 70.2, calories: 2300 },
  { date: '03/06', heartRate: 78, weight: 69.8, calories: 2150 },
  { date: '03/07', heartRate: 71, weight: 69.5, calories: 2400 },
  { date: '03/08', heartRate: 74, weight: 69.7, calories: 2250 },
  { date: '03/09', heartRate: 73, weight: 69.3, calories: 2350 },
  { date: '03/10', heartRate: 76, weight: 69.1, calories: 2280 },
];

const Vitals: React.FC = () => {
  return (
    <div>
      <motion.h1
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Health Vitals
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <Heart className="w-8 h-8 text-white" />
            <div>
              <p className="text-red-200">Average Heart Rate</p>
              <h3 className="text-2xl font-bold text-white">74 BPM</h3>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <Scale className="w-8 h-8 text-white" />
            <div>
              <p className="text-blue-200">Current Weight</p>
              <h3 className="text-2xl font-bold text-white">69.1 kg</h3>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <Flame className="w-8 h-8 text-white" />
            <div>
              <p className="text-orange-200">Daily Calories</p>
              <h3 className="text-2xl font-bold text-white">2,280 kcal</h3>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            Heart Rate Trends
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockVitalsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="heartRate"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={{ fill: '#EF4444' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            Weight History
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockVitalsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Vitals;