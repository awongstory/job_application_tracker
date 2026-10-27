import { useState } from 'react';
import { appService } from '../services/appService.ts';
import { STATUS_OPTIONS } from '../types/Status.js';
import './SearchPanel.css';

export default function SearchPanel({ filters, onChange }) {
	return (
		<div className="">
			<div className="search-grid">
				<label>Search</label>
				<input type="text" placeholder="Search"
							 value={filters.text}
							 onChange={(e) => onChange({ ...filters, text: e.target.value })}
				/>

				<label>Status</label>
				<select value={filters.statusId}
					onChange={(e) => onChange({ ...filters, statusId: e.target.value })}>
					<option value="">All Statuses</option>
					{STATUS_OPTIONS.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}

				</select>

				<button onClick={() => onChange({ text: "", statusId: "" })}>Reset</button>
			</div>

		</div>

	)
}