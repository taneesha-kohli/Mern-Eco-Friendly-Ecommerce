import { loginFormControls } from '@/FormControls'
import FormLayout from '@/Layouts/FormLayout'
import React from 'react'

const Login = () => {

   const [formData, setFormData] = useState({
      email: '',
      password: ''
    })  

  return (
 <div className="p-[100px] pb-[60px] flex items-center justify-center bg-gray-50 ">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow border-[var(--main)] border ">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
          <FormLayout 
        formControls={loginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
      />
      
      </div>
    </div>

   )
}

export default Login










