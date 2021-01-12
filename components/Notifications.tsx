import {Box, Button, Layer, Text} from 'grommet';
import {FormClose} from 'grommet-icons/icons/FormClose';
import {useEffect} from 'react';
import {Notification, useNotifications} from '../state/NotificationsState';

export const Popup = ({
    data: {message, timeout},
    onClose,
}: {
    data: Notification;
    onClose: () => void;
}) => {
    useEffect(() => {
        if (timeout && window?.setTimeout !== undefined) {
            const id = window.setTimeout(() => {
                onClose();
            }, timeout);
            return () => window.clearTimeout(id);
        }
    }, [onClose, timeout]);
    return (
        <Box
            align="center"
            direction="row"
            gap="small"
            justify="between"
            round="small"
            elevation="small"
            pad="small"
            margin={{top: 'small'}}
            background="white"
        >
            <Box align="center" direction="row" gap="xsmall">
                <Text>{message}</Text>
            </Box>
            <Button icon={<FormClose />} plain onClick={onClose} />
        </Box>
    );
};

export const NotificationLayer = () => {
    const {notifications, close} = useNotifications();

    return (
        <>
            {notifications.length > 0 && (
                <Layer
                    position="top-right"
                    modal={false}
                    margin={{vertical: 'medium', horizontal: 'small'}}
                    responsive={false}
                    plain
                >
                    {notifications.map((n, i) => (
                        <Popup
                            onClose={() => close(i)}
                            key={n.message + i}
                            data={n}
                        />
                    ))}
                </Layer>
            )}
        </>
    );
};
