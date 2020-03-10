import { useState, useEffect } from "react";

export const useScroll = onChange => {
    const [state, setState] = useState({ y: 0, x: 0 });
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return state;
};