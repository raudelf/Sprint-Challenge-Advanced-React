import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("true");

  useEffect(() => {
    if (someValue === true) {
      return document.body.classList.add("themeChange");
    }
    return document.body.classList.remove("themeChange");
  }, [someValue]);

  return [someValue, setSomeValue];
};