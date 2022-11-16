import React from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import {removeApi} from '../../api/mainApi'

const PostPage = ({posts}) => {
	const navigate = useNavigate()
	const {pId} = useParams()

	const post = posts.find((el) => el.id === +pId)
	const date = new Date(post.created)
	const dateStr = `${date.getHours()}:${date.getMinutes()}  ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

	const removeHandle = (id) => {
		removeApi(id).then(() => navigate('/'))
	}

	return (
		<div className='container'>
			<div className='wrapper'>
				<h1 className='author-name'>{post.name}</h1>
				<span className='post-date'>{dateStr}</span>
				<div className='content'>{post.content}</div>
				<div className='post-btn-wrapper'>
					<Link to={`/posts/${pId}/edit`}>
						<div className='btn post-btn edit-btn'>Редактировать</div>
					</Link>
					<div className='btn post-btn remove-btn' onClick={() => removeHandle(post.id)}>
						Удалить
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostPage
