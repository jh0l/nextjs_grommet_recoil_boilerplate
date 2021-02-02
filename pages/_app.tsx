import type {AppProps} from 'next/app';
import '../styles/global.css';
import {RecoilRoot} from 'recoil';
import {Grommet} from 'grommet';
import {theme} from '../theme';
import {NavBar} from '../components/NavBar';
import {NotificationLayer} from '../components/Notifications';

import Head from 'next/head';

const HeadContent = ({title}: {title: string}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
    );
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <HeadContent title="[AppName]" />
            <Grommet theme={theme}>
                <NavBar />
                <Component {...pageProps} />
                <NotificationLayer />
            </Grommet>
        </RecoilRoot>
    );
}
