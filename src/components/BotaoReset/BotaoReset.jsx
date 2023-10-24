import './BotaoReset.css'

function BotaoReset({ reset }) {

    const handleClick = () => {

        document.getElementById('numeroTela').innerHTML = ""


    };

    return (
        <div className="BotaoReset">
            <button onClick={handleClick}>{reset}</button>
        </div>
    )

}
export default BotaoReset