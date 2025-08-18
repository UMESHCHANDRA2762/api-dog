// src/components/forms/DefineOrganizationForm.tsx

"use client";

import { Form, Row, Col, Button } from 'react-bootstrap';

export function DefineOrganizationForm() {
  return (
    // A simple container using Bootstrap classes for padding
    <div className="p-4">
      <h3 className="mb-4 fw-light">Define Company</h3>

      {/* This Row and Col structure makes the form left-aligned and controls its width */}
      <Row>
        <Col lg={8} xl={7}>
          <Form>
            {/* Field 1: Company */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCompany">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Organization</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text"  />
              </Col>
            </Form.Group>

            {/* Field 2: Company Name */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCompanyName">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Company name</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text"/>
              </Col>
            </Form.Group>
            
            {/* Field 3: Name of company 2 */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCompanyName2">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Name of company 2</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            {/* Field 4: Street */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formStreet">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Street</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            {/* Field 5: PO Box */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formPoBox">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">PO Box</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text"  />
              </Col>
            </Form.Group>

            {/* Field 6: Postal Code */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formPostalCode">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Postal code</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            {/* Field 7: City */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCity">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">City</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            {/* Field 8: Country/Region */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCountryRegion">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Country/Region</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text"  />
              </Col>
            </Form.Group>
            
            {/* Field 9: Language Key */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formLanguageKey">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Language Key</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text"  />
              </Col>
            </Form.Group>
            
            {/* Field 10: Currency */}
            <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCurrency">
              <Col sm={4}>
                <Form.Label className="text-sm-end mb-0">Currency</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control type="text"  />
              </Col>
            </Form.Group>

            {/* Buttons */}
            <Row>
              <Col sm={{ span: 8, offset: 4 }}>
                <div className="mt-2 d-flex justify-content-start">
                  <Button variant="primary" type="submit" className="me-2">
                    Save
                  </Button>
                  <Button variant="secondary">
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}