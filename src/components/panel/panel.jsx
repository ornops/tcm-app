import React from 'react'
import './panel.scss'

const Panel = ({ panelTitle, panelValue }) => {
	return (
		<div className='custom-panel'>
			<p className='panel-title'>{panelTitle}</p>
			<p className='panel-value'>{panelValue}</p>
		</div>
	)
}

export default Panel
