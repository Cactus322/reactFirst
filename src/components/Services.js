import React from "react";
import {Container, Typography, Box, Grid, Paper} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

function HeaderIcon(props) {
    return (
        <SvgIcon fill="none" {...props}>
            <path d="M11.2713 6.61768L9.71289 8.17282L14.775 13.2353L9.71289 18.2978L11.2713 19.853L17.9029 13.2353L11.2713 6.61768Z" />
            <path d="M10.59 10.4227L9.72425 9.55878L6.04004 13.2352L9.72425 16.9117L10.59 16.0477L7.77776 13.2352L10.59 10.4227Z" />
        </SvgIcon>
    )
};

const ColorButton = withStyles(theme => ({
    root: {
        backgroundColor: '#f2726f',
        '&:hover': {
            backgroundColor: '#f2726f',
        },
    },
}))(Button);



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(10),
    },
    marginHeaderGrid: {
        marginTop: theme.spacing(3),
        color: '#5d62b5',
    },
    marginHeaderTypography: {
        paddingTop: 3,
    },
    marginHeaderSecond: {
        marginTop: theme.spacing(5),
    },
    marginPaper: {
        marginTop: theme.spacing(7),
        borderRadius: 15,
    },
    alignImage: {
        paddingTop: theme.spacing(3),
        margin: 'auto',
        display: 'block',
    },
    paperFontHeaderStyle: {
        marginTop: theme.spacing(3),
        textAlign: 'center',
        color: '#f2726f',
    },
    paperFontBodyStyle: {
        marginTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(8),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },
    box: {
        margin: 'auto',
        display: 'block',
    }
}));

function Services() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Hidden smDown>
                    <Box>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                            className={classes.marginHeaderGrid}
                        >
                            <Grid item sm={0}>
                                <HeaderIcon fontSize="large"/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography variant="h6" className={classes.marginHeaderTypography}>
                                    OUR SERVICES
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.marginHeaderSecond}>
                        <Typography component="div">
                            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                                Sed perspiciatis omnis iste natus
                            </Box>
                        </Typography>
                    </Box>
                </Hidden>

                {/*sm*/}
                <Hidden mdUp>
                    <Box>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                            className={classes.marginHeaderGrid}
                        >
                            <Grid item sm={0}>
                                <HeaderIcon fontSize=""/>
                            </Grid>
                            <Grid item sm={3}>
                                <Typography variant="body1" className={classes.marginHeaderTypography}>
                                    OUR SERVICES
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.marginHeaderSecond}>
                        <Typography component="div">
                            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
                                Sed perspiciatis omnis iste natus
                            </Box>
                        </Typography>
                    </Box>
                </Hidden>


                <Grid
                    container
                    justify="space-around"
                    alignItems="flex-start"
                >
                    <Grid item sm={3}>
                        <Paper elevation={5} className={classes.marginPaper}>
                            <img src={require('../images/paperImage1.png')} className={classes.alignImage}/>
                            <Typography component="div">
                                <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                    Pet Boarding (No Cages)
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" className={classes.paperFontBodyStyle}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3} className={classes.marginGridItem}>
                        <Paper elevation={10} className={classes.marginPaper}>
                            <img src={require('../images/paperImage2.png')} className={classes.alignImage}/>
                            <Typography component="div">
                                <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                    Pet Daycare
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" className={classes.paperFontBodyStyle}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper elevation={5} className={classes.marginPaper}>
                            <img src={require('../images/paperImage3.png')} className={classes.alignImage}/>
                            <Typography component="div">
                                <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                    Pet Day Spa & Grooming
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" className={classes.paperFontBodyStyle}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="space-around"
                    alignItems="flex-start"
                >
                    <Grid item sm={3}>
                        <Paper elevation={5} className={classes.marginPaper}>
                            <img src={require('../images/paperImage4.png')} className={classes.alignImage}/>
                            <Typography component="div">
                                <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                    Custom Meal Plans
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" className={classes.paperFontBodyStyle}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper elevation={5} className={classes.marginPaper}>
                            <img src={require('../images/paperImage5.png')} className={classes.alignImage}/>
                            <Typography component="div">
                                <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                    Pet Training
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" className={classes.paperFontBodyStyle}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper elevation={5} className={classes.marginPaper}>
                            <img src={require('../images/paperImage6.png')} className={classes.alignImage}/>
                            <Typography component="div">
                                <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                    Shop Our Store!
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="body1.fontSize" className={classes.paperFontBodyStyle}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Box>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="space-around"
                    alignItems="flex-start"
                >
                    <ColorButton variant="contained" size="large" href="#" className={classes.button}>Узнать больше</ColorButton>
                </Grid>
            </Container>
        </div>
    )
}

export default Services;