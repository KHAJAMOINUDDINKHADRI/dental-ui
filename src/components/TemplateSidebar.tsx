import { Search, Edit } from "lucide-react";

interface DraggingItem {
  name: string;
  index: number;
}

interface TemplateSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  templates: string[];
  handleDragStart: (
    e: React.DragEvent<Element>,
    template: string,
    index: number
  ) => void;
  handleDragEnd: (e: React.DragEvent<Element>) => void;
  handleDragOver: (e: React.DragEvent<Element>) => void;
  templateListRef: React.RefObject<HTMLDivElement>;
  draggingItem: DraggingItem | null;
}

export default function TemplateSidebar({
  searchQuery,
  setSearchQuery,
  templates,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  templateListRef,
  draggingItem,
}: TemplateSidebarProps) {
  return (
    <div className="fixed w-[315px] h-[700px] top-[89px] left-[88px] bg-gray-100 p-4 rounded-lg">
      <h2 className="text-[40px] font-urbanist font-bold mb-6 text-center">
        Template
      </h2>
      <div className="w-280px bg-white p-4 rounded-xl">
        <div className="relative mb-4">
          <div>
            <input
              type="text"
              placeholder="Search Templates"
              className="w-full p-2 pl-3 pr-10 border rounded-xl bg-gray-100 text-left placeholder-left"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div
          className="space-y-4 max-h-[calc(835px-180px)] overflow-y-auto "
          ref={templateListRef}
          onDragOver={handleDragOver}
        >
          {templates.map((template, index) => (
            <div
              key={index}
              className={`w-full text-center p-3 bg-gray-200 hover:bg-gray-300 rounded-md cursor-move ${
                draggingItem?.index === index ? "opacity-50" : "opacity-100"
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, template, index)}
              onDragEnd={handleDragEnd}
            >
              {template}
            </div>
          ))}
        </div>
      </div>

      <button className="w-full mt-4 bg-black text-white p-3 rounded-md flex items-center justify-center">
        Edit
        <Edit className="h-5 w-5 ml-2" />
      </button>
    </div>
  );
}
