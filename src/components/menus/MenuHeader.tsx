import { FC, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import CustomLink from './CustomLink'

const MenuHeader: FC = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const classes = ['menu-header__wrapper', openMenu ? 'openMenu' : '']
	return (
		<div className='menu-header'>
			<div className='menu-header__open' onClick={() => setOpenMenu(true)}>
				<FaBars />
			</div>
			<div className={classes.join(' ')}>
				<div className='menu-header__close' onClick={() => setOpenMenu(false)}>
					<IoClose />
				</div>
				<li className='menu-header__item'>
					<CustomLink to='/'>Главная</CustomLink>
				</li>
				<li className='menu-header__item'>
					<CustomLink to='/recipes'>Рецепты</CustomLink>
				</li>
				<li className='menu-header__item'>
					<CustomLink to='/products'>Продукты</CustomLink>
				</li>
				<li className='menu-header__item'>
					<CustomLink to='/news'>Новости</CustomLink>
				</li>
			</div>
		</div>
	)
}

export default MenuHeader
