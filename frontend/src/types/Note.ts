export interface Note {
	noteId: number;
	noteText: string;
}

export function createNewNote(): Note {
	return {
		noteId: undefined,
		noteText: '',
	};
}