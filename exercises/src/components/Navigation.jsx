import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { InfoRounded, HouseRounded, Menu, NewspaperRounded, ContactsRounded } from '@mui/icons-material'
import { useState } from 'react';

const drawerWidth = 240;
const navItems = [
    {
        name: 'Home',
        icon: <HouseRounded />,
        href: '#Home'
    },
    {
        name: 'About',
        icon: <InfoRounded />,
        href: '#About'
    },
    {
        name: 'News',
        icon: <NewspaperRounded />,
        href: '#News'
    },
    {
        name: 'Contact',
        icon: <ContactsRounded />,
        href: '#Contact'
    }
];

export default function Navigation(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav>
            {/* Appbar */}
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: 'block', textAlign: 'left' }}
                    >
                        Player Cards
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button startIcon={item.icon} key={item.name} sx={{ color: '#fff' }}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer, can open on mobile */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Box onClick={handleDrawerToggle} ss={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
                        Player Cards
                    </Typography>
                    <Divider />
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.name} disablePadding>
                                <ListItemButton sx={{ textAlign: 'left' }}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}