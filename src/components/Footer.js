import React from "react";
import {Container, Typography, Box, Grid, Paper, Hidden} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: '#5d62b5',
        padding: theme.spacing(3),
    },
    typographyFirst: {
        color: '#fff',
    },
    typographySecond: {
        color: '#fff',
        textAlign: 'right',
    },


    typographySecondXs: {
        color: '#fff',
        textAlign: 'right',
        marginTop: theme.spacing(2),
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Hidden xsUp>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={6}>
                            <Typography component="div" className={classes.typographyFirst}>
                                <Box fontSize="subtitle1.fontSize">
                                    Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography component="div" className={classes.typographySecond}>
                                <Box fontSize="subtitle1.fontSize">
                                    © 2020 Momchyan Gor.
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography component="div" className={classes.typographySecond}>
                                <Box fontSize="subtitle1.fontSize">
                                    Privacy Policy | Terms & Conditions
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Hidden>

                {/*xs*/}
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={6}>
                            <Typography component="div" className={classes.typographyFirst}>
                                <Box fontSize="subtitle1.fontSize">
                                    Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography component="div" className={classes.typographySecondXs}>
                                <Box fontSize="subtitle1.fontSize">
                                    © 2020 Momchyan Gor.
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography component="div" className={classes.typographySecond}>
                                <Box fontSize="subtitle1.fontSize">
                                    Privacy Policy | Terms & Conditions
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Hidden>
            </Container>
        </div>
    )
}

export default Footer;