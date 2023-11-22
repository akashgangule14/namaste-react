//JSX - HTML like or XML - like syntax
const Title = () => (
    <h1 className="head" tabIndex="6">
        Namaste React using JSX!
    </h1>
);

//React Functional Component
// Component Composition 
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        {
            //All Above are the same
        }
        <h1 className="heading">Namaste Functional Component!</h1>
    </div>
);

/*
const HeadingComponent = () => {
    return <h1 className="heading">Namaste Functional Component!</h1>;
}
*/