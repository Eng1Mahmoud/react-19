import {useActionState} from "react"
import {formActionFun} from "../../actions/formActionFun"
import SubmitButton from "../../components/SubmitButton";

const FormActions = () => {
  const [state, formAction] = useActionState(formActionFun,{status:"",message:""});

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">useFormStatus demo</h1>
      
      <form action={formAction} className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          name="username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <SubmitButton />
        
        {state.status && (
          <p className="mt-2 text-sm text-gray-600">{state.message}</p>
        )}
      </form>
    </div>
  )
}

export default FormActions