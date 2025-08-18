// src/components/forms/DefineCompanyCodeForm.tsx

"use client";

import { Form, Row, Col, Button } from 'react-bootstrap';
import "./Form.css"; // Reuse the same professional form styles

export function DefineCompanyCodeForm() {
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h3>Create Company Code</h3>
      </div>

      <div className="form-body">
        <Row>
          <Col lg={9} xl={8}>
            <Form>
              <h4 className="form-section-header">Company Details</h4>
              
              <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCompanyCode">
                <Col sm={3}><Form.Label className="text-sm-end mb-0">Company Code</Form.Label></Col>
                <Col sm={9}><Form.Control type="text" /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCompanyName">
                <Col sm={3}><Form.Label className="text-sm-end mb-0">Company Name</Form.Label></Col>
                <Col sm={9}><Form.Control type="text" /></Col>
              </Form.Group>

              <h4 className="form-section-header">Additional Data</h4>

              <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCity">
                <Col sm={3}><Form.Label className="text-sm-end mb-0">City</Form.Label></Col>
                <Col sm={9}><Form.Control type="text" /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCountry">
                <Col sm={3}><Form.Label className="text-sm-end mb-0">Country</Form.Label></Col>
                <Col sm={9}><Form.Control type="text" /></Col>
              </Form.Group>
              
              <Form.Group as={Row} className="mb-3 align-items-center" controlId="formCurrency">
                <Col sm={3}><Form.Label className="text-sm-end mb-0">Currency</Form.Label></Col>
                <Col sm={9}><Form.Control type="text" /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center" controlId="formLanguage">
                <Col sm={3}><Form.Label className="text-sm-end mb-0">Language</Form.Label></Col>
                <Col sm={9}><Form.Control type="text" /></Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>

      <div className="form-footer">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary" type="submit">Save</Button>
      </div>
    </div>
  );
}