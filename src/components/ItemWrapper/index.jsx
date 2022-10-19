import Seta from '../../assets/seta.svg';
import formatPrice from '../../utils/utils';
import { BuyBtn, FadedText, ItemContentWrapper, ItemImageWrapper, ItemTextContentWrapper, ItemTitle } from './styled';

export default function ItemWrapper({ name, preco, img }) {
    return (
        <ItemContentWrapper className='row'>
            <ItemTextContentWrapper className='column space-btw'>
                <ItemTitle className='font-size-32 highlight-font-family'>{name}</ItemTitle>
                <FadedText className='font-size-16'>{formatPrice(preco)}</FadedText>
                <BuyBtn
                    className='row space-btw align-center font-size-16'
                >
                    Comprar
                    <img src={Seta} alt="arrow icon" />
                </BuyBtn>
            </ItemTextContentWrapper>
            <ItemImageWrapper style={{ backgroundImage: `url('../../../public/${img}.png')` }} />
        </ItemContentWrapper>
    )
}