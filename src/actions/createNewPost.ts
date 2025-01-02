export const createNewPost = async () => {
  // simulate a server action after 5 seconds
  await new Promise((_resolve, reject) => setTimeout(reject, 2000));
};

