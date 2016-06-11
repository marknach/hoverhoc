# HoverHOC
Used for dynamic prop switching for a component on hover

# Usage

`HoverHOC` takes two sets of props, one supplied to the child component on hover, and another for the default props 

(contrived example)
```jsx
const Label = React.createClass({
    render() {
        return (
            <div {...this.props}>
                {this.props.children}{this.props.suffix}
            </div>
        );
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
```
