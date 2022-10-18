import { PopUp, CustomInput, CustomBtn } from './styled';

export default function FilterPopUp() {
    return (
        <PopUp>
            <div className='column gap-5 justify-center'>
                <div>Preço:</div>
                <div className='row align-center gap-5'>
                    R$
                    <CustomInput type="text" placeholder="De" />
                </div>
                <div className='row align-center gap-5'>
                    R$
                    <CustomInput type="text" placeholder="Até" />
                </div>
                <CustomBtn className=''>Aplicar</CustomBtn>
            </div>
        </PopUp>
    )
}