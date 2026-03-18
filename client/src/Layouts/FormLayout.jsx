import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'

const FormLayout = ({formControls, buttonText, formData, setFormData}) => {

  const handleChange = ()=>{

  }


  const renderElementType = (item)=>{
    let element = '';
     switch (item.elementType) {
      case 'input':
      element = ( <Input placeholder={item.placeholder} name={item.name} type={item.type} className="py-5" /> )
        break;
      case 'textarea':
      element = ( <Textarea placeholder={item.placeholder} name={item.name} className="py-5"/>)
        break; 
     
      default:
        element = ( <Input placeholder={item.placeholder} name={item.name} type={item.type} className="py-5"/> )
        break;
     }

     return element
  }

  return (
    <form action="">
      {
        formControls.map((item)=>{
          return(
            <div className="form-group pb-4">
              <Label className="pb-2">{item.label}</Label>
               {renderElementType(item)}
            </div>
          )
        })
      }
      <Button className="bg-[var(--main)] text-white w-full h-[45px] mt-5">{buttonText}</Button>
      {
        buttonText == "Sign In" || buttonText == "Sign Up" 
        ?
            <p className="text-sm text-center mt-6">
       {buttonText == "Sign In" ? 'Don’t have an account?' : "Already have an account?"}
           
          <span className="text-green-600 cursor-pointer pl-2">
          <Link to={buttonText == "Sign In" ? "/register" : "/login"}>{buttonText == "Sign In" ? 'Sign Up' : "Sign In"}</Link>
          </span>
        </p>
        :
        ''
      }
  
    </form>
  )
}

export default FormLayout
