import React from "react";
import {Container, Typography, Box, Grid, Paper, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(10),
    },
    typographyBody: {
        marginTop: theme.spacing(3),
    },
    socialLogo: {
        marginTop: theme.spacing(3),
    },
    gridItemFirst: {
        marginRight: theme.spacing(15)
    },
    gridItemSecond: {
        paddingTop: 10,
    },
    marginButton: {
        marginBottom: theme.spacing(3),
        fontWeight: 700,
    },
    buttonOthers: {
        fontWeight: 700,
    },
    buttonOthers2: {
        fontWeight: 700,
        paddingLeft: 0,
    },
    contacts: {
        marginTop: theme.spacing(3),
    },
    contactsOthers: {
        marginTop: theme.spacing(2),
    },
    contactsLogo: {
        paddingTop: 2,
    },

    gridItemSecondXs: {
        paddingTop: 20,
    },
}));

function Contacts() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*lg, xl*/}
            <Hidden mdDown>
                <Container maxWidth="lg">
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={3} className={classes.gridItemFirst}>
                            <img src={require('../images/Logo_2.png')}/>
                            <Typography component="div" className={classes.typographyBody}>
                                <Box fontSize="body1.fontSize">
                                    This is a blurb about the company sed do eiusmod tempor incididunt ut labore et
                                    dolore ex magna aliqua.
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.socialLogo}
                            >
                                <Grid item sm={3}>
                                    <img src={require('../images/facebook.png')}/>
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/twitter.png')}/>
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/instagram.png')}/>
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/youtube.png')}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} className={classes.gridItemSecond}>
                            <Typography component="div" className={classes.marginButton}>
                                <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
                                    EXPLORE LINKS
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item sm={3}>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>About</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Services</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Specials</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Estimates</Button>
                                </Grid>
                                <Grid item sm={3}>
                                </Grid>
                                <Grid item sm={3}>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Reviews</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers2}>Shop</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Careers</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers2}>FAQs</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItemSecond}>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
                                    CONTACTS
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contacts}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/place.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            321 Pikes Place Parkway
                                            Seattle, WA 54321
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/smartphone.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            (555) 765-4321
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/email.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            Info@company.com
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/timer.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            Mon - Sat: 7:000 am - 6:00 pm
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Hidden>

            {/*md*/}
            <Hidden only={['xl', 'lg', 'xs']}>
                <Container maxWidth="md">
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={3} className={classes.gridItemFirst}>
                            <img src={require('../images/Logo_2.png')}/>
                            <Typography component="div" className={classes.typographyBody}>
                                <Box fontSize="body1.fontSize">
                                    This is a blurb about the company sed do eiusmod tempor incididunt ut labore et
                                    dolore ex magna aliqua.
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.socialLogo}
                            >
                                <Grid item sm={3}>
                                    <img src={require('../images/facebook.png')}/>
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/twitter.png')}/>
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/instagram.png')}/>
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/youtube.png')}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} className={classes.gridItemSecond}>
                            <Typography component="div" className={classes.marginButton}>
                                <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
                                    EXPLORE LINKS
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item sm={3}>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>About</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Services</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Specials</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Estimates</Button>
                                </Grid>
                                <Grid item sm={3}>
                                </Grid>
                                <Grid item sm={3}>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Reviews</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers2}>Shop</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Careers</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers2}>FAQs</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItemSecond}>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
                                    CONTACTS
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contacts}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/place.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            321 Pikes Place Parkway
                                            Seattle, WA 54321
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/smartphone.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            (555) 765-4321
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/email.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            Info@company.com
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/timer.png')}/>
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            Mon - Sat: 7:000 am - 6:00 pm
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Hidden>

            {/*xs*/}
            <Hidden only={['xl', 'lg', 'md', 'sm']}>
                <Container maxWidth="md">
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={3} className={classes.gridItemFirst}>
                            <img src={require('../images/Logo_2.png')} />
                            <Typography component="div" className={classes.typographyBody}>
                                <Box fontSize="body1.fontSize">
                                    This is a blurb about the company sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua.
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.socialLogo}
                            >
                                <Grid item sm={3}>
                                    <img src={require('../images/facebook.png')} />
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/twitter.png')} />
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/instagram.png')} />
                                </Grid>
                                <Grid item sm={3}>
                                    <img src={require('../images/youtube.png')} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} className={classes.gridItemSecond}>
                            <Typography component="div" className={classes.marginButton}>
                                <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
                                    EXPLORE LINKS
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsHeaderXs}
                            >
                                <Grid item sm={3}>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>About</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Services</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Specials</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Estimates</Button>
                                </Grid>
                                <Grid item sm={3}>
                                </Grid>
                                <Grid item sm={3}>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Reviews</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers2}>Shop</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers}>Careers</Button>
                                    <Button href="#text-buttons" className={classes.buttonOthers2}>FAQs</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItemSecondXs}>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" fontWeight="fontWeightBold">
                                    CONTACTS
                                </Box>
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contacts}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/place.png')} />
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            321 Pikes Place Parkway
                                            Seattle, WA 54321
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/smartphone.png')} />
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            (555) 765-4321
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/email.png')} />
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            Info@company.com
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.contactsOthers}
                            >
                                <Grid item sm={1} className={classes.contactsLogo}>
                                    <img src={require('../images/timer.png')} />
                                </Grid>
                                <Grid item sm={8}>
                                    <Typography component="div">
                                        <Box fontSize="body1.fontSize">
                                            Mon - Sat:  7:000 am - 6:00 pm
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Hidden>
        </div>
    );
}

export default Contacts;