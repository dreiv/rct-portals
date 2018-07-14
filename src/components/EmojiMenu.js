import React from 'react'

export const EmojiMenu = ({ emojis, handleSelect }) => (
	<ul className="emoji-menu">
		{emojis.map(({ emoji }, i) => (
			<li key={i}>
				<button onClick={() => handleSelect(emoji)}>{emoji}</button>
			</li>
		))}
	</ul>
)
