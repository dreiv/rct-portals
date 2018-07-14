import React, { Component } from 'react'
import Chat from './components/Chat';
import TextInput from './components/TextInput';
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

	render() {
		return (
			<main>
				<section className="chat-window">
					<header ref={ref => (this.header = ref)} />

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
