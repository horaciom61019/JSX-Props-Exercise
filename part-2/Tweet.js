const Tweet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>@{props.username}</h2>
            <h4>{props.date}</h4>
            <p>{props.msg}</p>
        </div>
    )
};