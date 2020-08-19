import React from "react";
import {Container, Typography, Box, Grid, Paper, Hidden} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";

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
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(10),
    },
    background: {
        background: '#29c3be',
        marginTop: theme.spacing(10),
        paddingBottom: theme.spacing(30),
    },
    imgDog: {
        position: 'absolute',
        zIndex: 50,
    },
    imgBlob: {
        position: 'absolute',
        zIndex: 10,
        paddingLeft: theme.spacing(6),
    },
    marginHeaderGrid: {
        marginTop: theme.spacing(10),
        color: '#fff',
    },
    marginHeaderTypography: {
        paddingTop: 3,
    },
    typography: {
        paddingTop: theme.spacing(3),
        color: '#fff',
    },
    typographyGrid: {
        paddingTop: theme.spacing(10),
        color: '#fff',
    },
    typographySubtitle: {
        color: '#5d62b5',
    },
    imgGrid: {
        paddingTop: theme.spacing(10),
    },
    containerBackground: {
        position: 'relative',
        background: '#5d62b5',
        borderRadius: 30,
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(-40),
    },
    button: {
        position: 'relative',
        zIndex: 50,
        padding: theme.spacing(2),
        marginTop: theme.spacing(8),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },
    typographySecond: {
        padding: theme.spacing(5),
        color: '#fff',
    },


    imgDogLg: {
        position: 'absolute',
        zIndex: 50,
        height: 290,
    },
    imgBlobLg: {
        position: 'absolute',
        zIndex: 10,
        paddingLeft: theme.spacing(6),
        height: 260,
    },


    imgDogMd: {
        position: 'absolute',
        zIndex: 50,
        height: 250,
    },
    imgBlobMd: {
        position: 'absolute',
        zIndex: 10,
        paddingLeft: theme.spacing(6),
        height: 210,
    },
    buttonMd: {
        position: 'relative',
        zIndex: 50,
        padding: theme.spacing(2),
        marginTop: theme.spacing(6),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },


    imgDogSm: {
        position: 'absolute',
        zIndex: 50,
        height: 190,
        marginTop: theme.spacing(3),
    },
    imgBlobSm: {
        position: 'absolute',
        zIndex: 10,
        paddingLeft: theme.spacing(6),
        height: 160,
    },
    imgGridSm: {
        paddingTop: theme.spacing(10),
        height: 55,
    },
    buttonSm: {
        position: 'relative',
        zIndex: 50,
        padding: theme.spacing(2),
        marginTop: theme.spacing(10),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },


    imgDogXs: {
        position: 'absolute',
        zIndex: 50,
        height: 190,
        marginTop: theme.spacing(0),
    },
    imgBlobXs: {
        position: 'absolute',
        zIndex: 10,
        paddingLeft: theme.spacing(1),
        height: 150,
        marginTop: theme.spacing(10),
    },
    imgGridXs: {
        paddingTop: theme.spacing(10),
        height: 130,
    },
    buttonXs: {
        position: 'relative',
        zIndex: 50,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(6),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },
    marginHeaderGridXs: {
        marginTop: theme.spacing(20),
        color: '#fff',
    },
}));

function Impact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            {/*xl*/}
            <Hidden lgDown>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sm={7}>
                    </Grid>
                    <Grid item sm={5}>
                        <img src={require('../images/littleDog.png')} className={classes.imgDog}/>
                    </Grid>
                </Grid>
                <div className={classes.background}>
                    <Container maxWidth="lg">
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={6}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.marginHeaderGrid}
                            >
                                <Grid item sm={0}>
                                    <HeaderIcon fontSize="large"/>
                                </Grid>
                                <Grid item sm={10}>
                                    <Typography variant="h6" className={classes.marginHeaderTypography}>
                                        OUR IMPACT
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography component="div">
                                <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                    Nemo enim ipsam voluptatem quia voluptas
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <img src={require('../images/Blob 4.png')} className={classes.imgBlob}/>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={1}>
                            <img src={require('../images/dog_duckling.png')} className={classes.imgGrid}/>
                        </Grid>
                        <Grid item sm={2}>
                            <Typography component="div">
                                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                    3,700
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                    puppy baths
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <img src={require('../images/dog_house.png')} className={classes.imgGrid}/>
                        </Grid>
                        <Grid item sm={2}>
                            <Typography component="div">
                                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                    4,500
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                    dof boarder
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <img src={require('../images/dog_leash.png')} className={classes.imgGrid}/>
                        </Grid>
                        <Grid item sm={2}>
                            <Typography component="div">
                                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                    2,900
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                    pups trained
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={1}>
                            <img src={require('../images/dog_food_bowl.png')} className={classes.imgGrid}/>
                        </Grid>
                        <Grid item sm={2}>
                            <Typography component="div">
                                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                    12k+
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                    meals served
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    </Container>
                    <Container maxWidth="lg" className={classes.containerBackground}>
                        <Grid
                            container
                            justify="space-around"
                            alignItems="flex-start"
                        >
                            <Grid item sm={7}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographySecond}>
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <ColorButton variant="contained" size="large" href="#" className={classes.button}>Записаться на прием</ColorButton>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Hidden>

            {/*lg*/}
            <Hidden only={['sm', 'xl', 'md', 'xs']}>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sm={7}>
                    </Grid>
                    <Grid item sm={5}>
                        <img src={require('../images/littleDog.png')} className={classes.imgDogLg}/>
                    </Grid>
                </Grid>
                <div className={classes.background}>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item sm={6}>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.marginHeaderGrid}
                                >
                                    <Grid item sm={0}>
                                        <HeaderIcon fontSize="large"/>
                                    </Grid>
                                    <Grid item sm={10}>
                                        <Typography variant="h6" className={classes.marginHeaderTypography}>
                                            OUR IMPACT
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography component="div">
                                    <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                        Nemo enim ipsam voluptatem quia voluptas
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={6}>
                                <img src={require('../images/Blob 4.png')} className={classes.imgBlobLg}/>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item sm={1}>
                                <img src={require('../images/dog_duckling.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        3,700
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        puppy baths
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_house.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        4,500
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        dof boarder
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_leash.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        2,900
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        pups trained
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_food_bowl.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        12k+
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        meals served
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="lg" className={classes.containerBackground}>
                        <Grid
                            container
                            justify="space-around"
                            alignItems="flex-start"
                        >
                            <Grid item sm={7}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographySecond}>
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <ColorButton variant="contained" size="large" href="#" className={classes.button}>Записаться на прием</ColorButton>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Hidden>

            {/*md*/}
            <Hidden only={['sm', 'xl', 'lg', 'xs']}>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sm={7}>
                    </Grid>
                    <Grid item sm={5}>
                        <img src={require('../images/littleDog.png')} className={classes.imgDogMd}/>
                    </Grid>
                </Grid>
                <div className={classes.background}>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item sm={6}>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.marginHeaderGrid}
                                >
                                    <Grid item sm={0}>
                                        <HeaderIcon fontSize="large"/>
                                    </Grid>
                                    <Grid item sm={10}>
                                        <Typography variant="h6" className={classes.marginHeaderTypography}>
                                            OUR IMPACT
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                        Nemo enim ipsam voluptatem quia voluptas
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={6}>
                                <img src={require('../images/Blob 4.png')} className={classes.imgBlobMd}/>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item sm={1}>
                                <img src={require('../images/dog_duckling.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        3,700
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        puppy baths
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_house.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        4,500
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        dof boarder
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_leash.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        2,900
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        pups trained
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_food_bowl.png')} className={classes.imgGrid}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        12k+
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        meals served
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="md" className={classes.containerBackground}>
                        <Grid
                            container
                            justify="space-around"
                            alignItems="flex-start"
                        >
                            <Grid item sm={7}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographySecond}>
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <ColorButton variant="contained" size="large" href="#" className={classes.buttonMd}>Записаться на прием</ColorButton>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Hidden>

            {/*sm*/}
            <Hidden only={['md', 'xl', 'lg', 'xs']}>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sm={7}>
                    </Grid>
                    <Grid item sm={5}>
                        <img src={require('../images/littleDog.png')} className={classes.imgDogSm}/>
                    </Grid>
                </Grid>
                <div className={classes.background}>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item sm={6}>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.marginHeaderGrid}
                                >
                                    <Grid item sm={0}>
                                        <HeaderIcon fontSize=""/>
                                    </Grid>
                                    <Grid item sm={10}>
                                        <Typography variant="body1" className={classes.marginHeaderTypography}>
                                            OUR IMPACT
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                        Nemo enim ipsam voluptatem quia voluptas
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={6}>
                                <img src={require('../images/Blob 4.png')} className={classes.imgBlobSm}/>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item sm={1}>
                                <img src={require('../images/dog_duckling.png')} className={classes.imgGridSm}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        3,700
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        puppy baths
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_house.png')} className={classes.imgGridSm}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        4,500
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        dof boarder
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_leash.png')} className={classes.imgGridSm}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        2,900
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        pups trained
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={1}>
                                <img src={require('../images/dog_food_bowl.png')} className={classes.imgGridSm}/>
                            </Grid>
                            <Grid item sm={2}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        12k+
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        meals served
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="sm" className={classes.containerBackground}>
                        <Grid
                            container
                            justify="space-around"
                            alignItems="flex-start"
                        >
                            <Grid item sm={7}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographySecond}>
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <ColorButton variant="contained" size="large" href="#" className={classes.buttonSm}>Записаться</ColorButton>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Hidden>

            {/*xs*/}
            <Hidden only={['md', 'xl', 'lg', 'sm']}>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <img src={require('../images/Blob 4.png')} className={classes.imgBlobXs}/>
                    <img src={require('../images/littleDog.png')} className={classes.imgDogXs}/>
                </Grid>
                <div className={classes.background}>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item sm={6}>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.marginHeaderGridXs}
                                >
                                    <Grid item sm={0}>
                                        <HeaderIcon fontSize=""/>
                                    </Grid>
                                    <Grid item sm={10}>
                                        <Typography variant="body1" className={classes.marginHeaderTypography}>
                                            OUR IMPACT
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                        Nemo enim ipsam voluptatem quia voluptas
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={2}>
                                <img src={require('../images/dog_duckling.png')} className={classes.imgGridXs}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        3,700
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        puppy baths
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <img src={require('../images/dog_house.png')} className={classes.imgGridXs}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        4,500
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        dof boarder
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <img src={require('../images/dog_leash.png')} className={classes.imgGridXs}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        2,900
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        pups trained
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <img src={require('../images/dog_food_bowl.png')} className={classes.imgGridXs}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographyGrid}>
                                        12k+
                                    </Box>
                                </Typography>
                                <Typography component="div">
                                    <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightBold" className={classes.typographySubtitle}>
                                        meals served
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="sm" className={classes.containerBackground}>
                        <Grid
                            container
                            justify="space-around"
                            alignItems="flex-start"
                        >
                            <Grid item sm={7}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographySecond}>
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <ColorButton variant="contained" size="large" href="#" className={classes.buttonXs}>Записаться</ColorButton>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Hidden>
        </div>
    )
}

export default Impact;