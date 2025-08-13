import { Button, Dropdown } from "react-bootstrap";
import { ApidogLogo } from "../../components/icons/apidog-logo";

export function MainContent() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-3 border-bottom main-header">
        <div className="fw-semibold">task 1</div>
        <div className="d-flex align-items-center">
          <Button variant="primary" className="me-3">Upgrade</Button>
          <div className="d-flex align-items-center text-secondary me-3">
             <Button variant="link" className="text-secondary"><i className="bi bi-person fs-5"></i></Button>
             <Button variant="link" className="text-secondary"><i className="bi bi-bell fs-5"></i></Button>
             <Button variant="link" className="text-secondary"><i className="bi bi-gear fs-5"></i></Button>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="w-100">
              Select environment
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">No Environment</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Development</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Production</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <main className="flex-grow-1 d-flex align-items-center justify-content-center main-area">
        <div style={{ color: '#e2e8f0' }}> {/* Using inline style for the specific SVG color */}
          <ApidogLogo className="w-100 h-100" style={{ width: '6rem', height: '6rem' }} />
        </div>
      </main>
    </>
  );
}