import React, { Component } from 'react'

export default class Chat extends Component {
	componentDidUpdate() {
		this.chat.scrollTop = this.chat.scrollHeight
	}

	render() {
		const { comments } = this.props
		return (
			<div
				className="chat"
				ref={ref => {
					this.chat = ref
				}}
			>
				{comments.map(({ author, text }, idx) => {
					const avatar = author === 'me' ? '😎' : '🤖'

					return (
						<div key={idx} className={`comment ${author}`}>
							<span className="avatar">{avatar}</span>
							<p className="bubble">{text}</p>
						</div>
					)
				})}
			</div>
		)
	}
}
