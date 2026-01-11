function Dashboard({ employees, clearAllEmployees }) {
  const totalEmployees = employees.length

  const activeEmployees = employees.filter(emp => emp.status === 'active').length
  const inactiveEmployees = employees.filter(emp => emp.status === 'inactive').length

  const recentlyAdded = employees.length > 0
    ? employees.reduce((latest, emp) =>
      new Date(emp.createdAt) > new Date(latest.createdAt) ? emp : latest
    )
    : null

  const totalSalary = employees.reduce((sum, emp) =>
    sum + parseFloat(emp.salary || 0), 0
  )

  const avgSalary = totalEmployees > 0 ? totalSalary / totalEmployees : 0

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(salary)
  }

  const getDepartmentCounts = () => {
    const counts = {}
    employees.forEach(emp => {
      counts[emp.department] = (counts[emp.department] || 0) + 1
    })
    return counts
  }

  const departmentCounts = getDepartmentCounts()

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        {totalEmployees > 0 && (
          <button onClick={clearAllEmployees} className="btn btn-danger">
            Clear All Employees
          </button>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-content">
            <h3>Total Employees</h3>
            <p className="stat-value">{totalEmployees}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <h3>Active</h3>
            <p className="stat-value">{activeEmployees}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <h3>Inactive</h3>
            <p className="stat-value">{inactiveEmployees}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <h3>Avg Salary</h3>
            <p className="stat-value">{formatSalary(avgSalary)}</p>
          </div>
        </div>
      </div>

      {recentlyAdded && (
        <div className="recent-employee">
          <h3>Recently Added Employee</h3>
          <div className="recent-card">
            <div className="recent-avatar">
              {recentlyAdded.image ? (
                <img
                  src={recentlyAdded.image}
                  alt={recentlyAdded.name}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              ) : null}
              <div
                className="avatar-placeholder"
                style={{ display: recentlyAdded.image ? 'none' : 'flex' }}
              >
                {recentlyAdded.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="recent-info">
              <h4>{recentlyAdded.name}</h4>
              <p>{recentlyAdded.position}</p>
              <p className="recent-department">{recentlyAdded.department}</p>
            </div>
            <div className="recent-status">
              <span className={`status-badge ${recentlyAdded.status === 'active' ? 'status-active' : 'status-inactive'}`}>
                {recentlyAdded.status}
              </span>
            </div>
          </div>
        </div>
      )}

      
    </div>
  )
}

export default Dashboard
