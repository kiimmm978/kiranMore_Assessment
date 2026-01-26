import React, { useMemo, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { employeeData } from '../employeeData';
import { Search, Star, Filter } from 'lucide-react';
import './EmployeesDash.css';

// Register ag-grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeesDash = () => {
    const gridRef = useRef();
    const [rowData] = useState(employeeData);
    const [searchText, setSearchText] = useState('');

    const EmployeeRenderer = ({ data }) => {
        if (!data) return null;
        return (
            <div className="cell-avatar">
                <div>
                    <div style={{ fontWeight: 500 }}>{data.firstName} {data.lastName}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1 }}>{data.email}</div>
                </div>
            </div>
        );
    };

    const StatusBadge = ({ value }) => {
        const isActive = value === true;
        return (
            <div className={`cell-status ${isActive ? 'active' : 'inactive'}`}>
                <span className="status-dot"></span>
                {isActive ? 'Active' : 'Inactive'}
            </div>
        );
    };

    const StarRating = ({ value }) => {
        const rating = Math.round(value);
        return (
            <div className="cell-rating">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        fill={i < rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeOpacity={i < rating ? 1 : 0.3}
                    />
                ))}
                <span style={{ marginLeft: '6px', color: 'var(--text-secondary)', fontSize: '12px' }}>
                    {value}
                </span>
            </div>
        );
    };

    const SkillTags = ({ value }) => {
        const skills = value || [];
        const displaySkills = skills.slice(0, 2);
        const remaining = skills.length - 2;

        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {displaySkills.map((skill, idx) => (
                    <span key={idx} className="skill-pill">{skill}</span>
                ))}
                {remaining > 0 && (
                    <span className="skill-pill" style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}>
                        +{remaining}
                    </span>
                )}
            </div>
        );
    };

    const colDefs = useMemo(() => [
        {
            field: 'firstName',
            headerName: 'Employee',
            width: 250,
            cellRenderer: EmployeeRenderer,
            pinned: 'left',
            filter: 'agTextColumnFilter',
            checkboxSelection: true,
            headerCheckboxSelection: true
        },
        {
            field: 'department',
            headerName: 'Department',
            width: 140,
            filter: 'agSetColumnFilter',
            cellStyle: { fontWeight: 500 }
        },
        {
            field: 'position',
            headerName: 'Role',
            width: 180,
        },
        {
            field: 'salary',
            headerName: 'Salary',
            width: 120,
            filter: 'agNumberColumnFilter',
            cellStyle: { fontFamily: 'monospace', letterSpacing: '-0.5px' }
        },
        {
            field: 'isActive',
            headerName: 'Status',
            width: 120,
            cellRenderer: StatusBadge
        },
        {
            field: 'performanceRating',
            headerName: 'Rating',
            width: 150,
            cellRenderer: StarRating,
            filter: 'agNumberColumnFilter'
        },
        {
            field: 'skills',
            headerName: 'Skills',
            width: 200,
            cellRenderer: SkillTags,
            sortable: false
        },
        {
            field: 'location',
            headerName: 'Office',
            width: 130
        }
    ], []);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        minWidth: 100
    }), []);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="header-title">
                    <h1>Employee Dashboard</h1>
                </div>
            </div>

            <div className="grid-section">
                <div className="grid-toolbar">
                    <div className="search-bar">
                        <Search size={18} color="var(--text-secondary)" />
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="record-count">
                        <Filter size={16} />
                        <span>{rowData.length} Records</span>
                    </div>
                </div>

                <div className="ag-theme-alpine-dark" style={{ height: '100%', width: '100%' }}>
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={colDefs}
                        defaultColDef={defaultColDef}
                        quickFilterText={searchText}
                        pagination={true}
                        paginationPageSize={10}
                        rowSelection="multiple"
                        animateRows={true}
                        rowHeight={60}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeesDash;
