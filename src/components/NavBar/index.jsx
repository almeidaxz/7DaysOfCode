import Logo from '../../assets/logo.svg';
import '../../styles/utils.css';
import './styles.css';

const menuOptions = ['Como fazer', 'Ofertas', 'Depoimenmtos', 'Videos', 'Meu Carrinho'];

export default function NavBar() {
    console.log(menuOptions.at(-1));
    return (
        <header>
            <nav className='row align-center space-btw font-size-16'>
                <img src={Logo} alt="page logo" />
                <div className='row gap-13'>
                    {menuOptions.map((item) => {
                        return (
                            <div key={item} className='row gap-13'>
                                <div>
                                    <a className='menu-item' href='#'>{item}</a>
                                </div>
                                {item === menuOptions.at(-1) ? '' : <div>/</div>}
                            </div>
                        )
                    }
                    )}
                </div>
            </nav>
        </header>
    )
}