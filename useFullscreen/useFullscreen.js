import { useRef } from "react";

export const useFullscreen = callback => {
    const element = useRef();
    const runCb = inFull => {
        if (callback && typeof callback === "function") {
            callback(inFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                /* Firefox */
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                /* IE/Edge */
                element.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};