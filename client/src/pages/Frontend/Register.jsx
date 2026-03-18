import { registerFormControls } from '@/FormControls'
import FormLayout from '@/Layouts/FormLayout'
import { useState } from 'react'

const Register = () => {

  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  })  

  return (
    <div className="p-[100px] pb-[60px] flex items-center justify-center bg-gray-50 ">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow border-[var(--main)] border ">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
          <FormLayout 
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
      />
     
      </div>
    </div>
  )
}

export default Register
