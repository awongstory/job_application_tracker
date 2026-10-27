import { useEffect, useState, useMemo } from 'react';
import { appService } from '../services/appService.ts';
import DataTable, { type TableColumn, type ExpanderComponentProps } from 'react-data-table-component';
import { STATUS_OPTIONS } from '../types/Status.js';
import { StatusBadge } from './StatusBadge';
import { FaTrash } from 'react-icons/fa';
import type { Application } from '../types/Application.js';
import { ApplicationExpandedRow } from './ApplicationExpandedRow';
import type { Note } from '../types/Note.js';
import SearchPanel from './SearchPanel';
import './Dashboard.css';

export default function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ text: "", statusId: "" });

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

  const handleCellEdit = async (row: Application,
                                value: string,
                                column: TableColumn<Application> ) => {
    const field = column.id as keyof Application;
    const updated = { ...row, [field]: value };

    try {
      await appService.saveApplication(updated);
      setApplications((prev) =>
        prev.map((a) => (a.applicationId === row.applicationId) ? updated : a));
    } catch (error) {
      console.error('Failed to save', error);
    }
  }

  var filteredApplications = useMemo(() => {
    const text = filters.text.trim().toLowerCase();
    return applications.filter((application) => {
      const matchesText =
        !text || application.companyName.toLowerCase().includes(text); // add other fields as needed
      const matchesStatus =
        filters.statusId === "" || application.statusId === Number(filters.statusId);

      return matchesText && matchesStatus;
    });
  }, [applications, filters]);

  const columns = useMemo(() => [
    { id: 'applicationId', name: 'ID', selector: row => row.applicationId, sortable: true, minWidth: '65px' },
    { name: 'Date', selector: row => row.date, sortable: true },
    { name: 'Company', selector: row => row.companyName, sortable: true,
      sortFunction: (rowA, rowB) => {
        const a = rowA.companyName || '';
        const b = rowB.companyName || '';
        return a.localeCompare(b, "en", {sensitivity: 'base'});
      },
    },
    { id: 'jobTitle', name: 'Job Title', selector: row => row.jobTitle, editable: true, wrap: true,
      onCellEdit: (row, value, column) => handleCellEdit(row, value, column),
    },
    { id: 'statusId',
      name: 'Status', selector: row => row.statusId,
      editor: {
        type: 'select',
        options: STATUS_OPTIONS.map((option) => ({
          value: String(option.value),
          label: option.label,
          })),
      },
      sortable: true,
      center: true,
      cell: (row) => <StatusBadge statusId={ row.statusId} />,
      onCellEdit: (row, value, column) => handleCellEdit(row, value, column),
    },
    { name: 'YOE', selector: row => row.yearsOfExperience, center: true },
    { id: 'payRange', name: 'Pay Range',
      selector: row => row.payRange,
      format: row => row.payRange ? `$${row.payRange}k` : '',
      center: true,
      editable: true,
      onCellEdit: (row, value, column) => handleCellEdit(row, value, column)
    },
    { name: 'Method', selector: row => row.method, center: true, minWidth: '90px' },
    { id: 'postingLink',
      name: 'Posting Link',
      selector: row => row.postingLink,
      center: true,
      minWidth: '90px',
      editable: true,
      onCellEdit: (row, value, column) => handleCellEdit(row, value, column),
      cell: (row) => row.postingLink ?
        <a href={row.postingLink} target="_blank" className="dashboard-link">
          link
        </a> : null },
    { name: 'Login link',
      selector: row => row.loginLink,
      center: true,
      minWidth: '90px',
      editable: true,
      onCellEdit: (row, value, column) => handleCellEdit(row, value, column),
      cell: (row) => row.loginLink ?
        <a href={row.loginLink} target="_blank" className="dashboard-link">
          link
        </a> : null },
    { name: 'Actions',
      center: true,
      button: true,
      cell: (row) => (
      <div>
        <button type="button" onClick={() => handleDelete(row.applicationId)} className="icon-button"><FaTrash /></button>
      </div>
      ) }
  ], []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error.message}</p>;

  return (
    <div>
      <div className="header-box">Applications Dashboard</div>
      <SearchPanel filters={filters} onChange={setFilters} />
      <DataTable columns={columns}
                 data={filteredApplications}
                 expandableRows
                 expandableRowsComponent={ApplicationExpandedRow}
                 pagination
                 paginationPerPage={10}
                 progressPending={loading}
                 defaultSortFieldId="applicationId"
                 defaultSortAsc={false}
                 columnSeparator
                 />
    </div>
  );

};