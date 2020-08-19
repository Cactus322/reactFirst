import React from "react";
import {Container, Paper, Typography, Grid, Hidden} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import {positions} from "@material-ui/system";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import withWidth from "@material-ui/core/withWidth";

function HeaderIcon(props) {
    return (
        <SvgIcon fill="none" {...props}>
            <path d="M11.2713 6.61768L9.71289 8.17282L14.775 13.2353L9.71289 18.2978L11.2713 19.853L17.9029 13.2353L11.2713 6.61768Z" />
            <path d="M10.59 10.4227L9.72425 9.55878L6.04004 13.2352L9.72425 16.9117L10.59 16.0477L7.77776 13.2352L10.59 10.4227Z" />
        </SvgIcon>
    )
}

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
    },
    container: {
        backgroundColor: '#5d62b5',
        '&:hover': {
            background: '#5d62b5',
        },
        height: 820,
        borderRadius: 45,
        marginTop: 150,
    },
    paddingHeaderFirst: {
        color: '#fff',
        paddingTop: 150,
        paddingLeft: 150,
    },
    paddingHeaderTypography: {
        paddingTop: 3,
    },
    paddingHeaderSecond: {
        color: '#fff',
        paddingLeft: 150,
        paddingTop: theme.spacing(7),
    },
    paddingTypography: {
        color: '#fff',
        paddingLeft: 150,
        paddingRight: 150,
        paddingTop: theme.spacing(7),
    },
    imageIndex: {
        position: 'absolute',
        paddingLeft: theme.spacing(6),
    },
    imageIndexDog: {
        position: 'relative',
        paddingTop: theme.spacing(5),
    },
    button: {
        marginTop: 350,
        fontWeight: 500,
        fontSize: 17,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    marginContainerSecond: {
        marginTop: theme.spacing(35),
        color: '#5d62b5',
        marginBottom: theme.spacing(5),
    },
    marginTextTop: {
        marginTop: theme.spacing(10),
    },
    paddingTextLeft: {
        paddingLeft: theme.spacing(2),
        marginTop: theme.spacing(10),
    },
    typographyHeader: {
        color: '#fff',
        textAlign: 'center',
        marginTop: theme.spacing(30),
    },



    containerLg: {
        backgroundColor: '#5d62b5',
        '&:hover': {
            background: '#5d62b5',
        },
        height: 820,
        borderRadius: 45,
        marginTop: 100,
    },
    paddingHeaderFirstLg: {
        color: '#fff',
        paddingTop: 150,
        paddingLeft: 100,
    },
    paddingHeaderSecondLg: {
        color: '#fff',
        paddingLeft: 100,
        paddingTop: theme.spacing(7),
    },
    paddingTypographyLg: {
        color: '#fff',
        paddingLeft: 100,
        paddingRight: 150,
        paddingTop: theme.spacing(7),
    },
    imageIndexLg: {
        position: 'absolute',
        paddingLeft: theme.spacing(6),

    },
    imageIndexDogLg: {
        position: 'relative',
        paddingTop: theme.spacing(5),
        margin: 'auto',
        display: 'block',
        height: '390px',
    },
    buttonLg: {
        marginTop: 350,
        fontWeight: 500,
        fontSize: 17,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        textAlign: 'center',
    },
    typographyHeaderLg: {
        color: '#fff',
        textAlign: 'center',
        marginTop: theme.spacing(30),
    },



    containerMd: {
        backgroundColor: '#5d62b5',
        '&:hover': {
            background: '#5d62b5',
        },
        height: 700,
        borderRadius: 45,
        marginTop: 100,
    },
    paddingHeaderFirstMd: {
        color: '#fff',
        paddingTop: 150,
        paddingLeft: 50,
    },
    paddingHeaderSecondMd: {
        color: '#fff',
        paddingLeft: 50,
        paddingTop: theme.spacing(7),
    },
    paddingTypographyMd: {
        color: '#fff',
        paddingLeft: 50,
        paddingRight: 150,
        paddingTop: theme.spacing(7),
    },
    imageIndexMd: {
        position: 'absolute',
        paddingLeft: theme.spacing(6),
        height: '298px',

    },
    imageIndexDogMd: {
        position: 'relative',
        paddingTop: theme.spacing(5),
        margin: 'auto',
        display: 'block',
        height: '298px',
    },
    typographyHeaderMd: {
        color: '#fff',
        textAlign: 'center',
        marginTop: theme.spacing(25),
    },
    marginTextTopMd: {
        marginTop: theme.spacing(10),
    },
    paddingTextLeftMd: {
        marginTop: theme.spacing(10),
    },
    marginContainerSecondMd: {
        marginTop: theme.spacing(25),
        color: '#5d62b5',
        marginBottom: theme.spacing(5),
    },



    containerSm: {
        backgroundColor: '#5d62b5',
        '&:hover': {
            background: '#5d62b5',
        },
        height: 700,
        borderRadius: 45,
        marginTop: 100,
    },
    paddingHeaderFirstSm: {
        color: '#fff',
        paddingTop: 150,
        paddingLeft: 50,
    },
    paddingHeaderSecondSm: {
        color: '#fff',
        paddingLeft: 50,
        paddingTop: theme.spacing(7),
    },
    paddingTypographySm: {
        color: '#fff',
        paddingLeft: 50,
        paddingRight: 150,
        paddingTop: theme.spacing(7),
    },
    imageIndexSm: {
        position: 'absolute',
        paddingLeft: theme.spacing(6),
        height: '198px',

    },
    imageIndexDogSm: {
        position: 'relative',
        paddingTop: theme.spacing(5),
        margin: 'auto',
        display: 'block',
        height: '198px',
    },
    typographyHeaderSm: {
        color: '#fff',
        textAlign: 'center',
        marginTop: theme.spacing(20),
    },
    marginTextTopSm: {
        marginTop: theme.spacing(10),
        textAlign: 'center',
    },
    marginTextTopSmOthersSm: {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(10),
        textAlign: 'center',
    },
    paddingTextLeftSm: {
        marginTop: theme.spacing(10),
    },
    imgPositionSm: {
        margin: 'auto',
        display: 'block',
    },
    marginContainerSecondSm: {
        marginTop: theme.spacing(20),
        color: '#5d62b5',
        marginBottom: theme.spacing(5),
    },



    containerXs: {
        backgroundColor: '#5d62b5',
        '&:hover': {
            background: '#5d62b5',
        },
        height: 530,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 45,
        borderBottomLeftRadius: 45,
        marginTop: 100,
    },
    paddingHeaderFirstXs: {
        color: '#fff',
        paddingTop: theme.spacing(5),
    },
    paddingHeaderSecondXs: {
        color: '#fff',
        paddingTop: theme.spacing(7),
        textAlign: 'center',
    },
    paddingTypographyXs: {
        color: '#fff',
        paddingTop: theme.spacing(7),
        textAlign: 'center',
    },
    imageIndexXs: {
        position: 'absolute',
        paddingLeft: theme.spacing(5),
        height: '160px',
    },
    imageIndexDogXs: {
        position: 'relative',
        paddingTop: theme.spacing(4),
        margin: 'auto',
        display: 'block',
        height: '198px',
    },
    typographyHeaderXs: {
        color: '#fff',
        textAlign: 'center',
        marginTop: theme.spacing(10),
    },
    marginTextTopXs: {
        marginTop: theme.spacing(5),
        textAlign: 'center',
    },
    marginTextTopSmOthersXs: {
        marginTop: theme.spacing(5),
        textAlign: 'center',
    },
    paddingTextLeftXs: {
        marginTop: theme.spacing(10),
    },
    imgPositionXs: {
        margin: 'auto',
        display: 'block',
    },
    paddingHeaderTypographyXs: {
        paddingTop: 3,
        textAlign: 'center',
    },
    typographyXs: {
        textAlign: 'center',
    },
    marginContainerSecondXs: {
        marginTop: theme.spacing(15),
        color: '#5d62b5',
        marginBottom: theme.spacing(5),
    },
}));

function Who_We_Are() {
const classes = useStyles();

    return (
        <div className={classes.root}>

            {/*Desktop*/}
            <Hidden lgDown>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={4}>
                        <Typography component="div" className={classes.typographyHeader}>
                            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                                Premier dog boarding,
                                daycare & day spa
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={2}>
                        <ColorButton variant="contained" size="large" href="#" className={classes.button}>Записаться на прием</ColorButton>
                    </Grid>
                    <Grid item sm={8}>
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderFirst}
                            >
                                <Grid item sm={0}>
                                    <HeaderIcon fontSize="large"/>
                                </Grid>
                                <Grid item sm={2}>
                                    <Typography variant="h6" className={classes.paddingHeaderTypography}>
                                        WHO WE ARE
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderSecond}
                            >
                                <Grid item sm={9}>
                                    <Typography variant="h3">
                                        Nemo enim ipsam voluptatem quia voluptas in proident
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body1" className={classes.paddingTypography}>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                            </Typography>
                            <img src={require('../images/Blob 2.png')} className={classes.imageIndex}/>
                            <Container maxWidth="md" className={classes.imageIndexDog}>
                                <img src={require('../images/Dog.png')} />
                            </Container>
                        </Container>
                    </Grid>
                    <Grid item sm={2}>
                    </Grid>
                </Grid>
                <Container maxWidth="lg" >
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.marginContainerSecond}
                    >
                        <Grid item sm={0}>
                            <HeaderIcon fontSize="large"/>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="h6" className={classes.paddingHeaderTypography}>
                                OUR PROMISE TO YOU
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography Component="div">
                        <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                            Sed perspiciatis omnis iste natus
                        </Box>
                    </Typography>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            direction="row"
                            alignItems="flex-start"
                        >
                            <Grid item sm={1} className={classes.marginTextTop}>
                                <img src={require('../images/dog_love_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTop}>
                                <Typography variant="h6" >
                                    24/7 Love & Care
                                </Typography>
                                <Typography variant="body1">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Typography>
                            </Grid>
                            <Grid item sm={1} className={classes.paddingTextLeft}>
                                <img src={require('../images/dog_vet_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTop}>
                                <Typography variant="h6" >
                                    On-site Veterinarian
                                </Typography>
                                <Typography variant="body1">
                                    Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                                </Typography>
                            </Grid>
                            <Grid item sm={1} className={classes.paddingTextLeft}>
                                <img src={require('../images/dog_stream_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTop}>
                                <Typography variant="h6" >
                                    Live-stream Cameras
                                </Typography>
                                <Typography variant="body1">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Hidden>

            {/*lg*/}
            <Hidden only={['sm', 'xl', 'md', 'xs']}>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={4}>
                        <Typography component="div" className={classes.typographyHeader}>
                            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                                Premier dog boarding,
                                daycare & day spa
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={2}>
                        <ColorButton variant="contained" size="large" href="#" className={classes.buttonLg}>Записаться</ColorButton>
                    </Grid>
                    <Grid item sm={8}>
                        <Container maxWidth="lg" className={classes.containerLg}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderFirstLg}
                            >
                                <Grid item sm={0}>
                                    <HeaderIcon fontSize="large"/>
                                </Grid>
                                <Grid item sm={3}>
                                    <Typography variant="h6" className={classes.paddingHeaderTypography}>
                                        WHO WE ARE
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderSecondLg}
                            >
                                <Grid item sm={9}>
                                    <Typography variant="h3">
                                        Nemo enim ipsam voluptatem quia voluptas in proident
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body1" className={classes.paddingTypographyLg}>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                            </Typography>
                            <img src={require('../images/Blob 2.png')} className={classes.imageIndexLg}/>
                            <img src={require('../images/Dog.png')} className={classes.imageIndexDogLg}/>
                        </Container>
                    </Grid>
                    <Grid item sm={2}>
                    </Grid>
                </Grid>
                <Container maxWidth="lg" >
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.marginContainerSecond}
                    >
                        <Grid item sm={0}>
                            <HeaderIcon fontSize="large"/>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="h6" className={classes.paddingHeaderTypography}>
                                OUR PROMISE TO YOU
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography Component="div">
                        <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                            Sed perspiciatis omnis iste natus
                        </Box>
                    </Typography>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            direction="row"
                            alignItems="flex-start"
                        >
                            <Grid item sm={1} className={classes.marginTextTop}>
                                <img src={require('../images/dog_love_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTop}>
                                <Typography variant="h6" >
                                    24/7 Love & Care
                                </Typography>
                                <Typography variant="body1">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Typography>
                            </Grid>
                            <Grid item sm={1} className={classes.paddingTextLeft}>
                                <img src={require('../images/dog_vet_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTop}>
                                <Typography variant="h6" >
                                    On-site Veterinarian
                                </Typography>
                                <Typography variant="body1">
                                    Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                                </Typography>
                            </Grid>
                            <Grid item sm={1} className={classes.paddingTextLeft}>
                                <img src={require('../images/dog_stream_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTop}>
                                <Typography variant="h6" >
                                    Live-stream Cameras
                                </Typography>
                                <Typography variant="body1">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Hidden>

            {/*md*/}
            <Hidden only={['sm', 'xl', 'lg', 'xs']}>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={5}>
                        <Typography component="div" className={classes.typographyHeaderMd}>
                            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                                Premier dog boarding,
                                daycare & day spa
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={8}>
                        <Container maxWidth="lg" className={classes.containerMd}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderFirstMd}
                            >
                                <Grid item sm={0}>
                                    <HeaderIcon />
                                </Grid>
                                <Grid item sm={4}>
                                    <Typography variant="body1" className={classes.paddingHeaderTypography}>
                                        WHO WE ARE
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderSecondMd}
                            >
                                <Grid item sm={9}>
                                    <Typography variant="h4">
                                        Nemo enim ipsam voluptatem quia voluptas in proident
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" className={classes.paddingTypographyMd}>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                            </Typography>
                            <img src={require('../images/Blob 2.png')} className={classes.imageIndexMd}/>
                            <img src={require('../images/Dog.png')} className={classes.imageIndexDogMd}/>
                        </Container>
                    </Grid>
                </Grid>
                <Container maxWidth="lg" >
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.marginContainerSecondMd}
                    >
                        <Grid item sm={0}>
                            <HeaderIcon fontSize="large"/>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="h6" className={classes.paddingHeaderTypography}>
                                OUR PROMISE TO YOU
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography Component="div">
                        <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                            Sed perspiciatis omnis iste natus
                        </Box>
                    </Typography>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            direction="row"
                            alignItems="flex-start"
                        >
                            <Grid item sm={1} className={classes.marginTextTopMd}>
                                <img src={require('../images/dog_love_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTopMd}>
                                <Typography variant="h6" >
                                    24/7 Love & Care
                                </Typography>
                                <Typography variant="body1">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Typography>
                            </Grid>
                            <Grid item sm={1} className={classes.paddingTextLeftMd}>
                                <img src={require('../images/dog_vet_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTopMd}>
                                <Typography variant="h6" >
                                    On-site Veterinarian
                                </Typography>
                                <Typography variant="body1">
                                    Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                                </Typography>
                            </Grid>
                            <Grid item sm={1} className={classes.paddingTextLeftMd}>
                                <img src={require('../images/dog_stream_24x.png')} />
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTopMd}>
                                <Typography variant="h6" >
                                    Live-stream Cameras
                                </Typography>
                                <Typography variant="body1">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Hidden>

            {/*sm*/}
            <Hidden only={['md', 'xl', 'lg', 'xs']}>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={5}>
                        <Typography component="div" className={classes.typographyHeaderSm}>
                            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                                Premier dog boarding,
                                daycare & day spa
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={8}>
                        <Container maxWidth="lg" className={classes.containerSm}>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderFirstSm}
                            >
                                <Grid item sm={0}>
                                    <HeaderIcon />
                                </Grid>
                                <Grid item sm={4}>
                                    <Typography variant="body1" className={classes.paddingHeaderTypography}>
                                        WHO WE ARE
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderSecondSm}
                            >
                                <Grid item sm={9}>
                                    <Typography variant="h4">
                                        Nemo enim ipsam voluptatem quia voluptas in proident
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" className={classes.paddingTypographySm}>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                            </Typography>
                            <img src={require('../images/Blob 2.png')} className={classes.imageIndexSm}/>
                            <img src={require('../images/Dog.png')} className={classes.imageIndexDogSm}/>
                        </Container>
                    </Grid>
                </Grid>
                <Container maxWidth="lg" >
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.marginContainerSecondSm}
                    >
                        <Grid item sm={0}>
                            <HeaderIcon fontSize=""/>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="body1" className={classes.paddingHeaderTypography}>
                                OUR PROMISE TO YOU
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography Component="div">
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
                            Sed perspiciatis omnis iste natus
                        </Box>
                    </Typography>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            justify="flex-start"
                            direction="row"
                            alignItems="flex-start"
                        >
                            <Grid item sm={3} className={classes.marginTextTopSm}>
                                <img src={require('../images/dog_love_24x.png')} className={classes.imgPositionSm} />
                                <Typography variant="h6" >
                                    24/7 Love & Care
                                </Typography>
                                <Typography variant="body1">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Typography>
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTopSmOthersSm}>
                                <img src={require('../images/dog_vet_24x.png')} className={classes.imgPositionSm} />
                                <Typography variant="h6" >
                                    On-site Veterinarian
                                </Typography>
                                <Typography variant="body1">
                                    Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                                </Typography>
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTopSmOthersSm}>
                                <img src={require('../images/dog_stream_24x.png')} className={classes.imgPositionSm} />
                                <Typography variant="h6" >
                                    Live-stream Cameras
                                </Typography>
                                <Typography variant="body1">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Hidden>

            {/*xs*/}
            <Hidden only={['md', 'xl', 'lg', 'sm']}>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={5}>
                        <Typography component="div" className={classes.typographyHeaderXs}>
                            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                                Premier dog boarding,
                                daycare & day spa
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item sm={8}>
                        <Container maxWidth="lg" className={classes.containerXs}>
                            <Grid
                                container
                                justify="center"
                                alignItems="flex-start"
                                className={classes.paddingHeaderFirstXs}
                            >
                                <Grid item sm={0}>
                                    <HeaderIcon />
                                </Grid>
                                <Grid item sm={4}>
                                    <Typography variant="body1" className={classes.paddingHeaderTypographyXs}>
                                        WHO WE ARE
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.paddingHeaderSecondXs}
                            >
                                <Grid item sm={9}>
                                    <Typography variant="h4">
                                        Nemo enim ipsam voluptatem quia voluptas in proident
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" className={classes.paddingTypographyXs}>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                            </Typography>
                            <img src={require('../images/Blob 2.png')} className={classes.imageIndexXs}/>
                            <img src={require('../images/Dog.png')} className={classes.imageIndexDogXs}/>
                        </Container>
                    </Grid>
                </Grid>
                <Container maxWidth="lg" >
                    <Grid
                        container
                        justify="center"
                        alignItems="flex-start"
                        className={classes.marginContainerSecondXs}
                    >
                        <Grid item sm={0}>
                            <HeaderIcon fontSize=""/>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography component="div" className={classes.paddingHeaderTypographyXs}>
                                <Box fontSize="body1.fontSize">
                                    OUR PROMISE TO YOU
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography Component="div">
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographyXs}>
                            Sed perspiciatis omnis iste natus
                        </Box>
                    </Typography>
                    <Container maxWidth="">
                        <Grid
                            container
                            justify="flex-start"
                            direction="row"
                            alignItems="flex-start"
                        >
                            <Grid item sm={3} className={classes.marginTextTopXs}>
                                <img src={require('../images/dog_love_24x.png')} className={classes.imgPositionXs} />
                                <Typography variant="h6" >
                                    24/7 Love & Care
                                </Typography>
                                <Typography variant="body1">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.
                                </Typography>
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTopSmOthersXs}>
                                <img src={require('../images/dog_vet_24x.png')} className={classes.imgPositionXs} />
                                <Typography variant="h6" >
                                    On-site Veterinarian
                                </Typography>
                                <Typography variant="body1">
                                    Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                                </Typography>
                            </Grid>
                            <Grid item sm={3} className={classes.marginTextTopSmOthersXs}>
                                <img src={require('../images/dog_stream_24x.png')} className={classes.imgPositionXs} />
                                <Typography variant="h6" >
                                    Live-stream Cameras
                                </Typography>
                                <Typography variant="body1">
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Hidden>
        </div>
    );
}

export default withWidth()(Who_We_Are);