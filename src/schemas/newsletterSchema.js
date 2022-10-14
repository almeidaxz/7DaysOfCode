import Joi from 'joi';

export const newsletterSchema = Joi.object({
    email: Joi.string().email({
        tlds: false
    }).required().messages({
        'any.required': 'Preencha o campo com o seu email',
        'string.empty': 'Preencha o campo com o seu email',
        'string.email': 'E-mail inválido'
    })
});
