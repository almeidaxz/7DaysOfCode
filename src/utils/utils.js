export default function formatPrice(price) {
    const result = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return result;
}