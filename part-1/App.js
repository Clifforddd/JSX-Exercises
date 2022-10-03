const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="yourName"/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));