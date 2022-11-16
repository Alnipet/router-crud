import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage/MainPage'
import NewPost from './components/NewPost/NewPost'
import PostPage from './components/PostPage/PostPage'
import EditPost from './components/EditPost/EditPost'

function App() {
	const [posts, setPosts] = useState()

	const handleGetPosts = (data) => {
		setPosts(data)
	}

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<MainPage handleGetPosts={handleGetPosts} />} />
					<Route path='/NewPost' element={<NewPost />} />
					<Route path='/posts/:pId' element={<PostPage posts={posts} />} />
					<Route path='/posts/:pId/edit' element={<EditPost posts={posts} />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
