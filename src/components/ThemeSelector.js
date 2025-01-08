import React from "react";

const ThemeSelector = ({ themes, selectedTheme, onThemeChange }) => {
  return (
    <div className="p-4">
      <label htmlFor="theme" className="block text-lg font-medium mb-2">
        Select Theme:
      </label>
      <select
        id="theme"
        value={selectedTheme}
        onChange={(e) => onThemeChange(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      >
        {Object.keys(themes).map((themeKey) => (
          <option key={themeKey} value={themeKey}>
            {themeKey}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
