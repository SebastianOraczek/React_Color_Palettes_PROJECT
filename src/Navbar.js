import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    };

    handleFormatChange(evt) {
        this.setState({ format: evt.target.value, open: true });
        this.props.handleChange(evt.target.value);
    };

    closeSnackbar() {
        this.setState({ open: false })
    };

    render() {
        const { level, changeLevel, isAllColors, classes } = this.props;
        const { format, open } = this.state;

        return (
            <header className={classes.navbar}>
                <div className={classes.logo}>
                    <Link to="/">reactlogopicker</Link>
                </div>
                {isAllColors && (
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">rgb - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={1500}
                    message={<span>Format Changed To {format.toUpperCase()}!</span>}
                    onClose={this.closeSnackbar}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackbar}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </header>
        );
    }
}

export default withStyles(styles)(Navbar);