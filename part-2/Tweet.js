const Tweet = (props) => {
    return (
    <div className="tweet">
        <p>Username: {props.username}</p>
        <h4>Tweeter name: {props.name}</h4>
        <h3>Tweet: {props.tweets}</h3>
        <h5>Time: {props.date}</h5>
    </div>
    );
};