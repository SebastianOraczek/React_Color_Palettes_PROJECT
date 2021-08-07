import React, { Component } from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';

class DraggableColorList extends Component {
    render() {
        const { colors, deleteColor } = this.props;

        return (
            <div style={{ height: "100%" }}>
                {colors.map((color, i) => (
                    <DraggableColorBox
                        index={i}
                        color={color.color}
                        name={color.name}
                        key={color.name}
                        deleteColor={deleteColor}
                    />
                ))}
            </div>
        );
    }
}

export default SortableContainer(DraggableColorList);