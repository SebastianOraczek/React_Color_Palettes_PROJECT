import React, { Component } from 'react';
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newColorName: "",
            currentColor: "teal",
        };
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddNewColor = this.handleAddNewColor.bind(this);
    };

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', value =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    };

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleAddNewColor() {
        const newColor = { color: this.state.currentColor, name: this.state.newColorName }
        this.props.addNewColor(newColor);
        this.setState({ newColorName: "" });
    };

    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    };

    render() {
        const { isPaletteFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;

        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm
                    onSubmit={this.handleAddNewColor}
                    instantValidate={false}
                >
                    <TextValidator
                        value={newColorName}
                        className={classes.colorInput}
                        name="newColorName"
                        margin="normal"
                        label="Color Name"
                        onChange={this.handleChange}
                        validators={['required', 'isColorNameUnique', "isColorUnique"]}
                        errorMessages={['Enter Color Name', 'Color name must be unique', "Color already used"]}
                    />
                    <Button variant="contained" color="primary"
                        style={{ backgroundColor: !isPaletteFull ? currentColor : "lightgrey" }}
                        type="submit"
                        disabled={isPaletteFull}
                        className={classes.addColor}
                    >
                        {!isPaletteFull ? "Add Colors" : "Palette Full"}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);