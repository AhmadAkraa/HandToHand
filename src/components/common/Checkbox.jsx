import React from 'react';

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer font-tajawal text-sub text-sm font-bold">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} className="w-4 h-4 accent-main cursor-pointer"/>
      {label}
    </label>
  );
};

export default Checkbox;