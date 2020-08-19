import React from "react";
import {Container, Typography, Box, Grid, Paper, Hidden} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    paper: {
        background: '#5d62b5',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        borderRadius: 30,
    },
    typographyHeader: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: theme.spacing(7),
    },
    paddingTextField: {
        paddingTop: theme.spacing(5),
    },
    button: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(7),
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },
    textHeader: {
        marginTop: theme.spacing(27),
        textAlign: 'center',
        color: '#fff',
    },
    typography: {
        marginTop: theme.spacing(3),
        textAlign: 'center',
        color: '#fff',
    },


    textHeaderSm: {
        marginTop: theme.spacing(34),
        textAlign: 'center',
        color: '#fff',
    },
    typographySm: {
        marginTop: theme.spacing(3),
        textAlign: 'center',
        color: '#fff',
    },


    textHeaderXs: {
        marginTop: theme.spacing(4),
        textAlign: 'center',
        color: '#fff',
    },
    typographyXs: {
        marginTop: theme.spacing(3),
        textAlign: 'center',
        color: '#fff',
    },
    typographySecondXs: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(11),
        textAlign: 'center',
        color: '#fff',
    },
}));

function Appointment() {
    const classes = useStyles();
    const [name, setName] = React.useState();

    const handleChange = event => {
        setName(event.target.value);
    };

    return (
        <div className="AppointmentBackgroundImage">
            <div className={classes.root}>
                <Container maxWidth="lg">

                    {/*md, lg, xl*/}
                    <Hidden smDown>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="row"
                        >
                            <Grid item sm={6}>
                                <Paper elevation={7} className={classes.paper}>
                                    <Typography component="div" className={classes.typographyHeader}>
                                        <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
                                            Make an appointment
                                        </Box>
                                    </Typography>
                                    <Grid
                                        container
                                        justify="space-evenly"
                                        alignItems="flex-start"
                                        direction="row"
                                    >
                                        <Grid item sm={1}>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Name"
                                                    value={name}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Email"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={1}>
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        container
                                        justify="space-evenly"
                                        alignItems="flex-start"
                                        direction="row"
                                    >
                                        <Grid item sm={1}>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Phone Number"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Select Service"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={1}>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justify="space-evenly"
                                        alignItems="flex-start"
                                        direction="row"
                                    >
                                        <Grid item sm={1}>
                                        </Grid>
                                        <Grid item sm={9}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Tell us about your puppers include his/her name"
                                                    multiline
                                                    rows="4"
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={1}>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justify="space-around"
                                        alignItems="flex-start"
                                    >
                                        <ColorButton variant="contained" size="large" href="#" className={classes.button}>Узнать больше</ColorButton>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item sm={1}>
                            </Grid>
                            <Grid item sm={5}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.textHeader}>
                                        Maxime placeat facere possimus omnis
                                    </Box>
                                    <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                        5,700+
                                    </Box>
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typography}>
                                        customers served
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Hidden>

                    {/*sm*/}
                    <Hidden only={['md', 'xl', 'lg', 'xs']}>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="row"
                        >
                            <Grid item sm={6}>
                                <Paper elevation={7} className={classes.paper}>
                                    <Typography component="div" className={classes.typographyHeader}>
                                        <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                                            Make an appointment
                                        </Box>
                                    </Typography>
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                        direction="column"
                                    >
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Name"
                                                    value={name}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Email"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                        direction="column"
                                    >
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Phone Number"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Select Service"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                        direction="row"
                                    >
                                        <Grid item sm={9}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Tell us about your puppers include his/her name"
                                                    multiline
                                                    rows="4"
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justify="space-around"
                                        alignItems="flex-start"
                                    >
                                        <ColorButton variant="contained" size="large" href="#" className={classes.button}>Узнать больше</ColorButton>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item sm={1}>
                            </Grid>
                            <Grid item sm={5}>
                                <Typography component="div">
                                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" className={classes.textHeaderSm}>
                                        Maxime placeat facere possimus omnis
                                    </Box>
                                    <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" className={classes.typographySm}>
                                        5,700+
                                    </Box>
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.typographySm}>
                                        customers served
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Hidden>

                    {/*xs*/}
                    <Hidden only={['md', 'xl', 'lg', 'sm']}>
                        <Grid
                            container
                            justify="flex-start"
                            alignItems="flex-start"
                            direction="row"
                        >
                            <Grid item sm={6}>
                                <Paper elevation={7} className={classes.paper}>
                                    <Typography component="div" className={classes.typographyHeader}>
                                        <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">
                                            Make an appointment
                                        </Box>
                                    </Typography>
                                    <Grid
                                        container
                                        justify="space-evenly"
                                        alignItems="flex-start"
                                        direction="row"
                                    >
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Name"
                                                    value={name}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Email"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        container
                                        justify="space-evenly"
                                        alignItems="flex-start"
                                        direction="row"
                                    >
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Phone Number"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item sm={7}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-name"
                                                    label="Select Service"
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                        direction="row"
                                    >
                                        <Grid item xs={8}>
                                            <div className={classes.paddingTextField}>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Tell us about your puppers include his/her name"
                                                    multiline
                                                    rows="4"
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justify="space-around"
                                        alignItems="flex-start"
                                    >
                                        <ColorButton variant="contained" size="large" href="#" className={classes.button}>Узнать больше</ColorButton>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item sm={1}>
                            </Grid>
                            <Grid item sm={5}>
                                <Typography component="div">
                                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" className={classes.textHeaderXs}>
                                        Maxime placeat facere possimus omnis
                                    </Box>
                                    <Box fontSize="h2.fontSize" fontWeight="fontWeightBold" className={classes.typographyXs}>
                                        5,700+
                                    </Box>
                                    <Box fontSize="h6.fontSize" fontWeight="fontWeightBold" className={classes.typographySecondXs}>
                                        customers served
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Container>
            </div>
        </div>
    )
}

export default Appointment;