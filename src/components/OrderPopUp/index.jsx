import { PopUp, OrderOption } from "./styled";
import { ArrowUp, ArrowDown } from 'phosphor-react';
import { useEffect, useState } from "react";

export default function OrderPopUp() {
    const [ordination, setOrdination] = useState({});

    const handleChangeOrdination = (e) => {
        const selectedOption = e.target.innerHTML.split('<')[0];
        switch (selectedOption) {
            case 'Preço':
                ordination.price === 'ASC'
                    ? setOrdination({ ...ordination, price: 'DSC' })
                    : setOrdination({ ...ordination, price: 'ASC' })
                return;
            case 'Nome':
                ordination.name === 'ASC'
                    ? setOrdination({ ...ordination, name: 'DSC' })
                    : setOrdination({ ...ordination, name: 'ASC' })
                return;
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