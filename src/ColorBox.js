import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';

import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    };

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1300);
        });
    };

    render() {
        const { name, background, paletteId, id, showingFullPalette, classes } = this.props;
        const { copied } = this.state;

        return (
            <div style={{ background }} className={classes.colorBox}>
                <div
                    style={{ background }}
                    className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
                />
                <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`}>
                    <h1>COPIED!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                        <button className={classes.copyButton}>COPY</button>
                    </CopyToClipboard>
                </div>
                {showingFullPalette && (
                    <Link to={`/palette/${paletteId}/${id}`}>
                        <span className={classes.seeMore}>MORE</span>
                    </Link>
                )}
            </div >
        );
    }
}

export default withStyles(styles)(ColorBox);