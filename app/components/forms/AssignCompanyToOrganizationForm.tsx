import React, { useState } from 'react';
import { Card, Table, Form, Button, Container } from 'react-bootstrap';

// Define the type for an assignment entry
type Assignment = {
  coCd: string;
  company: string;
  city: string;
};

// NEW: Define the initial state for a blank row
const blankRow: Assignment = {
    coCd: '',
    company: '',
    city: ''
};

export function AssignCompanyToOrganizationForm() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  // NEW: State to manage the data being typed into the new table row
  const [newEntry, setNewEntry] = useState<Assignment>(blankRow);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEntry(prevEntry => ({
      ...prevEntry,
      [name]: value.toUpperCase()
    }));
  };

  const handleSave = () => {
    // Check if any of the required fields are empty
    if (!newEntry.coCd || !newEntry.company || !newEntry.city) {
      alert('Please fill in all fields for the new assignment.');
      return;
    }

    // Add the new entry to the assignments list
    setAssignments([...assignments, newEntry]);
    
    // Clear the input row for the next entry
    setNewEntry(blankRow);
  };

  return (
    <Container fluid className="p-0">
      <Card>
        <Card.Header as="h4" className="fw-bold">
          Assign Company Code to Company
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead className="table-light">
              <tr>
                <th>CoCd</th>
                <th>Company</th>
                <th>City</th>
                <th style={{ width: '120px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Display existing, saved rows */}
              {assignments.map((item, index) => (
                <tr key={index}>
                  <td>{item.coCd}</td>
                  <td>{item.company}</td>
                  <td>{item.city}</td>
                  <td></td>
                </tr>
              ))}

              {/* UPDATED: Input fields are now directly in a new table row */}
              <tr>
                <td>
                  <Form.Control
                    type="text"
                    name="coCd"
                    placeholder="New CoCd..."
                    value={newEntry.coCd}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="company"
                    placeholder="New Company..."
                    value={newEntry.company}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="New City..."
                    value={newEntry.city}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <Button variant="primary" onClick={handleSave} className="w-100">
                    <i className="bi bi-plus-circle-fill me-2"></i> Add
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      
      {/* REMOVED: The entire separate "New Entry" form section is gone */}
    </Container>
  );
}