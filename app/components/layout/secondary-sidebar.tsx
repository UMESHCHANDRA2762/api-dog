// src/components/layout/secondary-sidebar.tsx

import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { ModuleData } from "../erp-data";
import { getComponentForLabel } from "../../lib/component-mapper";
import "./secondary-sidebar.css";

// REMOVED: The import for TabData is no longer needed.

// UPDATED: The component's props now expect a simpler onSetContent function.
type SecondarySidebarProps = {
  moduleData: ModuleData | undefined;
  onSetContent: (component: React.ReactNode) => void;
};

export function SecondarySidebar({ moduleData, onSetContent }: SecondarySidebarProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // UPDATED: The click handler now passes only the component, not a TabData object.
  const handleItemClick = (label: string) => {
    setActiveItem(label);
    const component = getComponentForLabel(label);

    if (component) {
      onSetContent(component);
    }
  };

  if (!moduleData) {
    return (
        <div className="p-3 d-flex flex-column h-100 bg-white border-end">
            <h2 className="fs-5 fw-bold mb-0">Select a Module</h2>
        </div>
    );
  }

  return (
    <div className="p-3 d-flex flex-column h-100 bg-white border-end">
      <div className="mb-3">
        <h2 className="fs-5 fw-bold mb-0">{moduleData.title}</h2>
      </div>
      <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
        <ListGroup variant="flush">
          {moduleData.tree.map((item, index) => (
            <ListGroup.Item
              key={index}
              action
              href="#"
              onClick={() => handleItemClick(item.label)}
              className={`d-flex align-items-center tree-item ${
                item.label === activeItem ? 'active' : ''
              }`}
            >
              <i className={`${item.icon} me-2`}></i>
              <span>{item.label}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}