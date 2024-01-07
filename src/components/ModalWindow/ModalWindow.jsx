import "./ModalWindow.css";

export default function ModalWindow({ call, onDestroy, currentUserId, users, onDeleteUserFromData }) {
    if (!call) {
        return null;
    }

    const closeWindow = (e) => {
        if (e.target.className === 'modal') {
            onDestroy();
        }
    }

    const onAcceptHandler = () => {
        const newArray = users.filter(obj => obj.id !== currentUserId);
        onDeleteUserFromData([...newArray]);
        onDestroy();
    }

    return (
        <div className="modal" onClick={closeWindow}>
            <div className="modal-content">
                <i className="close" onClick={onDestroy}>X</i>
                <h1>Видалити запис?</h1>
                <div className="btns">
                    <button onClick={onAcceptHandler} className="accept">Так,видалити</button>
                    <button className="reject" onClick={onDestroy}>Ні,залишити</button>
                </div>
            </div>
        </div>
    );
}