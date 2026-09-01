import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/common/FormField';
import Button from '../../../components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faHome, faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const formFieldsConfig = [
  { name: 'fullName', type: 'text', placeholder: 'الاسم الكامل', icon: faUser },
  { name: 'email', type: 'email', placeholder: 'البريد الإلكتروني', icon: faEnvelope },
  { name: 'accountType', type: 'select', placeholder: 'نوع الحساب', icon: faChevronDown, options: ['متبرع', 'مستفيد'] },
  { name: 'address', type: 'text', placeholder: 'العنوان', icon: faHome },
  { name: 'phone', type: 'tel', placeholder: 'رقم الهاتف', icon: faPhone },
  { name: 'gender', type: 'select', placeholder: 'الجنس', icon: faChevronDown, options: ['ذكر', 'أنثى'] },
  { name: 'password', type: 'password', placeholder: 'إنشاء كلمة المرور', icon: faLock },
  { name: 'confirmPassword', type: 'password', placeholder: 'تأكيد كلمة المرور', icon: faLock }
];

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', accountType: '', address: '',
    phone: '', gender: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  return (
    <div className="bg-white/30 border border-bk-gray shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-8 sm:p-10 rounded-3xl w-full max-w-2xl">
      <h2 className="text-2xl text-sub font-bold text-center mb-10 m-5 font-tajawal">إنشاء حساب</h2>
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {formFieldsConfig.map((field, index) => (
            <FormField  key={index} name={field.name} value={formData[field.name]}  onChange={handleChange}  type={field.type}  placeholder={field.placeholder}  selectOptions={field.options}  icon={<FontAwesomeIcon icon={field.icon} className="text-lg" />} />
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center my-8 gap-4">
          <Button text="تسجيل" type="submit" className="w-full md:w-auto px-16 bg-main" />
          <Link to="/login" className="text-a-link hover:underline font-tajawal font-bold text-sm">
            هل تمتلك حساب بالفعل؟
          </Link>
        </div>
        
      </form>
    </div>
  );
};

export default SignupForm;