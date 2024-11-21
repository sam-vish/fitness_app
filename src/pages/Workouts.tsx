import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Video, BarChart2 } from 'lucide-react';

const mockWorkouts = [
  {
    id: 1,
    date: '2024-03-10',
    type: 'Strength Training',
    duration: '45 min',
    exercises: ['Bench Press', 'Squats', 'Deadlifts'],
    calories: 350,
  },
  {
    id: 2,
    date: '2024-03-09',
    type: 'Cardio',
    duration: '30 min',
    exercises: ['Running', 'Jump Rope'],
    calories: 280,
  },
];

const Workouts: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Workouts
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Workout</span>
        </motion.button>
      </div>

      <motion.div
        className="grid gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {mockWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {workout.type}
                </h3>
                <p className="text-gray-400">{workout.date}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <Video className="w-5 h-5 text-blue-400" />
                </button>
                <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <BarChart2 className="w-5 h-5 text-green-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Duration</p>
                <p className="text-white font-semibold">{workout.duration}</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Exercises</p>
                <p className="text-white font-semibold">
                  {workout.exercises.length}
                </p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Calories</p>
                <p className="text-white font-semibold">{workout.calories}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">
                Exercises
              </h4>
              <div className="flex flex-wrap gap-2">
                {workout.exercises.map((exercise, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                  >
                    {exercise}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Workouts;