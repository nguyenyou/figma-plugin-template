import { useState } from "react";
import DesignToCodeLogo from "./components/design-to-code-logo";

function App() {
  const [projectName, setProjectName] = useState("My Design");
  const [exportFormat, setExportFormat] = useState("React + Tailwind");

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white text-gray-800">
      <div className="mb-6 rounded-lg overflow-hidden">
        <DesignToCodeLogo />
      </div>

      <div className="bg-teal-50 rounded-lg p-4 mb-6 border border-teal-100">
        <h2 className="font-semibold text-teal-800 mb-2">
          Transform designs into code!
        </h2>
        <p className="text-sm text-teal-700">
          Select your design elements and convert them directly to clean,
          production-ready code.
        </p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="project-name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Name
        </label>
        <input
          type="text"
          id="project-name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="export-format"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Export Format
        </label>
        <select
          id="export-format"
          value={exportFormat}
          onChange={(e) => setExportFormat(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option>React + Tailwind</option>
          <option>HTML/CSS</option>
          <option>Vue + Tailwind</option>
          <option>React Native</option>
          <option>Flutter</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
          Convert Selection
        </button>
        <button className="bg-white text-teal-600 border border-teal-600 py-2 px-4 rounded-md hover:bg-teal-50 transition-colors">
          Export Assets
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h3 className="font-medium text-gray-700 mb-2">Features</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            Converts Figma layers to responsive components
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            Extracts colors, typography, and spacing
          </li>
          <li className="flex items-start">
            <span className="text-teal-500 mr-2">•</span>
            Generates clean, maintainable code
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
