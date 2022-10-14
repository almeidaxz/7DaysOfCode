import Mail from '../../assets/mail.svg';
import { NewsletterContainer, HighlightText, ParagraphContainer, CustomInputContainer, MailIcon, CustomInput, CustomBtn } from './styled';
import './styles.css';

export default function Newsletter() {
    return (
        <NewsletterContainer className='newsletter-container'>
            <span className='font-size-22'>Sua casa com as</span>
            <br />
            <HighlightText className='font-size-82 highlight-font-family'>melhores plantas</HighlightText>
            <ParagraphContainer className="font-size-16">
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </ParagraphContainer>
            <CustomInputContainer className='row align-center'>
                <MailIcon src={Mail} className='mail-icon' alt="mail icon" />
                <CustomInput type="text" className='font-size-16 border-none' placeholder='Insira seu e-mail' />
                <CustomBtn type='button' className='font-size-16 border-none'>Assinar newsletter</CustomBtn>
            </CustomInputContainer>
        </NewsletterContainer>
    )
}