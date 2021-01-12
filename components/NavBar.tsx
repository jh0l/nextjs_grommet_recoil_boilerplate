import {Anchor, Header, Nav, Menu, ResponsiveContext, Heading} from 'grommet';

// TODO:
//  add user profile picture as button to open menu
//      menu contains sign out, persistence mode, clear cache?

type MenuLink = {
    label: string;
    href: string;
};

const menuLinks: MenuLink[] = [];

export const NavBar = () => (
    <Header background="dark-1" pad={{horizontal: 'small'}}>
        <Heading level="6" color="inherit" margin="medium">
            [Appname]
        </Heading>
        <ResponsiveContext.Consumer>
            {(responsive) =>
                responsive === 'small' ? (
                    <>
                        {menuLinks.length > 0 && (
                            <Menu label="Menu" items={menuLinks} />
                        )}
                    </>
                ) : (
                    <Nav direction="row">
                        {menuLinks.map((link) => (
                            <Anchor {...link} key={JSON.stringify(link)} />
                        ))}
                    </Nav>
                )
            }
        </ResponsiveContext.Consumer>
    </Header>
);
