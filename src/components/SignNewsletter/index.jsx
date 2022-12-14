import { joiResolver } from '@hookform/resolvers/joi';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Mail from '../../assets/mail.svg';
import { newsletterSchema } from '../../schemas/newsletterSchema';
import sendMail from '../../services/sendMail';
import { CustomBtn, CustomInput, CustomInputContainer, CustonErrorMessage, HighlightText, MailIcon, NewsletterContainer, ParagraphContainer } from './styled';
import './styles.css';

export default function Newsletter() {
    const formRef = useRef();
    const { register, handleSubmit, reset,  formState: { errors } } = useForm({
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
                <CustomInputContainer
                    className='row align-center'
                    ref={formRef}
                    onSubmit={handleSubmit((data) => {
                        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${data.email}`);
                        sendMail(formRef.current);
                        reset();
                    })}
                >
                    <MailIcon src={Mail} className='mail-icon' alt="mail icon" />
                    <CustomInput
                        {...register("email", { required: true })}
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