import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // هنا ستقوم لاحقاً بربط حالة تسجيل الدخول الحقيقية
  // (سواء من LocalStorage، أو Context API، أو Redux)
  const isAuthenticated = true; // (اصلها false) // يمكنك تغييرها إلى true لاختبار ظهور الصفحات المحمية
// (حاليا رح ساويها true )
// (مشان صمم الشكل وبس خلصت برجعها false)

  if (!isAuthenticated) {
    // توجيه المستخدم غير المسجل إلى صفحة تسجيل الدخول
    // نستخدم replace لمنع المستخدم من العودة للصفحة المحمية عند الضغط على زر "رجوع" في المتصفح
    return <Navigate to="/login" replace />;
  }

  // إذا كان مسجلاً، نسمح بمروره لعرض محتوى الصفحة المطلوبة
  return <Outlet />;
};

export default ProtectedRoute;