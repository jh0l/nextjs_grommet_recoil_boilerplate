import {Anchor, Header, Nav, Menu, ResponsiveContext, Heading} from 'grommet';

// TODO:
//  add user profile picture as button to open menu
//      menu contains sign out, persistence mode, clear cache?

type MenuLink = {
    label: string;
    href: string;
};

const menuLinks: MenuLink[] = [
    {label: 'Home', href: '/'},
    {label: '404', href: '/404'},
];

function DesktopNavItems() {
    return (
        <Nav direction="row">
            {menuLinks.map((link) => (
                <Anchor {...link} key={JSON.stringify(link)} />
            ))}
        </Nav>
    );
}

function MobileNavItems() {
    return <Menu label="Menu" items={menuLinks} />;
}

export const NavBar = () => (
    <Header background="light-1" pad={{horizontal: 'small'}}>
        <Heading level="6" color="inherit" margin="small">
            [Appname]
        </Heading>
        <ResponsiveContext.Consumer>
            {(responsive) =>
                responsive === 'small' ? (
                    <MobileNavItems />
                ) : (
                    <DesktopNavItems />
                )
            }
        </ResponsiveContext.Consumer>
    </Header>
);
