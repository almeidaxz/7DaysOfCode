import { useEffect, useState } from 'react';
import { FadedText, HighlightText, OfferSectionContainer, ItemContentWrapper, ItemImageWrapper, ItemTitle, ItemTextContentWrapper, BuyBtn } from './styled';
import api from '../../services/apiConnection';
import Seta from '../../assets/seta.svg';

export default function OfferSection() {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const getItems = await api.get('/');
        setItems(getItems.data);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <OfferSectionContainer className="column align-center">
            <FadedText className='font-size-22'>Conheça nossas</FadedText>
            <HighlightText className='font-size-82 highlight-font-family'>ofertas</HighlightText>
            <div className='row wrap gap-30'>
                {items.map((item) => {
                    return (
                        <ItemContentWrapper className='row' key={item.ordem}>
                            <ItemTextContentWrapper className='column space-btw'>
                                <ItemTitle className='font-size-32 highlight-font-family'>{item.name}</ItemTitle>
                                <FadedText className='font-size-16'>R$ {item.preco}</FadedText>
                                <BuyBtn
                                    className='row space-btw align-center font-size-16'
                                >
                                    Comprar
                                    <img src={Seta} alt="arrow icon" />
                                </BuyBtn>
                            </ItemTextContentWrapper>
                            <ItemImageWrapper style={{ backgroundImage: `url('./src/assets/${item.img}.png')` }} />
                        </ItemContentWrapper>
                    )
                })}
            </div>
        </OfferSectionContainer>
    )
}