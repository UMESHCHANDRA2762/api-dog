import { Nav } from "react-bootstrap";

// Define a type for the navigation items to ensure type safety
type NavItem = {
  id: string; // Use a unique ID that matches the keys in your data
  icon: string;
  label: string;
};

// Define the type for the component's props
type PrimarySidebarProps = {
  onModuleSelect: (moduleKey: string) => void;
  activeModuleKey: string;
};

// All navigation items, with IDs matching the data keys
const allNavItems: NavItem[] = [
  { id: "Organization", icon: "bi-building-up", label: "Organization" },
  { id: "Finance", icon: "bi-coin", label: "Finance" },
  { id: "Human Resource", icon: "bi-microsoft-teams", label: "Human Resource" },
  { id: "Inventory", icon: "bi-box-seam", label: "Inventory" },
  { id: "Manufacturing", icon: "bi-diagram-3", label: "Manufacturing" },
  { id: "Settings", icon: "bi-gear", label: "Settings" },
];

/**
 * Primary Sidebar Component
 * @param {object} props - The component props.
 * @param {function} props.onModuleSelect - Function to call when a module is selected.
 * @param {string} props.activeModuleKey - The key of the currently active module.
 */
export function PrimarySidebar({ onModuleSelect, activeModuleKey }: PrimarySidebarProps) {
  return (
    <div className="d-flex flex-column align-items-center h-100 pt-4 pb-2">
      {/* Top Application Icon */}
      <div className="p-2">
        <i className="bi bi-app-indicator fs-2 text-primary"></i>
      </div>

      {/* MODIFIED: Changed 'justify-content-between' to 'justify-content-start' */}
      <Nav className="flex-column w-100 flex-grow-1 justify-content-start mt-4 gap-2">
        {allNavItems.map((item) => (
          <Nav.Link
            key={item.id}
            href="#"
            // When clicked, it calls the function passed from the parent page
            onClick={() => onModuleSelect(item.id)}
            // The 'active' state is now determined by the prop from the parent
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
