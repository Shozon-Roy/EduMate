import React, { useState } from 'react';
import { Bell, Search, Home, BookOpen, Calendar, Award, AlignCenterVertical as Certificate, Settings, ChevronLeft, ChevronRight, Filter, Menu, X } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  teacher: {
    name: string;
    avatar: string;
  };
  duration: string;
  progress: {
    completed: number;
    total: number;
    percentage: number;
  };
  students: {
    avatars: string[];
    more: number;
  };
  status: 'continue' | 'complete';
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Monetary Policy & Banking',
    teacher: {
      name: 'Ida Aguirre',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    duration: '74h 45m',
    progress: {
      completed: 14,
      total: 56,
      percentage: 25,
    },
    students: {
      avatars: [
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
      ],
      more: 3,
    },
    status: 'continue',
  },
  {
    id: 2,
    title: 'International Economics',
    teacher: {
      name: 'Tiffany Fowler',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
    duration: '62h 24m',
    progress: {
      completed: 12,
      total: 46,
      percentage: 26,
    },
    students: {
      avatars: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      ],
      more: 8,
    },
    status: 'continue',
  },
  {
    id: 3,
    title: 'Behavioral Economics',
    teacher: {
      name: 'Julie Dawson',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    },
    duration: '44h 32m',
    progress: {
      completed: 3,
      total: 32,
      percentage: 10,
    },
    students: {
      avatars: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
      ],
      more: 2,
    },
    status: 'continue',
  },
  {
    id: 4,
    title: 'Marketing Strategy',
    teacher: {
      name: 'Rory Todd',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    },
    duration: '29h 12m',
    progress: {
      completed: 22,
      total: 22,
      percentage: 100,
    },
    students: {
      avatars: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      ],
      more: 6,
    },
    status: 'complete',
  },
];

interface RecommendedCourse {
  id: number;
  category: string;
  title: string;
  description: string;
  lessons: number;
}

const recommendedCourses: RecommendedCourse[] = [
  {
    id: 1,
    category: 'Economics',
    title: 'Economics of Innovation & Technology',
    description: 'This course examines how technological advancements influence economic growth...',
    lessons: 46,
  },
  {
    id: 2,
    category: 'History',
    title: 'A Global History: About Empires',
    description: 'This course explores the rise, expansion, and decline of major empires throughout history...',
    lessons: 25,
  },
  {
    id: 3,
    category: 'Math',
    title: 'Advanced Mathematical Concepts',
    description: 'This course covers advanced mathematical concepts, including calculus, linear algebra...',
    lessons: 34,
  },
];

function App() {
  const [activeFilter, setActiveFilter] = useState('in-progress');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4 sm:gap-10">
              <div className="flex items-center gap-2">
                <button 
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-lg font-semibold hidden sm:inline">EduMate</span>
              </div>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl w-48 md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
                  2
                </span>
              </div>
              <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l">
                <img
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-gray-100"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Profile"
                />
                <div className="hidden sm:block">
                  <div className="text-sm font-semibold">Cora Richards</div>
                  <div className="text-xs text-gray-500">cora@edu.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <div className="sm:hidden bg-white p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className={`
            fixed lg:relative inset-0 z-40 w-64 lg:w-56 bg-white lg:bg-transparent transform 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            lg:translate-x-0 transition-transform duration-200 ease-in-out
          `}>
            <nav className="space-y-1 p-4 lg:p-0">
              <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-gray-100 rounded-xl">
                <Home className="h-5 w-5 mr-3" />
                Home
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">
                <BookOpen className="h-5 w-5 mr-3" />
                Courses
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">
                <Calendar className="h-5 w-5 mr-3" />
                Schedule
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">
                <Award className="h-5 w-5 mr-3" />
                Results
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">
                <Certificate className="h-5 w-5 mr-3" />
                Certificate
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </a>
            </nav>
          </div>

          {/* Course List */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-bold">Courses</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                    <button
                      onClick={() => setActiveFilter('in-progress')}
                      className={`px-4 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap ${
                        activeFilter === 'in-progress'
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      In progress
                    </button>
                    <button
                      onClick={() => setActiveFilter('upcoming')}
                      className={`px-4 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap ${
                        activeFilter === 'upcoming'
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Upcoming
                    </button>
                    <button
                      onClick={() => setActiveFilter('completed')}
                      className={`px-4 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap ${
                        activeFilter === 'completed'
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      Completed
                    </button>
                  </div>
                  <div className="relative">
                    <select className="appearance-none pl-4 pr-10 py-1.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto">
                      <option>Duration</option>
                      <option>Shortest to Longest</option>
                      <option>Longest to Shortest</option>
                    </select>
                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="bg-white p-4 rounded-xl border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <div className="flex items-center">
                          <img
                            src={course.teacher.avatar}
                            alt={course.teacher.name}
                            className="h-6 w-6 rounded-full border border-gray-100"
                          />
                          <span className="ml-2 text-sm text-gray-600">
                            {course.teacher.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-8">
                      <div className="text-sm text-gray-600 order-1 sm:order-none">{course.duration}</div>
                      <div className="w-full sm:w-32 order-3 sm:order-none">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 whitespace-nowrap">
                            {course.progress.completed}/{course.progress.total}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center -space-x-2 order-2 sm:order-none">
                        {course.students.avatars.map((avatar, i) => (
                          <img
                            key={i}
                            src={avatar}
                            alt="Student"
                            className="h-8 w-8 rounded-full border-2 border-white"
                          />
                        ))}
                        <div className="h-8 w-8 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+{course.students.more}</span>
                        </div>
                      </div>
                      <button
                        className={`w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-lg transition-colors order-4 sm:order-none ${
                          course.status === 'complete'
                            ? 'bg-green-600 text-white'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {course.status === 'complete' ? 'Complete' : 'Continue'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                <button className="p-1 rounded-lg hover:bg-gray-100">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600">
                  3
                </button>
                <span className="text-gray-600">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600">
                  8
                </button>
                <button className="p-1 rounded-lg hover:bg-gray-100">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recommended for you</h2>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                  View all
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
                  <div key={course.id} className="bg-white p-4 rounded-xl border border-gray-100">
                    <div className="mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full">
                        {course.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {course.lessons} lessons
                      </span>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Learn more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;