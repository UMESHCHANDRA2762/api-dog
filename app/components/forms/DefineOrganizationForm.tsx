// src/components/forms/DefineOrganizationForm.tsx

"use client";

import { useState } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';

// This defines the structure of the data we'll send to the backend
interface OrganizationData {
  organization: string;
  name: string;
  name2: string;
  address: {
    street: string;
    poBox: string;
    postalCode: string;
    city: string;
    country: string;
  };
  language: string;
  currency: string;
}

export function DefineOrganizationForm() {
  // State to hold all form data
  const [formData, setFormData] = useState<OrganizationData>({
    organization: '',
    name: '',
    name2: '',
    address: {
      street: '',
      poBox: '',
      postalCode: '',
      city: '',
      country: '',
    },
    language: '',
    currency: '',
  });

  // State for showing success/error messages
  const [message, setMessage] = useState<{type: 'success' | 'danger', text: string} | null>(null);

  // A single handler to update the state for any input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    // Handle nested address fields
    if (['street', 'poBox', 'postalCode', 'city', 'country'].includes(id)) {
      setFormData(prev => ({
        ...prev,
        address: { ...prev.address, [id]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the browser from reloading the page
    setMessage(null);   // Clear previous messages

    try {
      const response = await fetch('http://localhost:8080/api/finance/organizations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // If the server responds with an error, throw an error
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save organization');
      }

      // If successful, show a success message
      const savedData = await response.json();
      console.log('Organization saved:', savedData);
      setMessage({ type: 'success', text: 'Organization saved successfully!' });
      // Optionally, you can reset the form here
      
    } catch (error) {
      console.error('Submission error:', error);
      setMessage({ type: 'danger', text: (error as Error).message });
    }
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 fw-light">Define Company</h3>

      <Row>
        <Col lg={8} xl={7}>
          {/* We attach our handleSubmit function to the form's onSubmit event */}
          <Form onSubmit={handleSubmit}>

            {/* --- Section 1: Basic Information --- */}
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Organization</Form.Label></Col>
              <Col sm={8}><Form.Control id="organization" type="text" value={formData.organization} onChange={handleChange} required /></Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Company name</Form.Label></Col>
              <Col sm={8}><Form.Control id="name" type="text" value={formData.name} onChange={handleChange} required /></Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Name of company 2</Form.Label></Col>
              <Col sm={8}><Form.Control id="name2" type="text" value={formData.name2} onChange={handleChange} /></Col>
            </Form.Group>

            {/* --- Section 2: Address Details (NEW Separator & Heading) --- */}
            <h5 className="mt-4 pt-3 mb-3 fw-normal border-top">Address Details</h5>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Street</Form.Label></Col>
              <Col sm={8}><Form.Control id="street" type="text" value={formData.address.street} onChange={handleChange} /></Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">PO Box</Form.Label></Col>
              <Col sm={8}><Form.Control id="poBox" type="text" value={formData.address.poBox} onChange={handleChange} /></Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Postal code</Form.Label></Col>
              <Col sm={8}><Form.Control id="postalCode" type="text" value={formData.address.postalCode} onChange={handleChange} /></Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">City</Form.Label></Col>
              <Col sm={8}><Form.Control id="city" type="text" value={formData.address.city} onChange={handleChange} /></Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Country/Region</Form.Label></Col>
              <Col sm={8}><Form.Control id="country" type="text" value={formData.address.country} onChange={handleChange} /></Col>
            </Form.Group>
            
            {/* --- Section 3: Regional Settings (NEW Separator & Heading) --- */}
            <h5 className="mt-4 pt-3 mb-3 fw-normal border-top">Regional Settings</h5>

            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Language Key</Form.Label></Col>
              <Col sm={8}><Form.Control id="language" type="text" value={formData.language} onChange={handleChange} /></Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3 align-items-center">
              <Col sm={4}><Form.Label className="text-sm-end mb-0">Currency</Form.Label></Col>
              <Col sm={8}><Form.Control id="currency" type="text" value={formData.currency} onChange={handleChange} /></Col>
            </Form.Group>

            {/* --- Buttons and Messages --- */}
            <Row className="mt-4 pt-3 border-top">
              <Col sm={{ span: 8, offset: 4 }}>
                {message && <Alert variant={message.type} className="mt-3">{message.text}</Alert>}
                <div className="mt-2 d-flex justify-content-start">
                  <Button variant="primary" type="submit" className="me-2">Save</Button>
                  <Button variant="secondary" type="button">Cancel</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}