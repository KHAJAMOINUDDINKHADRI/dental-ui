import { Info, Mic, Share, Trash2 } from "lucide-react";

interface MainContentProps {
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
}

export default function MainContent({
  handleDragOver,
  handleDrop,
}: MainContentProps) {
  return (
    <div>
      <div
        className="fixed w-[981px] h-[700px] top-[88px] left-[427px] bg-gray-100 rounded-lg p-4"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center ml-8 mt-4">
            <h1 className="font-urbanist text-[40px] font-semibold leading-none text-center">
              Root Canal
            </h1>
            <Info className="ml-2 h-5 w-5 text-gray-500" />
          </div>

          <div className="flex space-x-2">
            <button className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2">
              <Mic className="h-5 w-5 mr-2" />
              Resume
            </button>
            <button className="p-2 border border-gray-300 rounded-full">
              <Share className="h-5 w-5" />
            </button>
            <button className="p-2 border border-gray-300 rounded-full text-red-500">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="bg-[#E3E3E3] w">
          <div className="fixed w-[494px] h-[610px] top-[179px] left-[473px] bg-white rounded-lg p-4 mb-6 overflow-hidden overflow-y-auto border-2 border-transparent hover:border-dashed hover:border-gray-300 group-hover:border-dashed group-hover:border-gray-300">
            <div className="space-y-4">
              <div className="bg-gray-200 p-4 rounded-md w-[458px]">
                <h3 className="font-bold mb-2">Subjective:</h3>
                <ul className="list-disc pl-6">
                  <li>Toothache for few days</li>
                </ul>
              </div>

              <div className="bg-gray-200 p-4 rounded-md w-[458px]">
                <h3 className="font-bold mb-2">
                  History of Presenting Complaints:
                </h3>
                <ul className="list-disc pl-6">
                  <li>Toothache: present for few days</li>
                </ul>
              </div>

              <div className="bg-gray-200 p-4 rounded-md w-[458px]">
                <h3 className="font-bold mb-2">Extra Oral Examination:</h3>
                <ul className="list-disc pl-6">
                  <li>Not performed</li>
                </ul>
              </div>

              <div className="bg-gray-200 p-4 rounded-md w-[458px]">
                <h3 className="font-bold mb-2">Intra Oral Examination:</h3>
                <ul className="list-disc pl-6">
                  <li>Tenderness around molar</li>
                  <li>Swollen gum</li>
                </ul>
              </div>

              <div className="bg-gray-200 p-4 rounded-md w-[458px]">
                <h3 className="font-bold mb-2">Radiographic Findings:</h3>
                <ul className="list-disc pl-6">
                  <li>X-ray planned to confirm extent of infection</li>
                </ul>
              </div>

              <div className="bg-gray-200 p-4 rounded-md w-[458px]">
                <h3 className="font-bold mb-2">Diagnoses:</h3>
                <ul className="list-disc pl-6">
                  <li>Suspected tooth abscess</li>
                </ul>
              </div>

              <div className="bg-gray-200 p-4 rounded-md w-[458px]">
                <h3 className="font-bold mb-2">Treatment:</h3>
                <ul className="list-disc pl-6">
                  <li>Root canal planned to remove infected tissue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-6 absolute bottom-8 right-10">
        <button className="px-6 py-3 border-2 border-gray-800 rounded-full">
          Send Referral
        </button>
        <button className="px-6 py-3 bg-black text-white rounded-full">
          Save Note
        </button>
      </div>
    </div>
  );
}
