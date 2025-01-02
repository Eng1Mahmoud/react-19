import { useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">{pending ? "Submitting..." : "Submit"}</button>
  );
};

export default SubmitButton;
