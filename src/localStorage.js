export const getItem = () => {
  const existingData = JSON.parse(localStorage.getItem("installedApp"));
  if (existingData) return existingData;
  else return [];
};

const setItem = (clickedApp) => {
  const existingData = getItem();
  const isAlreadyAdded = existingData.some((app) => app.id === clickedApp.id);
  if (isAlreadyAdded) return alert("app already installed");
  const updatedData = [...existingData, clickedApp];
  localStorage.setItem("installedApp", JSON.stringify(updatedData));
};
export default setItem;

export const removeItem = (installedApp) => {
  const existingData = getItem();
  const arrayAfterRemoved = existingData.filter(
    (app) => app.id !== installedApp.id
  );
  localStorage.setItem("installedApp", JSON.stringify(arrayAfterRemoved));
};
