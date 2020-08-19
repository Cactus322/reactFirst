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
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    marginHeaderGrid: {
        marginTop: theme.spacing(5),
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
        marginTop: theme.spacing(1),
        color: '#f2726f',
    },
    paperFontBodyStyle: {
        padding: theme.spacing(5),
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
    },
    typography: {
        marginTop: theme.spacing(3),
    },
    paddingPhoto: {
        paddingLeft: theme.spacing(4),
        paddingBottom: theme.spacing(5),
    },


    marginPaperMd: {
        marginTop: theme.spacing(7),
        borderRadius: 15,
        width: 270,
    },
    paddingPhotoMd: {
        paddingLeft: theme.spacing(4),
        paddingBottom: theme.spacing(5),
    },
    paddingPhotoSecondMd: {
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(5),
    },
    paperFontHeaderStyleMd: {
        marginTop: theme.spacing(4),
        color: '#f2726f',
    },


    marginPaperSm: {
        marginTop: theme.spacing(7),
        borderRadius: 15,
        width: 270,
    },
    paddingPhotoSm: {
        paddingLeft: theme.spacing(4),
        paddingBottom: theme.spacing(5),
    },
    paddingPhotoSecondSm: {
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(5),
    },
    paperFontHeaderStyleSm: {
        marginTop: theme.spacing(4),
        color: '#f2726f',
    },
    typographySm: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(7),
    },
    marginHeaderGridSm: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(7),
        color: '#5d62b5',
    },
}));

function Customers() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Container maxWidth="lg">

                {/*lg, xl*/}
                <Hidden mdDown>
                    <Grid
                        container
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Grid item sm={4}>
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
                                        OUR CUSTOMERS
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography component="div">
                                <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                    Illum qui dolorem eum quo voluptas ut distinctio
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.marginGridItem}>
                            <Paper elevation={10} className={classes.marginPaper}>
                                <Typography variant="body1" className={classes.paperFontBodyStyle}>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”
                                </Typography>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item sm={4} className={classes.paddingPhoto}>
                                        <img src={require('../images/photo1.png')} />
                                    </Grid>
                                    <Grid item sm={8}>
                                        <Typography component="div">
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                                Cullen Bohannon
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={3} className={classes.marginGridItem}>
                            <Paper elevation={10} className={classes.marginPaper}>
                                <Typography variant="body1" className={classes.paperFontBodyStyle}>
                                    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ipsam voluptatem aspernatur.”
                                </Typography>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item sm={4} className={classes.paddingPhoto}>
                                        <img src={require('../images/photo2.png')} />
                                    </Grid>
                                    <Grid item sm={8}>
                                        <Typography component="div">
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                                Jennifer Thomas
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Hidden>

                {/*md*/}
                <Hidden only={['sm', 'xl', 'lg', 'xs']}>
                    <Grid
                        container
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Grid item sm={4}>
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
                                        OUR CUSTOMERS
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography component="div">
                                <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                    Illum qui dolorem eum quo voluptas ut distinctio
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.marginGridItem}>
                            <Paper elevation={10} className={classes.marginPaperMd}>
                                <Typography variant="body1" className={classes.paperFontBodyStyle}>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”
                                </Typography>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item sm={4} className={classes.paddingPhotoMd}>
                                        <img src={require('../images/photo1.png')} />
                                    </Grid>
                                    <Grid item sm={8}>
                                        <Typography component="div">
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                                Cullen Bohannon
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={3} className={classes.marginGridItem}>
                            <Paper elevation={10} className={classes.marginPaperMd}>
                                <Typography variant="body1" className={classes.paperFontBodyStyle}>
                                    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ipsam voluptatem aspernatur.”
                                </Typography>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item sm={4} className={classes.paddingPhotoSecondMd}>
                                        <img src={require('../images/photo2.png')} />
                                    </Grid>
                                    <Grid item sm={8}>
                                        <Typography component="div">
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyleMd}>
                                                Jennifer Thomas
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Hidden>

                {/*sm*/}
                <Hidden only={['md', 'xl', 'lg', 'xs']}>
                    <Grid
                        container
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.marginHeaderGridSm}
                    >
                        <Grid item sm={0}>
                            <HeaderIcon fontSize=""/>
                        </Grid>
                        <Grid item sm={10}>
                            <Typography variant="body1" className={classes.marginHeaderTypography}>
                                OUR CUSTOMERS
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography component="div">
                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.typographySm}>
                            Illum qui dolorem eum quo voluptas ut distinctio
                        </Box>
                    </Typography>
                    <Grid
                        container
                        justify="space-around"
                        alignItems="flex-start"
                    >

                        <Grid item sm={4} className={classes.marginGridItem}>
                            <Paper elevation={10} className={classes.marginPaperMd}>
                                <Typography variant="body1" className={classes.paperFontBodyStyle}>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”
                                </Typography>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item sm={4} className={classes.paddingPhotoMd}>
                                        <img src={require('../images/photo1.png')} />
                                    </Grid>
                                    <Grid item sm={8}>
                                        <Typography component="div">
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyle}>
                                                Cullen Bohannon
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={4} className={classes.marginGridItem}>
                            <Paper elevation={10} className={classes.marginPaperMd}>
                                <Typography variant="body1" className={classes.paperFontBodyStyle}>
                                    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ipsam voluptatem aspernatur.”
                                </Typography>
                                <Grid
                                    container
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item sm={4} className={classes.paddingPhotoSecondMd}>
                                        <img src={require('../images/photo2.png')} />
                                    </Grid>
                                    <Grid item sm={8}>
                                        <Typography component="div">
                                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.paperFontHeaderStyleMd}>
                                                Jennifer Thomas
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Hidden>
            </Container>
        </div>
    )
}

export default Customers;