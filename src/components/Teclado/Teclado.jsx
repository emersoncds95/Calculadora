import BotaoMaior from '../BotaoMaior/BotaoMaior'
import BotaoNumero from '../BotaoNumero/BotaoNumero'
import BotaoOperacao from '../BotaoOperacao/BotaoOperacao'
import BotaoReset from '../BotaoReset/BotaoReset'

import './Teclado.css'

function Teclado() {
    return (
        <div className="fundoTeclado">
            <div className="botoesTeclado">
                <BotaoNumero numero="1" />
                <BotaoNumero numero="2" />
                <BotaoNumero numero="3" />
                <BotaoReset reset="C" />

            </div>
            <div className="botoesTeclado">
                <BotaoNumero numero="4" />
                <BotaoNumero numero="5" />
                <BotaoNumero numero="6" />
                <BotaoOperacao operacao="+" />
            </div>
            <div className="botoesTeclado">
                <BotaoNumero numero="7" />
                <BotaoNumero numero="8" />
                <BotaoNumero numero="9" />
                <BotaoOperacao operacao="-" />
            </div>
            <div className="botoesTeclado">
                <BotaoNumero numero="." />
                <BotaoNumero numero="0" />
                <BotaoOperacao operacao="/" />
                <BotaoOperacao operacao="*" />
            </div>
            <div className="botoesTeclado">
                <BotaoMaior numero="=" />
            </div>
        </div>

    )

}
export default Teclado
