export const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function"){
        return;
    }
    if (!onCancel || typeof onCancel !== "function"){
        return;
    }
  
    const confirmAction = () => {
        // window.confirm or confirm 적기
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};