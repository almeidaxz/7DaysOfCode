import Mail from '../../assets/mail.svg';
import { NewsletterContainer, HighlightText, ParagraphContainer, CustomInputContainer, MailIcon, CustomInput, CustomBtn, CustonErrorMessage } from './styled';
import { useForm } from 'react-hook-form';
import { newsletterSchema } from '../../schemas/newsletterSchema';
import { joiResolver } from '@hookform/resolvers/joi';
import './styles.css';

export default function Newsletter() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(newsletterSchema)
    });

    return (
        <>
            <NewsletterContainer className='newsletter-container'>
                <span className='font-size-22'>Sua casa com as</span>
                <br />
                <HighlightText className='font-size-82 highlight-font-family'>melhores plantas</HighlightText>
                <ParagraphContainer className="font-size-16">
                    Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </ParagraphContainer>
                <CustomInputContainer className='row align-center' onSubmit={handleSubmit((data) => { alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${data.email}`) })}>
                    <MailIcon src={Mail} className='mail-icon' alt="mail icon" />
                    <CustomInput
                        {...register("email", { required: true })}
                        name='email'
                        className='font-size-16 border-none'
                        placeholder='Insira seu e-mail'
                    />
                    <CustomBtn type='submit' className='font-size-16 border-none'>Assinar newsletter</CustomBtn>
                    <CustonErrorMessage>{errors.email?.message}</CustonErrorMessage>
                </CustomInputContainer>
            </NewsletterContainer>
            <div className='empty' />
        </>
    )
}