import { useEffect, useRef } from "react";

export const useHover = onMouse => {
    const element = useRef();
  
    useEffect(() => {
        const elementValue = element.current;
        
        if (typeof onMouse === "function") {
            if (elementValue) {
                elementValue.addEventListener("mouseenter", onMouse);
            }
        } else {
            return;
        }
  
        return () => {
            if (elementValue) {
                elementValue.removeEventListener("mouseenter", onMouse);
            }
        };
    }, [onMouse]);
    return element;
};