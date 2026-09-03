import { createNewApplication, type Application } from '../types/Application';
import { useState } from 'react';
import { STATUS_OPTIONS } from '../types/Status';
import { appService } from '../services/appService';
import './AddNew.css';

interface AddNewApplicationProps {
	onCreated: (application: Application) => void;
}

export function AddNewApplication() {
	const [form, setForm] = useState<Application>(createNewApplication());
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	function handleChange<K extends keyof Application>(field: K, value: Application[K]): void {
		setForm((prev) => ({ ...prev, [field]: value }));
		setSuccess(false);
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitting(true);
		setError(null);
		try {
			await appService.saveApplication(form);
			setSuccess(true);
			setForm(createNewApplication());
		} catch (error) {
			setError(error instanceof Error ? error.message : 'Failed to save application');
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div className="content">
			<div className="header-box">Add New Entry</div>
			<form onSubmit={handleSubmit} className="form-grid">
				<div className="row-grid">
					<label>Date Applied</label>
					<input
						type="date"
						required
						value={form.date}
						onChange={(e) => handleChange('date', e.target.value)}
					/>
				</div>

				<div className="row-grid">
					<label htmlFor="companyName">
						Company Name
					</label>
					<input
						required
						value={form.companyName}
						onChange={(e) => handleChange('companyName', e.target.value)}
					/>
				</div>

				<div className="row-grid">
					<label>Job Title</label>
					<input
						required
						value={form.jobTitle}
						onChange={(e) => handleChange('jobTitle', e.target.value)}
					/>
				</div>

				<div className="row-grid">
					<label>Method</label>
					<input
						value={form.method}
						onChange={(e) => handleChange('method', e.target.value)}
						placeholder="e.g. LinkedIn, Referral, direct"
					/>
				</div>

				<div className="row-grid">
					<label>Years of Experience Required</label>
					<input
						type="number"
						min={0}
						value={form.yearsOfExperience ?? ''}
						onChange={(e) =>
							handleChange('yearsOfExperience', e.target.value === '' ? null : Number(e.target.value))
						}
					/>
				</div>

				<div className="row-grid">
					<label>Pay Range</label>
					<input
						value={form.payRange}
						onChange={(e) => handleChange('payRange', e.target.value)}
						placeholder="e.g. 90-110"
					/>
				</div>

				<div className="row-grid">
					<label>Status</label>
					<select
						value={form.statusId}
						onChange={(e) => handleChange('statusId', Number(e.target.value))}
					>
						{STATUS_OPTIONS.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				<div className="row-grid">
					<label>Posting Link</label>
					<input
						type="url"
						value={form.postingLink}
						onChange={(e) => handleChange('postingLink', e.target.value)}
					/>
				</div>

				<div className="row-grid">
					<label>Login Link</label>
					<input
						type="url"
						value={form.loginLink}
						onChange={(e) => handleChange('loginLink', e.target.value)}
					/>
				</div>

				<div className="bottom-message">
					<p style={{ color: success ? 'green' : 'red' }}>
						{ success ? 'Entry saved.' : error }
					</p>
				</div>

				<div className="center-justify">
					<button type="submit" disabled={submitting}>
						{submitting ? 'Saving...' : 'Save Entry'}
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddNewApplication;