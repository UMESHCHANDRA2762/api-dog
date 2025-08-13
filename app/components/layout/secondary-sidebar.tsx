import { InputGroup, Form, Button, ListGroup } from "react-bootstrap";

const treeItems = [
  { icon: "bi-chevron-down", label: "Endpoints" },
  { icon: "bi-chevron-right", label: "Schemas" },
  { icon: "bi-chevron-right", label: "Components" },
  { icon: "bi-chevron-right", label: "Requests" },
];

export function SecondarySidebar() {
  return (
    <div className="p-2 d-flex flex-column h-100">
      <div className="p-2">
        <h2 className="fs-5 fw-bold">APIs</h2>
      </div>
      <div className="p-2">
        <InputGroup>
          <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
          <Form.Control placeholder="Search" />
          <Button variant="outline-secondary"><i className="bi bi-plus"></i></Button>
        </InputGroup>
      </div>
      <div className="flex-grow-1 p-2">
        <div className="d-flex align-items-center tree-item">
          <i className="bi bi-chevron-down me-2"></i>
          <span>Default module</span>
        </div>
        <ListGroup variant="flush" className="ps-3 mt-1">
          {treeItems.map((item) => (
            <ListGroup.Item key={item.label} className="d-flex align-items-center border-0 p-0 tree-item">
              <i className={`${item.icon} me-2`}></i>
              <span>{item.label}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}