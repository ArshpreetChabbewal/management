import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (e) => {
    setCurrrentColor(e.target.value);

    localStorage.setItem("colorMode", e.target.value);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu: activeMenu,
        setActiveMenu: setActiveMenu,
        isClicked: isClicked,
        setIsClicked: setIsClicked,
        handleClick: handleClick,
        currentColor: currentColor,
        currentMode: currentMode,
        setCurrentColor: setCurrentColor,
        setCurrentMode: setCurrentMode,
        themeSettings: themeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
