import { type Note, createNewNote } from '../types/Note';

export interface Application {
	applicationId: number;
	date: Date;
	companyName: string;
	method: string;
	jobTitle: string;
	yearsOfExperience: number | null;
	payRange: string | null;
	statusId: number;
	postingLink: string;
	loginLink: string;
	note: Note | null;
}

export function createNewApplication(): Application {
	return {
		applicationId: undefined,
		date: new Date().toISOString().split('T')[0],
		companyName: '',
		method: '',
		jobTitle: '',
		yearsOfExperience: undefined,
		payRange: '',
		statusId: 1, // defaults to APPLIED
		postingLink: '',
		loginLink: '',
		note: '',
	};
}