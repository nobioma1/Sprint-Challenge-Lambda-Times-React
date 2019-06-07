## What are PropTypes used for?
- PropTypes are used to ensure that a component is receiving the right type of props. It's important to type check our data to give more context to runtime errors when it pertains to types, and saves developers the stress in debugging when an error is caused due to a wrong type being passed into a component.

## Describe a life-cycle event in React?
- Life-Cycle events are methods that are invoked at a particular time during the runtime of a react application. Examples of life-cycles are: ComponentDidMount, ComponentWillUnmount, ComponentDidUpdate, ComponentWillUpdate.
    - ComponentDidMount: When a react application is run, initial data for the component is defined on the constructor of the component, then the render method is invoked. After the component has been mounted on the DOM when render is complete then componentDidMount is invoked.

## Explain the details of a Higher Order Component?
- Higher Order Component is a function that takes a component as an argument and returns a new component. Components that should share the same logic are being passed as an argument to the HOC instead of repeating the logic on each component. It is basically for reusing logic on components.

## What are three different ways to style components in React?
  - Using Styled-Components: This makes the component complete and standalone and could be taken out and reused where ever. It also makes the styling of the component to be data-driven, changes to styling occurring based on component props.
  - Inline-Style
  - CSS Stylesheet