export const updateApi = async () => {
	return await fetch('http://localhost:7777/posts')
		.then((res) => res.json())
		.then((data) => {
			return data
		})
}

export const addApi = async (data) => {
	fetch('http://localhost:7777/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	}).then(updateApi())
}

export const removeApi = async (id) => {
	fetch(`http://localhost:7777/posts/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		params: JSON.stringify(id),
	}).then(updateApi())
}
