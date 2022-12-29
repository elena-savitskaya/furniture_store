import "./_count.scss"

const Count = ({ count, increase, decrease, changeValue, id }) => {
	return (
		<div className='count'>
			<div className='count-box'>
				<input onChange={(e) => { changeValue(id, +e.target.value) }} type='number' className='count-input' min='1' max='100' value={count} />
			</div>
			<div className='count-controls'>
				<svg onClick={() => { increase(id) }} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13 7L7 1L1 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<svg onClick={() => { decrease(id) }} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1L7 7L13 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</div>
	);
};

export default Count;