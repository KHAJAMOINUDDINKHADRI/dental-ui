import { User, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="absolute w-full h-12 top-0 left-0 right-10 bg-black text-white pl-20  pr-10 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=40&h=40"
          alt="Othisis Logo"
          className="h-6 w-6 rounded-full"
        />
        <span className="ml-2 font-bold text-xl">Othisis Medtech</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            2
          </div>
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </button>
        <div className="flex items-center space-x-2">
          <button className="text-white">
            <User className="h-6 w-6" />
          </button>
          <button className="bg-white border border-gray-300 rounded-full">
            <ChevronDown className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
