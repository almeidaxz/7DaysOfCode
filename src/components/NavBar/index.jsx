import Logo from '../../assets/logo.svg';
import { MenuItemBox, MenuItem, CustomNavBar } from './styled';
import '../../styles/utils.css';

const menuOptions = ['Como fazer', 'Ofertas', 'Depoimentos', 'Videos', 'Meu Carrinho'];

export default function NavBar() {
    return (
        <header>
            <CustomNavBar className='row align-center space-btw font-size-16'>
                <img src={Logo} alt="page logo" />
                <div className='row gap-13'>
                    {menuOptions.map((item) => {
                        return (
                            <div key={item} className='row gap-13'>
                                <MenuItemBox className='menu-item-container'>
                                    <MenuItem className='menu-item' href='#'>{item}</MenuItem>
                                </MenuItemBox>
                                {item === menuOptions.at(-1) ? '' : <div>/</div>}
                            </div>
                        )
                    }
                    )}
                </div>
            </CustomNavBar>
        </header>
    )
}