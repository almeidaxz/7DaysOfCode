import { useEffect, useState } from 'react';
import { CustomApplyBtn, CustomInput, CustomResetBtn, PopUp } from './styled';

export default function FilterPopUp({ items, setLocalItems, popUps, setPopUps }) {
    const [itemsCopy, setItemsCopy] = useState([]);
    const [errors, setErrors] = useState({ min: '', max: '' });
    const [filterRange, setFilterRange] = useState({ min: '', max: '' });

    const handleFilterByValues = () => {
        if(filterRange.max <= 0 && filterRange.min <= 0) {
            setErrors({ ...errors, max: true, min: true });
            return;
        }
        if (filterRange.max <= 0 || filterRange.min > filterRange.max) {
            setErrors({ ...errors, max: true });
            return;
        }
        if (filterRange.min <= 0 || filterRange.max < filterRange.min) {
            setErrors({ ...errors, min: true });
            return;
        }

        const filteredItems = itemsCopy.filter((item) => {
            return item.preco >= filterRange.min && item.preco <= filterRange.max;
        });
        setLocalItems(filteredItems);
        setPopUps({ ...popUps, filterOpened: !popUps.filterOpened, orderOpened: false });
    }

    const handleChangeFilterRange = (e) => {
        setErrors({ min: '', max: '' });
        const newFilterRange = {
            ...filterRange,
            [e.target.name]: e.target.value
        }
        setFilterRange(newFilterRange);
    }

    const handleReset = (e) => {
        setFilterRange({
            min: '', max: ''
        });
        setLocalItems([...items]);
        setPopUps({ ...popUps, filterOpened: !popUps.filterOpened, orderOpened: false });
    }

    useEffect(() => {
        setItemsCopy([...items]);
    }, [filterRange]);

    return (
        <PopUp>
            <div className='column gap-5 justify-center'>
                <div>Preço:</div>
                <form>
                    <div className='row align-center gap-5'>
                        R$
                        <CustomInput
                            onChange={handleChangeFilterRange}
                            name='min'
                            value={filterRange.min}
                            type='number'
                            style={{ border: errors.min && '1.3px dashed red' }}
                            placeholder="De"
                        />
                    </div>
                    <div className='row align-center gap-5'>
                        R$
                        <CustomInput
                            onChange={handleChangeFilterRange}
                            name='max'
                            value={filterRange.max}
                            type='number'
                            style={{ border: errors.max && '1.3px dashed red' }}
                            placeholder="Até"
                        />
                    </div>
                    <div>
                        <CustomApplyBtn onClick={handleFilterByValues} type='button'>Aplicar</CustomApplyBtn>
                        <CustomResetBtn onClick={handleReset} type='button' className='font-size-12'>Limpar</CustomResetBtn>
                    </div>
                </form>
            </div>
        </PopUp>
    )
}