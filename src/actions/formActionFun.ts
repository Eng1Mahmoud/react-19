type stateType = {
  status: string;
  message: string;
};
export const formActionFun = async (
  currentState: stateType,
  data: FormData
) => {
  "use server";
  const name = data.get("username");
  console.log(name);
  // semulate a server action after 5 seconds return a new state
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts");
    return { status: "success", message: `Hello ${name}` };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { status: "error", message: "an error occured" };
  }
};
