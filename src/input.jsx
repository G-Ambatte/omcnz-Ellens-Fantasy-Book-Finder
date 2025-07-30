import React from 'react'

function input({ label, value, setValue, data }) {
	return <label>
		{label}
		<select type='dropdown' value={value} onChange={(e)=>{setValue(e.target.value)}}>
			{data.map((dataKey, index)=>{return <option key={index}>{dataKey}</option>})}
		</select>
	</label>
}

export default input