import { CardContainer, PlantImage, HighlightText, CardTextContainer } from './styled';
import HighPlant from '../../assets/highPlant.svg';
import YellowBall from '../../assets/yellowBall.svg';

const cardOptions = ['Escolha suas plantas', 'Faça seu pedido', 'Aguarde na sua casa'];

export default function HighlightCard() {
    return (
        <CardContainer>
            <PlantImage src={HighPlant} />
            <CardTextContainer className='column gap-32 justify-center'>
                <div className='column gap-13 justify-center'>
                    <span className='font-size-22'>Como conseguir</span>
                    <HighlightText className='font-size-42'>minha planta</HighlightText>
                </div>
                <div className='column gap-32'>
                    {cardOptions.map((item) => {
                        return (
                            <div className='row align-center gap-16' key={item}>
                                <img src={YellowBall} alt="yellow point" />
                                <p className='font-size-22'>{item}</p>
                            </div>
                        )
                    })}
                </div>
            </CardTextContainer>
        </CardContainer>
    )
}