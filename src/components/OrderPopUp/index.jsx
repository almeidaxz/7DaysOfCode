import { PopUp, OrderOption } from "./styled";
import { ArrowUp, ArrowDown } from 'phosphor-react';
import { useEffect, useState } from "react";

export default function OrderPopUp({ localItems, setLocalItems, popUps, setPopUps }) {
    const [ordination, setOrdination] = useState({});
    const itemsCopy = [...localItems];

    const handleChangeOrdination = (e) => {
        const selectedOption = e.target.innerHTML.split('<')[0];
        switch (selectedOption) {
            case 'Preço':
                ordination.price === 'ASC'
                    ? handleOrdination('DSC', 'price', 'preco')
                    : handleOrdination('ASC', 'price', 'preco')
                return;
            case 'Nome':
                ordination.name === 'ASC'
                    ? handleOrdination('DSC', 'name', 'nome')
                    : handleOrdination('ASC', 'name', 'nome')
                return;
            default:
                return null;
        }
    }

    const handleOrdination = (sortOrder, sortOption, itemKey) => {
        const sortedItems = handleSort(sortOrder, itemKey);
        setOrdination({ ...ordination, [sortOption]: sortOrder });
        setLocalItems(sortedItems);
    }

    const handleSort = (sortOrder, sortOption) => {
        switch (sortOrder) {
            case 'ASC':
                return itemsCopy.sort((a, b) => {
                    return a[sortOption] > b[sortOption] ? 1 : -1;
                });
            case 'DSC':
                return itemsCopy.sort((a, b) => {
                    return a[sortOption] < b[sortOption] ? 1 : -1;
                });
            default:
                return null;
        }
    }

    useEffect(() => {
        setOrdination({
            price: 'ASC',
            name: 'ASC'
        });
    }, []);

    return (
        <PopUp className="column justify-center">
            <OrderOption
                className='row space-btw align-center gap-5'
                onClick={handleChangeOrdination}
            >
                Preço
                {ordination.price === 'ASC'
                    ?
                    <ArrowUp size={10} weight="regular" />
                    :
                    <ArrowDown size={10} weight="regular" />
                }
            </OrderOption>
            <OrderOption
                className='row space-btw align-center gap-5'
                onClick={handleChangeOrdination}
            >
                Nome
                {ordination.name === 'ASC'
                    ?
                    <ArrowUp size={10} weight="regular" />
                    :
                    <ArrowDown size={10} weight="regular" />
                }
            </OrderOption>
        </PopUp>

    )
}