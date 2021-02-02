import {Component} from 'react';
import {useNotifications} from '../../state/NotificationsState';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    info: {componentStack: string} | null;
}

class ErrorBoundaryClass extends Component<
    {errorCallback: (error: object) => void},
    ErrorBoundaryState
> {
    state = {
        hasError: false,
        error: null,
        info: null,
    };

    static getDerivedStateFromError(error: any) {
        return {hasError: true, error};
    }
    componentDidCatch(error: any, info: any) {
        console.log(error, info);
        this.setState({error, info});
        this.props.errorCallback(error);
    }
    render() {
        const {hasError} = this.state;
        return hasError ? <></> : this.props.children;
    }
}

export const ErrorBoundary = ({
    children,
    errorCallback,
}: {
    children: React.ReactNode;
    errorCallback: (e: object) => void;
}) => (
    <ErrorBoundaryClass errorCallback={errorCallback}>
        {children}
    </ErrorBoundaryClass>
);

export const ErrorBoundaryTryRefresh = ({
    children,
}: {
    children: JSX.Element;
}) => {
    const {push} = useNotifications();
    <ErrorBoundaryClass
        errorCallback={(_) =>
            push('Something went wrong, try refreshing the page.', {
                type: 'error',
            })
        }
    >
        {children}
    </ErrorBoundaryClass>;
};
