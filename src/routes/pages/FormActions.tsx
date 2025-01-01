import {useActionState} from "react"
import {formActionFun} from "../../actions/formActionFun"
import SubmitButton from "../../components/SubmitButton";
const FormActions = () => {
  const [state, formAction] = useActionState(formActionFun,{status:"",message:""});
  return (
    <div>
      <h1>useFormStatus demo</h1>
      <form action={formAction} >
        <input type="text" placeholder="Enter your name" name="username"  />
        <SubmitButton/>
        {state.status && <p>{state.message}</p>}
      </form>
 
    </div>
  )
}

export default FormActions