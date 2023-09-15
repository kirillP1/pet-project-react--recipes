import SocialIconsFooter from '../buttons/SocialIconsFooter'
import FormUpdatesFooter from '../forms/FormUpdatesFooter'
import MenuFooter from '../menus/MenuFooter'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='col-2'>
				<MenuFooter />
			</div>
			<div className='col-2'>
				<FormUpdatesFooter />
				<SocialIconsFooter />
			</div>
		</footer>
	)
}

export default Footer
