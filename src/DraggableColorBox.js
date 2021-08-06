import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        height: "25%",
        display: "inline-block",
        position: "relative",
        width: "20%",
        margin: "0 auto",
        marginBottom: "-4px",
    }
};

class DraggableColorBox extends Component {
    render() {
        const { color, name, classes } = this.props;

        return (
            <div
                className={classes.root}
                style={{ background: color }}
            >
                {name}
            </div>
        );
    }
}

export default withStyles(styles)(DraggableColorBox);