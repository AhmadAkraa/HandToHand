import React from 'react';

const FormField = ({ label, name, value, onChange, type = 'text', placeholder, icon, selectOptions }) => {
  const baseClasses = `w-full bg-white text-sub rounded-md py-2 outline-none focus:ring-2 focus:ring-main transition-all ${icon ? 'ps-12 pe-4' : 'px-4'} placeholder:text-t-gray border border-bt-gray appearance-none`;

  return (
    <div className="flex flex-col gap-2 w-full font-tajawal">
      {label && <label className="text-sub font-bold text-sm">{label}</label>}
      <div className="relative">
        {icon && (<span className="absolute inset-e-4 top-1/2 -translate-y-1/2 text-t-gray pointer-events-none">{icon}</span>)}
        {type === 'select' ? (
          <select name={name} value={value} onChange={onChange} className={baseClasses}>
            <option value="" disabled hidden>{placeholder}</option>
            {selectOptions && selectOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
          </select>
        ) : (
          <input name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} className={baseClasses}/>)}
      </div>
    </div>
  );
};

export default FormField;