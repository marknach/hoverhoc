import React from 'react';

const HoverHOC = React.createClass({
    getInitialState() {
        return {hovered: false};
    },
    handleHover(isHovered) {
        this.setState({hovered: isHovered});
    },
    render() {
        const props = Object.assign({}, this.props[this.state.hovered ? 'hovered' : 'default'], {
            onMouseEnter: () => { this.handleHover(true) },
            onMouseLeave: () => { this.handleHover(false) }
        });

        return React.cloneElement(this.props.children, props);
    }
});

export default HoverHOC;
