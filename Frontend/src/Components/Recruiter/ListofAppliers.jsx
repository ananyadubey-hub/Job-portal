import React from 'react'
import './ApplierList.css';

function ListApplier()
{
    // Sample data for applicants
    const applicants = [
      {
        id: 1,
        name: 'John Doe',
        position: 'Frontend Developer',
        experience: '3 years',
        status: 'Pending',
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Backend Developer',
        experience: '5 years',
        status: 'Reviewed',
      },
      {
        id: 3,
        name: 'Mike Johnson',
        position: 'Full Stack Developer',
        experience: '4 years',
        status: 'Accepted',
      },
      {
        id: 4,
        name: 'John Doe',
        position: 'Frontend Developer',
        experience: '3 years',
        status: 'Pending',
      },
      {
        id: 5,
        name: 'Jane Smith',
        position: 'Backend Developer',
        experience: '5 years',
        status: 'Reviewed',
      },
      {
        id: 6,
        name: 'Mike Johnson',
        position: 'Full Stack Developer',
        experience: '4 years',
        status: 'Accepted',
      },
      {
        id: 7,
        name: 'John Doe',
        position: 'Frontend Developer',
        experience: '3 years',
        status: 'Pending',
      },
      {
        id: 8,
        name: 'Jane Smith',
        position: 'Backend Developer',
        experience: '5 years',
        status: 'Reviewed',
      },
      {
        id: 9,
        name: 'Mike Johnson',
        position: 'Full Stack Developer',
        experience: '4 years',
        status: 'Accepted',
      }
    ];
  
    return (
      <div className="containe-fluid" style={{backgroundColor: '#f5f5f5'}}>
      <div className="applier-list-container">
        <h2 className="title">List of Appliers</h2>
        <div className="card-grid">
          {applicants.map(applicant => (
            <div className="applier-card" key={applicant.id}>
              <h3 className="applicant-name">{applicant.name}</h3>
              <p><strong>Position Applied:</strong> {applicant.position}</p>
              <p><strong>Experience:</strong> {applicant.experience}</p>
              <p><strong>Status:</strong> <span className={`status ${applicant.status.toLowerCase()}`}>{applicant.status}</span></p>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
}

export default ListApplier;