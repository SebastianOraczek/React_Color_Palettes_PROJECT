import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

import styles from "./styles/DraggableColorBoxStyles";

class DraggableColorBox extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleDelete() {
        this.props.deleteColor(this.props.name);
    };

    render() {
        const { color, name, classes } = this.props;

        return (
            <div
                className={classes.root}
                style={{ background: color }}
            >
                <div className={classes.boxContent}>
                    <span>{name}</span>
                    <DeleteIcon className={classes.deleteIcon}
                        onClick={this.handleDelete}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SortableElement(DraggableColorBox));
