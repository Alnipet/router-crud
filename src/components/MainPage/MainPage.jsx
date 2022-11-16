import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {updateApi} from '../../api/mainApi'
import PostCard from './components/PostCard'

const MainPage = ({handleGetPosts}) => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		updateApi().then((data) => setPosts(data))
	}, [])

	useEffect(() => {
		handleGetPosts(posts)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [posts])

	const postArr = posts.map((el, i) => {
		return (
			<div key={i}>
				<Link to={`/posts/${el.id}`}>
					<PostCard {...el} />
				</Link>
			</div>
		)
	})

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='btn-wrapper'>
					<Link to='/NewPost'>
						<div className='new-post-btn'>Новый пост</div>
					</Link>
				</div>
				<div className='posts-wrapper'>{postArr}</div>
			</div>
		</div>
	)
}

export default MainPage
