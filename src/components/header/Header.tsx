import { Link } from 'react-router-dom'
import LoveButton from '../buttons/LoveButton'
import MenuHeader from '../menus/MenuHeader'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__container_logo'>
					<Link to='/'>RECIPES</Link>
				</div>
				<div className='header__container_menu'>
					<MenuHeader />
				</div>
				<div className='header__container_love'>
					<LoveButton />
				</div>
			</div>
		</header>
	)
}

export default Header
