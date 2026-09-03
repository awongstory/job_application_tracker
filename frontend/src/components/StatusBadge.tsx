import { getStatus } from '../types/Status';

export function StatusBadge({ statusId }) {
	const { label, color } = getStatus(statusId);
	return (
		<span style={{
			backgroundColor: color,
			textAlign: 'center',
			color: '#ffffff',
			padding: '2px 8px',
			borderRadius: '9999px',
			fontSize: '0.75rem',
	}}>
	{label}
	</span>
);
}