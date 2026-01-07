import { createContext, useContext, useState } from "react";
 
const ActivityContext = createContext();
 
export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "info",
      message: "Dashboard loaded",
      time: new Date(),
    },
  ]);
 
  const logActivity = (type, message) => {
    setActivities((prev) => [
      {
        id: Date.now(),
        type,
        message,
        time: new Date(),
      },
      ...prev,
    ]);
  };
 
  return (
    <ActivityContext.Provider value={{ activities, logActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};
 
export const useActivity = () => useContext(ActivityContext);