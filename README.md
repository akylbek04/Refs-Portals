<h2>Refs & Portals</h2>
<ul>
    <li>useRef</li>
    <li>useImperativeHandle</li>
    <li>forwardRef</li>
    <li>createPortal</li>
</ul>
<main>
    <div>
        <h2><strong>useRef</strong> - </h2>
        <p>used to create a mutable object ({ current: ... }) that persists across renders.</p>
        <p>used to get references to DOM elements. The ref attribute can be attached to a JSX element, and the current property of the ref object will hold a reference to the corresponding DOM element.</p>
    </div>
    <div>
        <h2><strong>useImperativeHandle</strong> - </h2>
        <p> allows you to selectively expose functionality or values from a child component, providing a cleaner and more controlled interface to the parent component.</p>
        <code>import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component
const ChildComponent = forwardRef((props, ref) => {
// Create a ref to hold the imperatively exposed functions or values
const internalRef = useRef();

// Function to be exposed
const doSomething = () => {
console.log('Doing something...');
};

// Use useImperativeHandle to expose specific functions or values
useImperativeHandle(ref, () => ({
doSomething,
// You can expose other values as needed
someValue: 'Hello from child!',
}));

return <div>Child Component</div>;
});

// Parent component
const ParentComponent = () => {
// Create a ref to hold the child component's instance
const childRef = useRef();

const handleClick = () => {
// Access the imperatively exposed function
childRef.current.doSomething();
};

return (
<div>
<ChildComponent ref={childRef} />
<button onClick={handleClick}>Invoke doSomething</button>
</div>
);
};

export default ParentComponent;
</code>
</div>
<div>
<h2><strong>forwardRef</strong> - </h2>
<p>used for forwarding refs from a child component to a DOM element or another component. It allows a component to accept a ref prop and then forward that ref to a child element in the component.</p>
<code>import React, { forwardRef } from 'react';

// Child component
const ChildComponent = forwardRef((props, ref) => {
return <input ref={ref} />;
});

// Parent component
const ParentComponent = () => {
// Create a ref to hold the child component's instance
const inputRef = React.createRef();

const focusInput = () => {
// Access the child component's DOM element using the ref
inputRef.current.focus();
};

return (

<div>
<ChildComponent ref={inputRef} />
<button onClick={focusInput}>Focus Input</button>
</div>
);
};

export default ParentComponent;
</code>

</div>
<div>
<h2><strong>createPortal</strong> - </h2>
<p>In React, portals provide a way to render a component's children into a DOM element that exists outside the hierarchy of the parent component. This is useful for scenarios where you need to render content at a different place in the DOM, such as a modal dialog or a tooltip.</p>
<code>import React from 'react';
import ReactDOM from 'react-dom';

// PortalComponent is a child component that renders a portal
class PortalComponent extends React.Component {
constructor(props) {
super(props);
// Create a div element that will serve as the portal container
this.portalContainer = document.createElement('div');
document.body.appendChild(this.portalContainer);
}

componentWillUnmount() {
// Cleanup: remove the portal container from the DOM when the component is unmounted
document.body.removeChild(this.portalContainer);
}

render() {
// Use ReactDOM.createPortal to render children into the portal container
return ReactDOM.createPortal(

<div className="portal-content">
{this.props.children}
</div>,
this.portalContainer
);
}
}

// Parent component that uses PortalComponent
function App() {
return (

<div>
<h1>Parent Component</h1>
<PortalComponent>
<p>This content is rendered through a portal!</p>
</PortalComponent>
</div>
);
}

ReactDOM.render(<App />, document.getElementById('root'));
</code>

</div>

</main>
