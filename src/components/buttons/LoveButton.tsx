import { FC } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import CustomLink from '../menus/CustomLink'

const LoveButton: FC = () => {
	return (
		<div className='love-button'>
			<CustomLink to='/love' className='love-button__icon'>
				<FaRegHeart />
			</CustomLink>
		</div>
	)
}

export default LoveButton
