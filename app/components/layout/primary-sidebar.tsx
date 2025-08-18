// src/components/PrimarySidebar.tsx

import { Nav } from "react-bootstrap";

// Define a type for the navigation items
type NavItem = {
  id: string;
  icon: string;
  label: string;
};

// Define the type for the component's props
type PrimarySidebarProps = {
  onModuleSelect: (moduleKey: string) => void;
  activeModuleKey: string;
};

// All primary navigation items
const allNavItems: NavItem[] = [
  { id: "Organization", icon: "bi-building-up", label: "Organization" },
  { id: "Finance", icon: "bi-coin", label: "Finance" },
  { id: "Human Resource", icon: "bi-microsoft-teams", label: "Human Resource" },
  { id: "Inventory", icon: "bi-box-seam", label: "Inventory" },
  { id: "Manufacturing", icon: "bi-diagram-3", label: "Manufacturing" },
  { id: "Settings", icon: "bi-gear", label: "Settings" },
];

export function PrimarySidebar({ onModuleSelect, activeModuleKey }: PrimarySidebarProps) {
  return (
    <div className="d-flex flex-column align-items-center h-100 pt-4 pb-2 bg-light border-end">
      <div className="p-2">
        <i className="bi bi-app-indicator fs-2 text-primary"></i>
      </div>
      <Nav className="flex-column w-100 flex-grow-1 justify-content-start mt-4 gap-2">
        {allNavItems.map((item) => (
          <Nav.Link
            key={item.id}
            href="#"
            onClick={() => onModuleSelect(item.id)}
            className={`d-flex flex-column align-items-center text-center p-2 ${
              item.id === activeModuleKey ? "text-primary" : "text-secondary"
            }`}
          >
            <i className={`${item.icon} fs-3`}></i>
            <span style={{ fontSize: "0.7rem" }} className="mt-1">
              {item.label}
            </span>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}