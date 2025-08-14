import { Button } from "react-bootstrap";
import "../../globals.css"

export function TopNavbar() {
  // This function will be called when the user icon is clicked
  const handleUserIconClick = () => {
    console.log("Login action triggered!");
    // In a real app, you would open a login modal or navigate to a login page here.
  };

  return (
    // MODIFIED: 'py-2' was changed to 'py-1' to reduce the top and bottom padding
    <header className="d-flex align-items-center justify-content-between py-1 px-3 primary-sidebar">
      <div className="fw-semibold"></div>
      <div className="d-flex align-items-center">
        <Button variant="primary" className="me-3">Upgrade</Button>
        <div className="d-flex align-items-center text-secondary me-3">
          
          {/* MODIFIED: Added a className and an onClick handler */}
          <Button 
            variant="link" 
            className="text-secondary user-icon-btn"
            onClick={handleUserIconClick}
          >
            <i className="bi bi-person fs-5"></i>
          </Button>

          <Button variant="link" className="text-secondary"><i className="bi bi-bell fs-5"></i></Button>
          <Button variant="link" className="text-secondary"><i className="bi bi-gear fs-5"></i></Button>
        </div>
        
        {/* REMOVED: The entire Dropdown component was deleted from here */}
      </div>
    </header>
  );
}
