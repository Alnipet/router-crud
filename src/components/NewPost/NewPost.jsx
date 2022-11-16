import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {addApi} from '../../api/mainApi'

const NewPost = () => {
	const [content, setContent] = useState('')

	const navigate = useNavigate()

	const handlePost = () => {
		addApi({id: 0, name: 'Peter Brouline', content: content}).then(() => navigate('/'))
	}

	return (
		<div className='container'>
			<div className='wrapper'>
				<h1 className='title'>Создать новый пост</h1>
				<div onClick={() => navigate('/')} className='close-btn'>
					X
				</div>
				<textarea value={content} onChange={(e) => setContent(e.target.value)} className='post-content'></textarea>
				<button onClick={handlePost} className='btn'>
					Опубликовать
				</button>
			</div>
		</div>
	)
}

export default NewPost
