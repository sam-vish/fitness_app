export interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  weight?: number;
  goals?: string[];
  profileImage?: string;
}

export interface Workout {
  id: string;
  userId: string;
  date: string;
  exercises: Exercise[];
  duration: number;
  caloriesBurned: number;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  formVideo?: string;
  formFeedback?: string;
}

export interface Vitals {
  id: string;
  userId: string;
  date: string;
  heartRate: number;
  caloriesBurned: number;
  weight?: number;
}