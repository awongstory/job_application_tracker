import { useState } from 'react';
import { appService } from '../services/appService.ts';
import { STATUS_OPTIONS } from '../types/Status.js';
import './SearchPanel.css';

export default function SearchPanel({ data }) {
	const [filter, setFilter] = useState([]);





	function handleFilter(statusId: number) {
		console.log(filter);


		// sets filter values
		// makes api call
	}

	return (
		<div className="">
			<div className="search-grid">
				<label>Search</label>
				<input type="text"
				/>

				<label>Status</label>
				<select value={filter.statusId}>
					<option value={''}></option>
					{STATUS_OPTIONS.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}

				</select>

				<button onClick={handleFilter()}>Filter</button>
			</div>

		</div>

	)
}