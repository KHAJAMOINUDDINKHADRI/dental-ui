import {
  Calendar,
  FileText,
  User,
  Settings,
  ChevronRight,
  Flower2Icon,
  Folder,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed w-16 h-[755px] top-8 bg-black flex flex-col items-center py-4 space-y-6 rounded-tr-xl rounded-br-xl shadow-[0px_-5px_25px_0px_#B0BBFF99,_0px_5px_25px_0px_#B0BBFF99]">
      <button className="text-white">
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="bg-white text-black px-2 py-1 text-xs font-bold rounded">
        NEU
      </div>
      <button className="text-white">
        <Calendar className="w-5 h-5" />
      </button>
      <button className="text-white">
        <Folder className="w-5 h-5" />
      </button>
      <button className="text-white">
        <User className="w-5 h-5" />
      </button>
      <button className="text-white">
        <Settings className="w-5 h-5" />
      </button>
    </div>
  );
}
