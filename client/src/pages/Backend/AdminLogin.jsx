import { AdminLoginFormControls } from '@/FormControls'
import FormLayout from '@/FormLayout'
import React from 'react'

const AdminLogin = () => {
  return (

    
 <div className="p-[100px] pb-[60px] flex items-center justify-center bg-gray-50 ">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow border-[var(--main)] border ">
        <h1 className="text-2xl font-semibold text-center mb-6">Admin Login</h1>
          <FormLayout 
        formControls={AdminLoginFormControls}
        buttonText={'Log In'}
      />
      
      </div>
    </div>

   )
}

export default AdminLogin










