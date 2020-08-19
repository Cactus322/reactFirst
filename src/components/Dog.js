import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Box, Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import Hidden from "@material-ui/core/Hidden";

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
        zIndex: -9999,
    },
    marginAll: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        background: '#29c3be',
    },


    zIndexCircle: {
        position: 'absolute',
        zIndex: 5,
        marginTop: theme.spacing(15),
    },
    zIndexBlob: {
        position: 'absolute',
        zIndex: 10,
    },
    zIndexDog: {
        position: 'relative',
        zIndex: 15,
        bottom: -4,
        marginTop: theme.spacing(5),
    },
    zIndexLine: {
        position: 'absolute',
        zIndex: 2,
        marginLeft: theme.spacing(10),
    },
    typographyStyles: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(7),
        color: '#fff',
    },
    button: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(5),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },


    zIndexCircleLg: {
        position: 'absolute',
        zIndex: 5,
        marginTop: theme.spacing(15),
        height: 180,
    },
    zIndexBlobLg: {
        position: 'absolute',
        zIndex: 10,
        height: 200,
    },
    zIndexDogLg: {
        position: 'relative',
        zIndex: 15,
        bottom: -4,
        marginTop: theme.spacing(5),
        height: 300,
    },
    zIndexLineLg: {
        position: 'absolute',
        zIndex: 2,
        marginLeft: theme.spacing(12),
        height: 250,
    },
    typographyStylesLg: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(7),
        color: '#fff',
    },
    buttonLg: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(5),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },


    zIndexCircleMd: {
        position: 'absolute',
        zIndex: 5,
        marginTop: theme.spacing(15),
        height: 180,
    },
    zIndexBlobMd: {
        position: 'absolute',
        zIndex: 10,
        height: 200,
    },
    zIndexDogMd: {
        position: 'relative',
        zIndex: 15,
        bottom: -4,
        marginTop: theme.spacing(5),
        height: 300,
    },
    zIndexLineMd: {
        position: 'absolute',
        zIndex: 2,
        marginLeft: theme.spacing(10),
        height: 220,
    },
    typographyStylesMd: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(7),
        color: '#fff',
    },
    buttonMd: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(5),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },


    zIndexCircleSm: {
        position: 'absolute',
        zIndex: 5,
        marginTop: theme.spacing(15),
        height: 130,
    },
    zIndexBlobSm: {
        position: 'absolute',
        zIndex: 10,
        height: 150,
    },
    zIndexDogSm: {
        position: 'relative',
        zIndex: 15,
        bottom: -4,
        marginTop: theme.spacing(5),
        height: 235,
    },
    zIndexLineSm: {
        position: 'absolute',
        zIndex: 2,
        marginLeft: theme.spacing(2),
        height: 170,
    },
    typographyStylesSm: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(7),
        color: '#fff',
    },
    buttonSm: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(5),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },


    zIndexCircleXs: {
        position: 'absolute',
        zIndex: 5,
        marginTop: theme.spacing(5),
        height: 130,
    },
    zIndexBlobXs: {
        position: 'absolute',
        zIndex: 10,
        height: 150,
    },
    zIndexDogXs: {
        position: 'relative',
        zIndex: 15,
        bottom: 0,
        marginTop: theme.spacing(5),
        height: 195,
    },
    zIndexLineXs: {
        position: 'absolute',
        zIndex: 2,
        marginLeft: theme.spacing(2),
        height: 170,
    },
    typographyStylesXs: {
        position: 'relative',
        zIndex: 50,
        marginTop: theme.spacing(7),
        paddingTop: theme.spacing(7),
        color: '#fff',
        textAlign: 'center',
    },
    buttonXs: {
        zIndex: 50,
        marginTop: theme.spacing(5),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },
}));

function Dog() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.marginAll}>

                {/*Desktop*/}
                <Hidden lgDown>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={6}>
                            <img src={require('../images/Stylize Circles.png')} className={classes.zIndexCircle}/>
                            <img src={require('../images/Blob 3.png')} className={classes.zIndexBlob}/>
                            <img src={require('../images/BigDog.png')} className={classes.zIndexDog}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item sm={7}>
                                    <img src={require('../images/Line 11.png')} className={classes.zIndexLine}/>
                                    <Typography component="div">
                                        <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" className={classes.typographyStyles}>
                                            Nemo enim ipsam voluptatem quia voluptas in proident
                                        </Box>
                                    </Typography>
                                    <ColorButton variant="contained" size="large" href="#" className={classes.button}>Записаться на прием</ColorButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>

                {/*lg*/}
                <Hidden only={['sm', 'xl', 'md', 'xs']}>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={6}>
                            <img src={require('../images/Stylize Circles.png')} className={classes.zIndexCircleLg}/>
                            <img src={require('../images/Blob 3.png')} className={classes.zIndexBlobLg}/>
                            <img src={require('../images/BigDog.png')} className={classes.zIndexDogLg}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item sm={7}>
                                    <img src={require('../images/Line 11.png')} className={classes.zIndexLineLg}/>
                                    <Typography component="div">
                                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyStylesLg}>
                                            Nemo enim ipsam voluptatem quia voluptas in proident
                                        </Box>
                                    </Typography>
                                    <ColorButton variant="contained" size="large" href="#" className={classes.buttonLg}>Записаться на прием</ColorButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>

                {/*md*/}
                <Hidden only={['sm', 'xl', 'lg', 'xs']}>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={6}>
                            <img src={require('../images/Stylize Circles.png')} className={classes.zIndexCircleMd}/>
                            <img src={require('../images/Blob 3.png')} className={classes.zIndexBlobMd}/>
                            <img src={require('../images/BigDog.png')} className={classes.zIndexDogMd}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item sm={7}>
                                    <img src={require('../images/Line 11.png')} className={classes.zIndexLineMd}/>
                                    <Typography component="div">
                                        <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyStylesMd}>
                                            Nemo enim ipsam voluptatem quia voluptas in proident
                                        </Box>
                                    </Typography>
                                    <ColorButton variant="contained" size="large" href="#" className={classes.buttonMd}>Записаться на прием</ColorButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>

                {/*sm*/}
                <Hidden only={['md', 'xl', 'lg', 'xs']}>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={6}>
                            <img src={require('../images/Stylize Circles.png')} className={classes.zIndexCircleSm}/>
                            <img src={require('../images/Blob 3.png')} className={classes.zIndexBlobSm}/>
                            <img src={require('../images/BigDog.png')} className={classes.zIndexDogSm}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item sm={2}>
                                </Grid>
                                <Grid item sm={7}>
                                    <img src={require('../images/Line 11.png')} className={classes.zIndexLineSm}/>
                                    <Typography component="div">
                                        <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyStylesSm}>
                                            Nemo enim ipsam voluptatem quia voluptas in proident
                                        </Box>
                                    </Typography>
                                    <ColorButton variant="contained" size="large" href="#" className={classes.buttonSm}>Записаться</ColorButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>

                {/*xs*/}
                <Hidden only={['md', 'xl', 'lg', 'sm']}>
                    <img src={require('../images/Stylize Circles.png')} className={classes.zIndexCircleXs}/>
                    <img src={require('../images/Blob 3.png')} className={classes.zIndexBlobXs}/>
                    <Typography component="div">
                        <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyStylesXs}>
                            Nemo enim ipsam voluptatem quia voluptas in proident
                        </Box>
                    </Typography>
                    <Grid
                        container
                        justify="center"
                    >
                        <ColorButton variant="contained" size="large" href="#" className={classes.buttonXs}>Записаться</ColorButton>
                    </Grid>
                    <Grid
                        container
                        justify="center"
                    >
                        <img src={require('../images/BigDog.png')} className={classes.zIndexDogXs}/>
                    </Grid>
                </Hidden>
            </div>
        </div>
    )
}

export default withWidth()(Dog);