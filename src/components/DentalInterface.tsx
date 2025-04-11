"use client";

import { useState, useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TemplateSidebar from "./TemplateSidebar";
import MainContent from "./MainContent";

interface DraggingItem {
  name: string;
  index: number;
}

export default function DentalInterface() {
  const [searchQuery, setSearchQuery] = useState("");
  const [templates, setTemplates] = useState([
    "Subjective",
    "Objective",
    "Assessment & Plan",
    "Findings",
    "Diagnoses",
    "Treatment",
    "Recovery",
  ]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [draggingItem, setDraggingItem] = useState<DraggingItem | null>(null);
  const templateListRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (
    e: React.DragEvent<Element>,
    template: string,
    index: number
  ) => {
    setSelectedTemplate(template);
    setDraggingItem({ name: template, index });
  };

  const handleDragEnd = (e: React.DragEvent<Element>) => {
    setSelectedTemplate(null);
    setDraggingItem(null);
  };

  const handleDragOver = (e: React.DragEvent<Element>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    if (selectedTemplate) {
      console.log("Dropped template:", selectedTemplate);
      setSelectedTemplate(null);
      setDraggingItem(null);
    }
  };

  return (
    <div className="flex h-screen bg-white text-gray-800">
      <Sidebar />
      <div className="flex-1 flex ml-16">
        <Navbar />
        <div className="flex flex-1 mt-14 bg-white">
          <TemplateSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            templates={templates}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            handleDragOver={handleDragOver}
            templateListRef={templateListRef}
            draggingItem={draggingItem}
          />
          <MainContent
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        </div>
      </div>
    </div>
  );

}
