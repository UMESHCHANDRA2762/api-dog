import { InputGroup, Form, Button, ListGroup } from "react-bootstrap";
import "./SecondarySidebar.css"
// Define types for props to ensure type safety
type TreeItem = {
  icon: string;
  label: string;
};

type ModuleData = {
  title: string;
  tree: TreeItem[];
};

export function SecondarySidebar({ moduleData }: { moduleData: ModuleData }) {
  if (!moduleData) {
    return null;
  }

  return (
    <div className="p-3 d-flex flex-column h-100 secondary-sidebar-pro">
      {/* Header Title */}
      <div className="mb-3">
        <h2 className="fs-5 fw-bold mb-0">{moduleData.title}</h2>
      </div>

      {/* Control row with Search, Filter, and Add buttons */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <InputGroup className="flex-grow-1">
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control placeholder="Search..." />
        </InputGroup>
        
        {/* Filter Button */}
        <Button variant="outline-secondary" className="flex-shrink-0">
          <i className="bi bi-filter"></i>
        </Button>

        {/* Add Button */}
        <Button variant="outline-secondary" className="flex-shrink-0">
          <i className="bi bi-plus"></i>
        </Button>
      </div>

      {/* Tree View Area */}
      <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
        <div className="d-flex align-items-center tree-item active-tree-item">
          <i className="bi bi-chevron-down me-2"></i>
          <span>Default module</span>
        </div>
        <ListGroup variant="flush" className="ps-3 mt-1">
          {moduleData.tree.map((item) => (
            <ListGroup.Item
              key={item.label}
              className="d-flex align-items-center border-0 p-0 tree-item"
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
