import React from 'react'

const PostCard = ({id, name, content, created}) => {
	const date = new Date(created)
	const dateStr = `${date.getHours()}:${date.getMinutes()}  ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

	return (
		<div className='card-wrapper'>
			<h1 className='author-name'>{name}</h1>
			<span className='post-date'>{dateStr}</span>
			<div className='content'>{content}</div>
		</div>
	)
}

export default PostCard
