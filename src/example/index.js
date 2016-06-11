import React from 'react';
import {render} from 'react-dom';
import HoverHOC from '../HoverHOC';

const Label = React.createClass({
    render() {
        const style = {padding: 10, cursor: 'default', border: '1px solid black'};

        return <div style={style} {...this.props}>{this.props.children}{this.props.suffix}</div>;
    }
});

render(
    <HoverHOC
        default={{}}
        hovered={{suffix: '!'}}
    >
        <Label>Hello, World</Label>
    </HoverHOC>,
    document.getElementById('root')
);
