"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PrimarySidebar } from "./components/layout/primary-sidebar";
import { SecondarySidebar } from "./components/layout/secondary-sidebar";
import { MainContent } from "./components/layout/main-content";
import { Footer } from "./components/layout/footer";
import { TopNavbar } from "./components/layout/TopNavbar";
import { ResizableContainer }  from "./components/layout/ResizableContainer";
import { erpData } from "./components/erp-data"; // Import the new data

export default function DashboardPage() {
  // State to track the currently selected module. Default to 'Organization'.
  const [selectedModuleKey, setSelectedModuleKey] = useState("Organization");

  // MODIFIED: Added the 'string' type to the moduleKey parameter
  const handleModuleSelect = (moduleKey: string) => {
    setSelectedModuleKey(moduleKey);
  };

  return (
    <Container fluid className="p-0 dashboard-layout">
      <TopNavbar />

      <Row className="g-0 main-content-row">
        <Col xs="auto" className="primary-sidebar">
          {/* Pass the handler and the active key to the PrimarySidebar */}
          <PrimarySidebar
            onModuleSelect={handleModuleSelect}
            activeModuleKey={selectedModuleKey}
          />
        </Col>

        <Col className="p-0 d-flex">
          <ResizableContainer
            leftPanel={
              // Pass the data for the selected module to the SecondarySidebar
              <SecondarySidebar moduleData={erpData[selectedModuleKey]} />
            }
            rightPanel={
              <div className="d-flex flex-column h-100">
                <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
                  <MainContent />
                </div>
                <Footer />
              </div>
            }
          />
        </Col>
      </Row>
    </Container>
  );
}
