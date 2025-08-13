"use client";

import { Container, Row, Col } from "react-bootstrap";
import { PrimarySidebar } from "./components/layout/primary-sidebar";
import { SecondarySidebar } from "./components/layout/secondary-sidebar";
import { MainContent } from "./components/layout/main-content";
import { Footer } from "./components/layout/footer";

export default function DashboardPage() {
  return (
    <Container fluid className="p-0 dashboard-layout">
      <Row className="g-0 main-content-row">
        {/* Primary Sidebar */}
        <Col xs={1} className="primary-sidebar">
          <PrimarySidebar />
        </Col>

        {/* Secondary Sidebar */}
        <Col xs={2} className="secondary-sidebar">
          <SecondarySidebar />
        </Col>

        {/* Main Content Area */}
        <Col className="p-0 d-flex flex-column">
          <MainContent />
        </Col>
      </Row>
      
      {/* Footer */}
      <Row className="g-0">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}