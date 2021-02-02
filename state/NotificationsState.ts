import {atom, useRecoilState} from 'recoil';
import {useCallback} from 'react';

type NotifType = 'error' | 'plain' | 'success';
export type Notification = {
    message: string;
    timeout?: number;
    type?: NotifType;
};

export const NotificationsState = atom({
    key: 'NotificationsState',
    default: [] as Notification[],
});

export const useNotifications = () => {
    const [notifications, setter] = useRecoilState(NotificationsState);
    const close = useCallback(
        (index: number) =>
            setter((s) => [...s.slice(0, index), ...s.slice(index + 1)]),
        [setter]
    );
    const push = useCallback(
        (message: string, options?: {type?: NotifType; timeout?: number}) => {
            return setter((state) => [...state, {message, ...options}]);
        },
        [setter]
    );
    return {
        notifications,
        close,
        push,
    };
};
