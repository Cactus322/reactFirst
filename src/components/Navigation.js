import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Container, withWidth} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from "@material-ui/core/Hidden";
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from "@material-ui/core/ListItem";
import {text} from "@fortawesome/fontawesome-svg-core";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    toolbarBackground: {
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
        },
        borderRadius: 13,
    },
    appBarColor: {
        borderRadius: 13,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuButtonBeforeSearch: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#f2726f', 0.9),
        '&:hover': {
            backgroundColor: fade('#f2726f', 1),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    toolbarBackgroundMobile: {
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
        },
    },
    inputInputMobile: {
        padding: theme.spacing(1, 1, 1, 5),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 60,
            '&:focus': {
                width: 120,
            },
        },
    },
    searchIconMobile: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f2726f',
    },
    searchMobile: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#f2726f', 0.35),
        '&:hover': {
            backgroundColor: fade('#f2726f', 0.6),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    appBarMobile: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#f2726f',
    },
    growMobile: {
        flexGrow: 1,
    },
    rootXS: {
        display: 'flex',
    },
    appBarXS: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: '#5d62b5',
    },
    appBarShiftXS: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButtonXS: {
        marginRight: theme.spacing(2),
    },
    hideXS: {
        display: 'none',
    },
    drawerXS: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaperXS: {
        width: drawerWidth,
        background: '#F5F5F5',
    },
    drawerHeaderXS: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    contentXS: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShiftXS: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    marginLogoXS: {
        marginTop: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const theme = createMuiTheme({
    typography: {
        button: {
            fontWeight: 500,
        },
    },
});

function Navigation() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [openMobile, setOpenMibile] = React.useState(false);

    const handleClickMobile = () => {
        setOpenMibile(!openMobile);
    };

    const [openMobileShop, setOpenMibileShop] = React.useState(false);

    const handleClickMobileShop = () => {
        setOpenMibileShop(!openMobileShop);
    };

    return (
        <div className={classes.root}>
            <Container>
                <Hidden smDown>
                    <AppBar position="static" className={classes.appBarColor}>
                        <Toolbar className={classes.toolbarBackground}>
                            <ThemeProvider theme={theme}>
                                <div className={classes.menuButton}>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        Services
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Service 1</MenuItem>
                                        <MenuItem onClick={handleClose}>Service 2</MenuItem>
                                        <MenuItem onClick={handleClose}>Service 3</MenuItem>
                                    </Menu>
                                </div>
                            </ThemeProvider>
                                <div className={classes.menuButton}>
                                    <Button href="#">Specials</Button>
                                </div>
                                <div className={classes.menuButton}>
                                    <Button href="#">Facilities</Button>
                                </div>
                                <div className={classes.menuButton}>
                                    <Button href="#">Reviews</Button>
                                </div>
                                <ThemeProvider theme={theme}>
                                    <div className={classes.menuButton}>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            Shop
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>Product 1</MenuItem>
                                            <MenuItem onClick={handleClose}>Product 2</MenuItem>
                                            <MenuItem onClick={handleClose}>Product 3</MenuItem>
                                        </Menu>
                                    </div>
                            </ThemeProvider>
                            <div className={classes.menuButtonBeforeSearch}>
                                <Button href="#">About</Button>
                            </div>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </Container>

            {/*Планшеты*/}

            <Hidden only={['lg', 'xl', 'md', 'xs']}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbarBackgroundMobile}>
                        <ThemeProvider theme={theme}>
                            <div className={classes.menuButton}>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    Services
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Service 1</MenuItem>
                                    <MenuItem onClick={handleClose}>Service 2</MenuItem>
                                    <MenuItem onClick={handleClose}>Service 3</MenuItem>
                                </Menu>
                            </div>
                        </ThemeProvider>
                        <div className={classes.menuButton}>
                            <Button href="#">Specials</Button>
                        </div>
                        <div className={classes.menuButton}>
                            <Button href="#">Facilities</Button>
                        </div>
                        <div className={classes.menuButton}>
                            <Button href="#">Reviews</Button>
                        </div>
                        <ThemeProvider theme={theme}>
                            <div className={classes.menuButton}>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    Shop
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Product 1</MenuItem>
                                    <MenuItem onClick={handleClose}>Product 2</MenuItem>
                                    <MenuItem onClick={handleClose}>Product 3</MenuItem>
                                </Menu>
                            </div>
                        </ThemeProvider>
                        <div className={classes.menuButtonBeforeSearch}>
                            <Button href="#">About</Button>
                        </div>
                        <div className={classes.searchMobile}>
                            <div className={classes.searchIconMobile}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInputMobile,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </Hidden>

            {/*Мобильные телефоны*/}

            <Hidden smUp>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBarXS, {
                        [classes.appBarShiftXS]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButtonXS, open && classes.hideXS)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            <img src={require("../images/Logo-Placeholder-5.svg")} href="#home" className={classes.marginLogoXS} />
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawerXS}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaperXS,
                    }}
                >
                    <div className={classes.drawerHeaderXS}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button onClick={handleClickMobile}>
                            <ListItemText primary="Services" />
                            {openMobile ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openMobile} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button href="#" className={classes.nested}>
                                    <ListItemText primary="Service 1" />
                                </ListItem>
                                <ListItem button href="#" className={classes.nested}>
                                    <ListItemText primary="Service 2" />
                                </ListItem>
                                <ListItem button href="#" className={classes.nested}>
                                    <ListItemText primary="Service 3" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button key={text}>
                            <ListItemText href="#">Specials</ListItemText>
                        </ListItem>
                        <ListItem button key={text}>
                            <ListItemText href="#">Facilities</ListItemText>
                        </ListItem>
                        <ListItem button key={text}>
                            <ListItemText href="#">Reviews</ListItemText>
                        </ListItem>
                        <ListItem button onClick={handleClickMobileShop}>
                            <ListItemText primary="Shop" />
                            {openMobileShop ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openMobileShop} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button href="#" className={classes.nested}>
                                    <ListItemText primary="Product 1" />
                                </ListItem>
                                <ListItem button href="#" className={classes.nested}>
                                    <ListItemText primary="Product 2" />
                                </ListItem>
                                <ListItem button href="#" className={classes.nested}>
                                    <ListItemText primary="Product 3" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button key={text}>
                            <ListItemText href="#">About</ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
            </Hidden>
        </div>
    );
}

Navigation.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Navigation);