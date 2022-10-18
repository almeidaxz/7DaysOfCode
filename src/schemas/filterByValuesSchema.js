import Joi from 'joi';

export const filterByValuesSchema = Joi.object({
    min: Joi.number().required().messages({
        'any.required': 'O campo não pode ser vazio',
        'number.empty': 'O campo não pode ser vazio'
    }),
    max: Joi.number().required().messages({
        'any.required': 'O campo não pode ser vazio',
        'number.empty': 'O campo não pode ser vazio'
    })
});
