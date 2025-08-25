import React, { useState } from 'react';
import { Card, Table, Form, Button, Container, Row, Col } from 'react-bootstrap';

// Define the data structure for a business area
type BusinessArea = {
  area: string;
  description: string;
};

// Define the blank state for the input form
const blankArea: BusinessArea = { area: '', description: '' };

export function DefineBusinessAreaForm() {
  // State to hold the list of saved business areas, starts empty
  const [businessAreas, setBusinessAreas] = useState<BusinessArea[]>([]);
  
  // State to manage the data in the input fields
  const [newEntry, setNewEntry] = useState<BusinessArea>(blankArea);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({
      ...prev,
      // Enforce 4-digit max for area and apply uppercase
      [name]: name === 'area' ? value.toUpperCase().slice(0, 4) : value
    }));
  };

  const handleSave = () => {
    if (!newEntry.area || !newEntry.description) {
      alert('Please fill in both Business Area and Description fields.');
      return;
    }
    setBusinessAreas(prev => [...prev, newEntry]);
    setNewEntry(blankArea); // Clear the input fields after saving
  };

  return (
    <Container fluid className="p-0">
      <Card>
        <Card.Header as="h4" className="fw-bold">
          Change View "Business areas": Overview
        </Card.Header>
        <Card.Body>
          <h5 className="fw-bold">New Entries</h5>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <Row className="g-3 align-items-end">
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Business Area</Form.Label>
                  <Form.Control
                    type="text"
                    name="area"
                    placeholder="4-digit code"
                    value={newEntry.area}
                    onChange={handleInputChange}
                    maxLength={4}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Name of business area"
                    value={newEntry.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Button variant="primary" type="submit" className="w-100">
                  <i className="bi bi-save me-2"></i> Save Settings
                </Button>
              </Col>
            </Row>
          </Form>

          <hr className="my-4" />

          <h5 className="fw-bold">Overview of Added Entries</h5>
          <Table striped bordered hover responsive>
            <thead className="table-light">
              <tr>
                <th>Business Area</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {businessAreas.length > 0 ? (
                businessAreas.map((item, index) => (
                  <tr key={index}>
                    <td>{item.area}</td>
                    <td>{item.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="text-center">No business areas defined yet.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}