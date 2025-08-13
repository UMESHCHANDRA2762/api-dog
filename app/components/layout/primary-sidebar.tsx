import { Nav } from "react-bootstrap";

// Updated navigation items with new icons and labels
const navItems = [
  { icon: "bi-building-up", label: "Organization", active: true },
  { icon: "bi-coin", label: "Finance" },
  { icon: "bi-microsoft-teams", label: "Human Resource" },
  { icon: "bi-box-seam", label: "Inventory" }, // A suitable icon for Inventory
  { icon: "bi-gear", label: "Settings" },
];

export function PrimarySidebar() {
  return (
    <div className="d-flex flex-column align-items-center h-100 p-2 pt-4">
      <Nav className="flex-column w-100">
        {navItems.map((item) => (
          <Nav.Link
            key={item.label}
            href="#"
            // Use text-primary for the active link, otherwise text-secondary
            className={`d-flex flex-column align-items-center text-center p-2 mb-3 ${
              item.active ? 'text-primary' : 'text-secondary'
            }`}
          >
            {/* Larger icon */}
            <i className={`${item.icon} fs-3`}></i>
            {/* Small text label below the icon */}
            <span style={{ fontSize: '0.7rem' }} className="mt-1">{item.label}</span>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}