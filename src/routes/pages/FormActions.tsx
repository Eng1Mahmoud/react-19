import {useActionState} from "react"
import {formActionFun} from "../../actions/formActionFun"

const FormActions = () => {
  const [state, formAction, isPending] = useActionState(formActionFun,{status:"",message:""});
  return (
    <div>
      <h1>UseActionState</h1>
      <form action={formAction}>
        <input type="text" placeholder="Enter your name" name="username"  />
        <button   >
          {isPending ? "loading..." : "Submit"}
        </button>
        {state.status && <p>{state.message}</p>}
      </form>
    </div>
  )
}

export default FormActions