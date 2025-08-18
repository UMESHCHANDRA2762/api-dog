"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PrimarySidebar } from "./components/layout/primary-sidebar";
import { SecondarySidebar } from "./components/layout/secondary-sidebar";
import { MainContent } from "./components/layout/main-content"; // REMOVED: TabData from import
import { Footer } from "./components/layout/footer";
import { TopNavbar } from "./components/layout/TopNavbar";
import { ResizableContainer } from "./components/layout/ResizableContainer";
import { erpData } from "./components/erp-data";

export default function DashboardPage() {
  const [selectedModuleKey, setSelectedModuleKey] = useState("Organization");
  
  // REMOVED: State for tabs and activeKey is gone.
  // NEW: State to hold the single active component.
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
    <h2>Welcome to your Dashboard!</h2>
  );

  const handleModuleSelect = (moduleKey: string) => {
    setSelectedModuleKey(moduleKey);
  };

  // UPDATED: This function now simply sets the active component.
  const handleSetContent = (component: React.ReactNode) => {
    setActiveComponent(component);
  };

  // REMOVED: handleCloseTab is no longer needed.

  return (
    <Container fluid className="p-0 d-flex flex-column vh-100">
      <TopNavbar />
      <Row className="g-0 flex-grow-1" style={{ overflow: 'hidden' }}>
        <Col xs="auto">
          <PrimarySidebar
            onModuleSelect={handleModuleSelect}
            activeModuleKey={selectedModuleKey}
          />
        </Col>
        <Col className="p-0 d-flex flex-column">
          <ResizableContainer
            leftPanel={
              // UPDATED: Pass the new handleSetContent function
              <SecondarySidebar 
                moduleData={erpData[selectedModuleKey]}
                onSetContent={handleSetContent} 
              />
            }
            rightPanel={
              <div className="d-flex flex-column h-100">
                <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
                  {/* UPDATED: Pass the single active component */}
                  <MainContent 
                    activeComponent={activeComponent}
                  />
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