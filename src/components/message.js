const message = (props) => {
    return <div className={`wrp ${props.messageObj.author}`}>
        <p className="user">{props.messageObj.author}</p>
        <p className="text">{props.messageObj.text}</p>
    </div>
}

export default message