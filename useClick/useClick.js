import { useEffect, useRef } from "react";

export const useClick = onClick => {
    const element = useRef();
  
    useEffect(() => {
        const elementValue = element.current;
        
        if (typeof onClick === "function") {
            if (elementValue) {
                elementValue.addEventListener("click", onClick);
            }
        } else {
            return;
        }
  
        return () => {
            if (elementValue) {
                elementValue.removeEventListener("click", onClick);
            }
        };
    }, [onClick]);
    return element;
};