import { FC } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

type CustomLinkType = {
	to: string
	children: React.ReactNode
	className?: string
}

const CustomLink: FC<CustomLinkType> = ({ to, children, className }) => {
	const resolvedPath = useResolvedPath(to)
	let isActive = useMatch({ path: resolvedPath.pathname, end: true })
	const classes = [className, isActive ? 'active' : '']
	return (
		<Link to={to} className={classes.join(' ')}>
			{children}
		</Link>
	)
}

export default CustomLink
