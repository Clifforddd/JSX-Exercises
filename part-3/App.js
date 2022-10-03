const App = () => {
    return (
        <div>
            <Person name="Jason"
            age={8}
            hobbies={["hiking", "spa"]}/>

            <Person name="Hagaoihewog"
            age={18}
            hobbies={["fishing", "surfing", "walk around"]}/>

            <Person name="Clifford Wong"
            age={28}
            hobbies={["beaches", "reading", "coding"]}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));