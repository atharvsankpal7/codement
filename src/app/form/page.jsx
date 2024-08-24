"use client";
import { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "../../components/ui/card";
import Link from "next/link";

export default function Component() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    chapters: [],
  });

  const [newChapter, setNewChapter] = useState({
    title: "",
    description: "",
    modules: [],
  });

  const [newModule, setNewModule] = useState({
    title: "",
    description: "",
    resources: [],
  });

  const [newResource, setNewResource] = useState({
    type: "",
    title: "",
    link: "",
  });

  const handleSubjectChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChapterChange = (e) => {
    setNewChapter({ ...newChapter, [e.target.name]: e.target.value });
  };

  const handleModuleChange = (e) => {
    setNewModule({ ...newModule, [e.target.name]: e.target.value });
  };

  const handleResourceChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const handleResourceAdd = () => {
    setNewModule({
      ...newModule,
      resources: [...newModule.resources, { ...newResource }],
    });
    setNewResource({
      type: "",
      title: "",
      link: "",
    });
  };

  const handleModuleAdd = () => {
    setNewChapter({
      ...newChapter,
      modules: [...newChapter.modules, { ...newModule }],
    });
    setNewModule({
      title: "",
      description: "",
      resources: [],
    });
  };

  const handleChapterAdd = () => {
    setFormData({
      ...formData,
      chapters: [...formData.chapters, { ...newChapter }],
    });
    setNewChapter({
      title: "",
      description: "",
      modules: [],
    });
  };

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you can send the formData to your backend or use it as needed
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md my-10">
      <form onSubmit={handleSubjectSubmit} className="mb-4">
        <label className="block mb-2 text-black">
          Subject Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleSubjectChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2 text-black">
          Subject Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleSubjectChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2 text-black">
          Subject Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleSubjectChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
       
      </form>

      {/* Chapters Form */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <label className="block mb-2 text-black">
          Chapter Title:
          <input
            type="text"
            name="title"
            value={newChapter.title}
            onChange={handleChapterChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2 text-black">
          Chapter Description:
          <input
            type="text"
            name="description"
            value={newChapter.description}
            onChange={handleChapterChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        
      </form>

      {/* Modules Form */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <label className="block mb-2 text-black">
          Module Title:
          <input
            type="text"
            name="title"
            value={newModule.title}
            onChange={handleModuleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2 text-black">
          Module Description:
          <input
            type="text"
            name="description"
            value={newModule.description}
            onChange={handleModuleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        
      </form>

      {/* Resources Form */}
      <form onSubmit={(e) => e.preventDefault()} className="mb-4">
        <label className="block mb-2 text-black">
          Resource Type:
          <input
            type="text"
            name="type"
            value={newResource.type}
            onChange={handleResourceChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2 text-black">
          Resource Title:
          <input
            type="text"
            name="title"
            value={newResource.title}
            onChange={handleResourceChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-2 text-black">
          Resource Link:
          <input
            type="text"
            name="link"
            value={newResource.link}
            onChange={handleResourceChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <button
          type="button"
          onClick={handleResourceAdd}
          className="block w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Add Resource
        </button>
      </form>
    </div>
  );
}
