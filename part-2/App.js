const App = () => {
    return (
        <div>
            <Tweet 
            username="JasonH"
            name="Jack Fruit"
            tweets="This is the first tweet I made"
            date={new Date().toDateString()}
            />

            <Tweet 
            username="SGdsaf"
            name="West"
            tweets="Hello World!"
            date={new Date().toDateString()}
            />

            <Tweet 
            username="qhhjqjq"
            name="Sophia"
            tweets="Yeahhhh!!!"
            date={new Date().toDateString()}
            />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));