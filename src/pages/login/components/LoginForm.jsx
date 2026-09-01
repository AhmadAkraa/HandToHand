import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/common/FormField';
import Button from '../../../components/common/Button';
import Checkbox from '../../../components/common/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className="bg-white/30 border border-bk-gray shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-10 rounded-3xl w-full max-w-md">
      <h2 className="text-2xl text-sub font-bold text-center mb-8 mt-4 font-tajawal">
        تسجيل الدخول
      </h2>

      <form className="flex flex-col gap-6">
        <FormField name="email" value={formData.email} onChange={handleChange} type="email" placeholder="البريد الإلكتروني" icon={<FontAwesomeIcon icon={faEnvelope} className="text-lg" />}/>
        <FormField name="password" value={formData.password} onChange={handleChange} type="password" placeholder="كلمة المرور" icon={<FontAwesomeIcon icon={faLock} className="text-lg" />}/>
        <div className="flex justify-between items-center mt-8">
          <Checkbox label="تذكرني" name="rememberMe" checked={formData.rememberMe} onChange={handleChange}/>
          <Link to="/forgot-password" className="text-sub font-tajawal font-medium">
            نسيت كلمة المرور ؟
          </Link>
        </div>
        <Button text="تسجيل الدخول" type="submit" className="w-full mt-4 bg-main" />
        <p className="text-center text-sm font-tajawal mt-2 text-bk-gray font-bold">
          <Link to="/signup" className="text-a-link hover:underline">ليس لديك حساب؟</Link>  إنشاء حساب جديد  
        </p>
      </form>
      
    </div>
  );
};

export default LoginForm;