import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {addApi} from '../../api/mainApi'

const EditPost = ({posts}) => {
	const [content, setContent] = useState('')
	const {pId} = useParams()

	useEffect(() => {
		const post = posts.find((el) => el.id === +pId)
		setContent(post.content)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const navigate = useNavigate()

	const handlePost = () => {
		addApi({id: +pId, name: 'Peter Brouline', content: content}).then(() => navigate('/'))
	}

	return (
		<div className='container'>
			<div className='wrapper'>
				<h1 className='title'>Редактировать публикацию</h1>
				<div onClick={() => navigate('/')} className='close-btn'>
					X
				</div>
				<textarea value={content} onChange={(e) => setContent(e.target.value)} className='post-content'></textarea>
				<button onClick={handlePost} className='btn'>
					Сохранить
				</button>
			</div>
		</div>
	)
}

export default EditPost
