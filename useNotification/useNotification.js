export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
  
    const fireNotif = () => {
        // granted - 사용자가 알림 표시를 허용
        // denied  - 사용자가 알림 표시를 거절
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(title, options);
            } else {
                return;
            }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};