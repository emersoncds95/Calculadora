import './BotaoMaior.css'

function BotaoMaior({ numero }) {
    const handleClick = () => {

        const operacao = document.getElementById('numeroTela').textContent;


        try {
            const resultado = eval(operacao);

            document.getElementById('numeroTela').textContent = resultado;
        } catch (error) {
            // Trate erros de avaliação (por exemplo, divisão por zero)
            console.error('Erro na avaliação da expressão:', error);
        }
    }

    return (
        <div className='botaoMaior'>
            <button onClick={handleClick}>{numero}</button>
        </div>
    )
}
export default BotaoMaior