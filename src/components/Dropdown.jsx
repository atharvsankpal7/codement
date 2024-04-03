import React from 'react';

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <select
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
