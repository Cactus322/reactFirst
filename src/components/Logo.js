import React from "react";
import {Container, Grid, Box} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {withStyles, makeStyles, withWidth} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import PropTypes from 'prop-types';

function TimeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </SvgIcon>
    )
}

function CallIcon(props) {
    return (
        <SvgIcon {...props}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3ZM6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02Z" />
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
    padding: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    paddingLogoIcon: {
        paddingRight: theme.spacing(1),
        color: '#f2726f',
    },
    button: {
        fontWeight: 500,
        fontSize: 17,
        borderRadius: 10,
    },
    marginMobile: {
        marginTop: theme.spacing(2),
    },
}));


function Logo(props) {
    const classes = useStyles();
    const {width} = props;

    return (
        <div className={classes.padding} >
            <Container maxWidth="lg">
                <Hidden mdDown>
                    <Grid
                        container={true}
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <Grid item sm={4}>
                            <img src={require("../images/Logo-Placeholder-5.svg")} href="#home"/>
                        </Grid>
                        <Grid item sm={0}>
                            <TimeIcon fontSize="default" className={classes.paddingLogoIcon} />
                        </Grid>
                        <Grid item sm={2}>
                            <Typography variant="body1">
                                Часы работы:
                                <br/>Пнд-Сб 9:00-18:00
                            </Typography>
                        </Grid>
                        <Grid item sm={0}>
                            <CallIcon fontSize="default" className={classes.paddingLogoIcon} />
                        </Grid>
                        <Grid item sm={2}>
                            <Typography variant="body1">
                                ПОЗВОНИТЕ НАМ
                                <br/>+7(911)000-00-00
                            </Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <ColorButton variant="contained" size="large" href="#" fullWidth={true} className={classes.button}>Записаться на прием</ColorButton>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden only={['sm', 'xs', 'lg', 'xl']}>
                    <Grid
                        container={true}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item sm={3}>
                                <img src={require("../images/Logo-Placeholder-5.svg")} href="#home"/>
                        </Grid>
                        <Grid item sm={0}>
                            <TimeIcon fontSize="default" className={classes.paddingLogoIcon} />
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="body1">
                                Часы работы:
                                <br/>Пнд-Сб 9:00-18:00
                            </Typography>
                        </Grid>
                        <Grid item sm={0}>
                            <CallIcon fontSize="default" className={classes.paddingLogoIcon} />
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="body1">
                                ПОЗВОНИТЕ НАМ
                                <br/>+7(911)000-00-00
                            </Typography>
                        </Grid>
                        <Grid item sm={2}>
                            <ColorButton variant="contained" size="large" href="#" fullWidth={true} className={classes.button}>Записаться</ColorButton>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden only={['md', 'xs', 'lg', 'xl']}>
                    <Grid
                        container={true}
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <Grid item sm={4}>
                            <img src={require("../images/Logo-Placeholder-5.svg")} href="#home"/>
                        </Grid>
                        <Grid item sm={0}>
                            <TimeIcon fontSize="default" className={classes.paddingLogoIcon} />
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="body1">
                                Часы работы:
                                <br/>Пнд-Сб 9:00-18:00
                            </Typography>
                        </Grid>
                        <Grid item sm={0}>
                            <CallIcon fontSize="default" className={classes.paddingLogoIcon} />
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="body1">
                                ПОЗВОНИТЕ НАМ
                                <br/>+7(911)000-00-00
                            </Typography>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <img src={require("../images/Logo-Placeholder-5.svg")} href="#home"/>
                </Hidden>
            </Container>
        </div>
    );
}

Logo.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Logo);