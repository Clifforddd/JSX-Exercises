const Person = (props) => {
    let personAge = props.age >= 18 ? "please go vote!" : "you must be 18.";
    let hobbies = props.hobbies.map(s => <li>{s}</li>);
    
    return (<div>
        <p>Learn some information about this person:</p>
        <ul>
            <li>Name: {props.name.slice(0,6)} </li>
            <li>Age: {props.age}</li>
            <li>Hobbies:
            <ul>
                <li>{hobbies}</li>
            </ul>
            </li>
        </ul>
        <h3>{personAge}</h3>
    </div>
    ); 
};