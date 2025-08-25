// src/app/page.tsx (or your dashboard page)
"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PrimarySidebar } from "./components/layout/primary-sidebar";
import { SecondarySidebar } from "./components/layout/secondary-sidebar";
import { MainContent } from "./components/layout/main-content";
import { Footer } from "./components/layout/footer";
import { TopNavbar } from "./components/layout/TopNavbar";
import { ResizableContainer } from "./components/layout/ResizableContainer";
import { erpData, ModuleData } from "./components/erp-data";
import { getComponentForLabel } from "./lib/component-mapper"; // Assuming you have this mapper

export default function DashboardPage() {
  const [selectedModuleKey, setSelectedModuleKey] = useState<string>(Object.keys(erpData)[0]);
  const selectedModule = erpData[selectedModuleKey];

  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
    // Set initial content based on the first item of the first module
    getComponentForLabel(selectedModule.tree[0].label)
  );

  const handleModuleSelect = (moduleKey: string) => {
    setSelectedModuleKey(moduleKey);
    // When a new module is selected, default to its first item
    const newModule = erpData[moduleKey];
    if (newModule && newModule.tree.length > 0) {
      setActiveComponent(getComponentForLabel(newModule.tree[0].label));
    }
  };

  const handleSetContent = (component: React.ReactNode) => {
    setActiveComponent(component);
  };

  return (
    <Container fluid className="p-0 app-container">
      <TopNavbar />
      
      <Row className="g-0 main-layout-row">
        <Col xs="auto" className="primary-sidebar-col">
          <PrimarySidebar
            onModuleSelect={handleModuleSelect}
            activeModuleKey={selectedModuleKey}
          />
        </Col>

        <Col className="content-col">
          <ResizableContainer
            leftPanel={
              <SecondarySidebar
                moduleData={selectedModule}
                onSetContent={handleSetContent}
              />
            }
            rightPanel={
              <div className="right-panel-container">
                <div className="main-content-wrapper">
                  <MainContent activeComponent={activeComponent} />
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