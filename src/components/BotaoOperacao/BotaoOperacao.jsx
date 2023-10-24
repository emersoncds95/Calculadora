import './BotaoOperacao.css'

function BotaoOperacao({ operacao }) {

    const handleClick = () => {

        const numeroDigitado = document.getElementById('numeroTela').textContent

        document.getElementById('numeroTela').innerHTML = numeroDigitado + `${operacao}`


    };


    return (
        <div className="botaoOperacao">
            <button onClick={handleClick}>{operacao}</button>
        </div>
    )

}
export default BotaoOperacao