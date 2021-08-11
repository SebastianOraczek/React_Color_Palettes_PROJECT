import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "@material-ui/core/Button"
import arrayMove from 'array-move';

import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav"
import ColorPickerForm from './ColorPickerForm';
import seedColors from "./seedColors";

import styles from "./styles/NewFormStyles";

class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    };

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            colors: seedColors[0].colors,
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.deleteColor = this.deleteColor.bind(this);
        this.clearColors = this.clearColors.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
    };

    handleDrawerOpen() {
        this.setState({ open: true });
    };

    handleDrawerClose() {
        this.setState({ open: false });
    };

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleSubmit(newPalette) {
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
        newPalette.colors = this.state.colors

        this.props.savePalette(newPalette);
        this.props.history.push("/");
    };

    addNewColor(newColor) {
        this.setState(old => ({
            colors: [...old.colors, newColor], newColorName: ""
        }));
    };

    deleteColor(colorName) {
        this.setState(old => ({
            colors: old.colors.filter(color => color.name !== colorName)
        }));
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    addRandomColor() {
        const allColors = this.props.palettes.map(palette => palette.colors).flat();
        let randNum;
        let randColor;
        let isDuplicateColor = true;

        while (isDuplicateColor) {
            randNum = Math.floor(Math.random() * allColors.length);
            randColor = allColors[randNum];
            isDuplicateColor = this.state.colors.some(color => color.name === randColor.name);
        };

        this.setState(old => ({
            colors: [...old.colors, randColor]
        }));
    };

    clearColors() {
        this.setState({ colors: [] });
    };

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const isPaletteFull = colors.length === maxColors;

        return (
            <div className={classes.root}>
                <PaletteFormNav
                    open={open}
                    palettes={palettes}
                    handleSubmit={this.handleSubmit}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{ paper: classes.drawerPaper }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.container}>
                        <Typography variant="h4" gutterBottom>Design Your Palette</Typography>
                        <div className={classes.buttons}>
                            <Button variant="contained" color="secondary"
                                onClick={this.clearColors}
                                className={classes.button}
                            >
                                Clear Palette
                            </Button>
                            <Button variant="contained" color="primary"
                                onClick={this.addRandomColor}
                                disabled={isPaletteFull}
                                className={classes.button}
                            >
                                Random Color
                            </Button>
                        </div>
                        <ColorPickerForm
                            isPaletteFull={isPaletteFull}
                            addNewColor={this.addNewColor}
                            colors={colors}
                        />
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <DraggableColorList
                        colors={colors}
                        deleteColor={this.deleteColor}
                        axis="xy"
                        onSortEnd={this.onSortEnd}
                    />
                </main>
            </div>
        );
    }
}

NewPaletteForm.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);