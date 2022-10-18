import { useEffect, useState } from 'react';
import { FadedText, HighlightText, OfferSectionContainer, ButtonsWrapper, FilterBtn, OrderBtn } from './styled';
import ItemWrapper from '../ItemWrapper';
import api from '../../services/apiConnection';
import FilterPopUp from '../FilterPopUp';
import OrderPopUp from '../OrderPopUp';

export default function OfferSection() {
    const [items, setItems] = useState([]);
    const [popUps, setPopUps] = useState({
        filterOpened: false,
        orderOpened: false
    });

    const fetchItems = async () => {
        const getItems = await api.get('/');
        setItems(getItems.data);
    }

    const handlePopUps = (e) => {
        if (e.target.innerHTML === 'Filtrar') {
            openFilterPopUp();
        }
        if (e.target.innerHTML === 'Ordenar') {
            openOrderPopUp();
        }
    }

    const openFilterPopUp = () => {
        const newPopUpsState = { ...popUps, filterOpened: !popUps.filterOpened, orderOpened: false };
        setPopUps(newPopUpsState);
    }

    const openOrderPopUp = () => {
        const newPopUpsState = { ...popUps, orderOpened: !popUps.orderOpened, filterOpened: false };
        setPopUps(newPopUpsState);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <OfferSectionContainer className="column align-center">
            <FadedText className='font-size-22'>Conheça</FadedText>
            <HighlightText className='font-size-82 highlight-font-family'>nossas plantas</HighlightText>
            <div>
                <FilterBtn
                    onClick={handlePopUps}
                    className='font-size-12'
                    style={{ backgroundColor: popUps.filterOpened && 'rgb(217, 217, 217)' }}
                >
                    Filtrar
                </FilterBtn>
                {popUps.filterOpened && <FilterPopUp />}
                <OrderBtn
                    onClick={handlePopUps}
                    className='font-size-12'
                    style={{ backgroundColor: popUps.orderOpened && 'rgb(217, 217, 217)' }}
                >
                    Ordenar
                </OrderBtn>
                {popUps.orderOpened && <OrderPopUp />}
            </div>
            <div className='row wrap gap-30'>
                {items.map((item) => {
                    if (item.ordem) {
                        return (
                            <ItemWrapper key={item.ordem} name={item.name} preco={item.preco} img={item.img} />
                        )
                    }
                })}
            </div>
        </OfferSectionContainer>
    )
}