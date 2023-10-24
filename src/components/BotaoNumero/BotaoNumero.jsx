import './BotaoNumero.css'

function BotaoNumero({ numero }) {

    const handleClick = () => {
        // console.log(`${numero}`);
        document.getElementById('numeroTela').innerHTML += `${numero}`
    };


    return (
        <div className="botaoNumero">
            <button onClick={handleClick}>{numero}</button>
        </div>
    )

}
export default BotaoNumero