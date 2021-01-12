import type {AppProps} from 'next/app';
import '../styles/global.css';
import {RecoilRoot} from 'recoil';
import {Grommet} from 'grommet';
import {theme} from '../theme';
import {NavBar} from '../components/NavBar';
import {NotificationLayer} from '../components/Notifications';

export default function App({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <Grommet theme={theme}>
                <NavBar />
                <Component {...pageProps} />
                <NotificationLayer />
            </Grommet>
        </RecoilRoot>
    );
}
