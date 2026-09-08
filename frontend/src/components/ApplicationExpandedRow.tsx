import { useState } from 'react';
import { appService } from '../services/appService';
import type { Application } from '../types/Application';
import './ApplicationExpandedRow.css';

interface ExpandedRowProps {
	data: Application;
}

export function ApplicationExpandedRow({ data }: ExpandedRowProps<Application>) {
	const [noteText, setNoteText] = useState(data.note?.noteText ?? '');
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSave() {
		setSaving(true);
		setError(null);
		const updated: Application = {
			...data,
			note: noteText.trim() === '' ? null : { noteId: data.note?.noteId ?? 0, noteText },
		};
		try {
			await appService.saveApplication(updated);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to save note.');
		} finally {
			setSaving(false);
		}
	}

	return (
	<div className="note-padding">
		<label>
			Notes
			<textarea
				value={noteText}
				onChange={(e) => setNoteText(e.target.value)}
				rows={3}
				className="note-area"
			/>
		</label>
		{error && <p style={{ color: 'red' }}>{error}</p>}
		<button onClick={handleSave} disabled={saving}>
			{saving ? 'Saving...' : 'Save Note'}
		</button>
	</div>
	);
}