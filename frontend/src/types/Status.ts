export const STATUS = {
	1: { label: 'Applied', color: '#87c0e6' },
	2: { label: 'Rejected', color: '#f2aaaa' },
	3: { label: 'Rejected (Post-Interview)', color: '#ed7e7e' },
	4: { label: 'Screening Scheduled', color: '#97deb1' },
	5: { label: 'Video Scheduled', color: '#72ad88' },
	6: { label: 'Technical Scheduled', color: '#659978' },
	7: { label: 'Recruiter Scheduled', color: '#aae6c0' },
	8: { label: 'Offer Received', color: '#189646' },
	9: { label: 'Offer Accepted', color: '#000000' },
	10: { label: 'Offer Rejected', color: '#000000' },
	11: { label: 'Internal Hire', color: '#b5b0b2' },
	12: { label: 'Position Closed', color: '#000000' },
};

export function getStatus(statusId) {
	return STATUS[statusId] ?? { label: 'Unknown' };
}

export const STATUS_OPTIONS = Object.entries(STATUS)
	.map(([id, { label}]) => ({
		value: Number(id),
		label,
	}));