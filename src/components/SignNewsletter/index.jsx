import './styles.css';
import Mail from '../../assets/mail.svg';

export default function Newsletter() {
    return (
        <div className="newsletter-container">
            <span className='font-size-22'>Sua casa com as</span>
            <br />
            <strong className='highlight font-size-82 highlight-font-family'>melhores plantas</strong>
            <p className="p-box font-size-16">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <div className='custom-input row align-center'>
                <img src={Mail} className='mail-icon' alt="mail icon" />
                <input type="text" className='newsletter-input' placeholder='Insira seu e-mail' />
                <button type='button' className='newsletter-btn'>Assinar newsletter</button>
            </div>
        </div>
    )
}