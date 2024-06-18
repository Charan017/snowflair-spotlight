export const filterSnapshot = (snapshot, childKey, childValue) => {
  return Object.fromEntries(
    Object.entries(snapshot).filter(
      ([key, value]) => value[childKey] === childValue
    )
  );
};
