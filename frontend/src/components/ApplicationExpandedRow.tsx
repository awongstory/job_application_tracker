import { useState } from 'react';
import { appService } from '../services/appService';
import type { Application } from '../types/Application';
import './ApplicationExpandedRow.css';

interface ExpandedRowProps {
	data: Application;
}

export function ApplicationExpandedRow({ data }: ExpandedRowProps<Application>) {
	const [noteText, setNoteText] = useState(data.note?.noteText ?? '');
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSave() {
		setIsEditing(false);
		setError(null);
		const updated: Application = {
			...data,
			note: noteText.trim() === '' ? null : {noteId: data.note?.noteId ?? 0, noteText},
		};
		try {
			await appService.saveApplication(updated);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to save note.');
		} finally {
			setIsEditing(false);
		}
	}

	return (
		<div className="note-padding">
			<div>
				<label>Notes:</label>
				<textarea
					value={noteText}
					rows={3}
					readOnly={!isEditing}
					onChange={(e) => setNoteText(e.target.value)}
					className={isEditing ? "editing" : "note-area"}
				/>
			</div>
			{isEditing ? (
					<button className="note-button" onClick={handleSave}>Save Note</button>
			) : (
				<button className="note-button" onClick={() => setIsEditing(true)}>
					{ noteText.trim() === '' ? "New Note" : "Edit Note" }
				</button>
			)}
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>

	);
}