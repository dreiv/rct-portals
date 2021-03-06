import React, { Component } from 'react'
import Chat from './components/Chat'
import TextInput from './components/TextInput'
import { responses } from './data/responses'
import './App.css'

class App extends Component {
	state = {
		comments: [
			{
				author: 'bot',
				text: 'Hello 👋, enter text with an emoji like :joy: or :smile:',
			},
		],
	}

	handleSubmit = text => {
		this.addComment('me', text)
		this.startBotResponse()
	}

	startBotResponse() {
		if (this.botResponse) {
			clearTimeout(this.botResponse)
		}

		this.botResponse = setTimeout(this.fakeResponse, Math.random() * 2000 + 500)
	}

	fakeResponse = () => {
		const randomIndex = Math.floor(Math.random() * (responses.length - 1))
		const response = responses[randomIndex]
		this.addComment('bot', response)
	}

	addComment(author, text) {
		this.setState(prevState => ({
			comments: prevState.comments.concat({ author, text }),
		}))
	}

	render() {
		return (
			<main>
				<section className="chat-window">
					<header
						ref={ref => {
							this.header = ref
						}}
					/>

					<Chat comments={this.state.comments} />

					<TextInput
						handleSubmit={this.handleSubmit}
						getRef={() => this.header}
					/>
				</section>
			</main>
		)
	}
}

export default App
