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
					{/* this will be our portal element */}
					<header ref={ref => (this.header = ref)} />

					{/* the message window */}
					<Chat comments={this.state.comments} />

					{/* the meat of this app is within the TextInput */}
					<TextInput
						handleSubmit={this.handleSubmit}
						getRef={() => this.header} // this will allow us to retrieve the ref for creating the portal
					/>
				</section>
			</main>
		)
	}
}

export default App
