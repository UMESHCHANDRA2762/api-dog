export function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-between px-4 py-1 fs-xs border-top app-footer text-secondary small">
      <div>
        <i className="bi bi-grip-vertical"></i>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-4"><i className="bi bi-wifi text-success me-1"></i>Online</span>
        <span className="me-4">Request Proxy</span>
        <span className="me-4"><i className="bi bi-cookie me-1"></i>Cookies</span>
        <span className="me-4"><i className="bi bi-trash me-1"></i>Trash</span>
        <span><i className="bi bi-life-preserver me-1"></i>Help & support</span>
      </div>
    </footer>
  );
}