import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from "./styles/PaletteFooterStyles";

class PaletteFooter extends Component {
    render() {
        const { paletteName, emoji, classes } = this.props;

        return (
            <footer className={classes.footer}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </footer>
        );
    };
};

export default withStyles(styles)(PaletteFooter);