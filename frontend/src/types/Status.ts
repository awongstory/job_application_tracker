const STATUS = {
	1: { label: 'Applied', color: '#87c0e6' },
	2: { label: 'Rejected', color: '#f2aaaa' },
	3: { label: 'Rejected (Post-Interview)', color: '#ed7e7e' },
	4: { label: 'Screening Scheduled', color: '#00fc58' },
	5: { label: 'Video Scheduled', color: '#00a943' },
	6: { label: 'Technical Scheduled', color: '#008835' },
	7: { label: 'Recruiter Scheduled', color: '#00fc58' },
	8: { label: 'Offer Received', color: '#03421d' },
	9: { label: 'Offer Accepted', color: '#370072' },
	10: { label: 'Offer Rejected', color: '#000000' },
	11: { label: 'Internal Hire', color: '#b5b0b2' },
	99: { label: 'Position Closed', color: '#000000' },
};

export function getStatus(statusId) {
	return STATUS[statusId] ?? { label: 'Unknown' };
}

export const STATUS_OPTIONS = Object.entries(STATUS)
	.map(([id, { label }]) => ({
		value: Number(id),
		label,
	}));