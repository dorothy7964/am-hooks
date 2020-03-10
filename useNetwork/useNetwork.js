import { useState, useEffect } from "react";

export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
         if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
         setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.romoveEventListener("online", handleChange);
            window.romoveEventListener("offline", handleChange);
        };
    }, []);
    return status;
};