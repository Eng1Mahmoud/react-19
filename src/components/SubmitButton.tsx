import { useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
};

export default SubmitButton;
