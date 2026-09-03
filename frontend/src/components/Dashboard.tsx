import { useEffect, useState, useMemo } from 'react';
import { appService } from '../services/appService.ts';
import DataTable from 'react-data-table-component';
import { STATUS_OPTIONS } from '../types/Status.js';
import { StatusBadge } from './StatusBadge';
import { FaTrash } from 'react-icons/fa';
import './Dashboard.css';

export default function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    appService.getApplications()
        .then(setApplications)
        .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (applicationId: number) => {
    await appService.deleteApplication(applicationId);
    setApplications((prev) => prev.filter((a) => a.applicationId !== applicationId));
  };

  const onCellUpdate = async (row: Application, field: keyof Application, value: unknown ) => {
    const updated = { ...row, [field]: value};
    await appService.saveApplication(updated);
    setApplications((prev) => prev.map((a) => (a.applicationId === row.applicationId ? updated : a))
    );
    console.log(updated);
  }

  const columns = useMemo(() => [
    { id: 'applicationId', name: 'ID', selector: row => row.applicationId, sortable: true, minWidth: '65px' },
    { name: 'Date', selector: row => row.date },
    { name: 'Company', selector: row => row.companyName, sortable: true },
    { name: 'Job Title', selector: row => row.jobTitle, wrap: true },
    { name: 'Status', selector: row => row.statusId,
      editor: {
        type: 'select',
        options: STATUS_OPTIONS,
        onCellEdit: onCellUpdate,
      },
      sortable: true,
      center: true,
      cell: (row) => <StatusBadge statusId={ row.statusId} /> },
    { name: 'YOE', selector: row => row.yearsOfExperience, center: true },
    { name: 'Pay Range', selector: row => row.payRange, center: true },
    { name: 'Method', selector: row => row.method, center: true, minWidth: '90px' },
    { name: 'Job Link', center: true, minWidth: '90px', cell: (row) => row.postingLink ?
        <a href={row.postingLink} target="_blank" className="dashboard-link">
          link
        </a> : null },
    { name: 'Login link', center: true, minWidth: '90px', cell: (row) => row.loginLink ?
        <a href={row.loginLink} target="_blank">
          link
        </a> : null },
    { name: 'Actions', center: true, button: true, cell: (row) => (
      <div>
        <button type="button" onClick={() => handleDelete(row.applicationId)} className="icon-button"><FaTrash /></button>
      </div>
      ) }
  ], []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error.message}</p>;

  return (
      <DataTable title="Applications Dashboard"
                 columns={columns}
                 data={applications}
                 pagination
                 paginationPerPage={10}
                 progressPending={loading}
                 defaultSortFieldId="applicationId"
                 defaultSortAsc={false}
                 columnSeparator
                 onCellUpdate={onCellUpdate}
                 />
  );

};