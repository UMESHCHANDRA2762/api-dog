// src/components/layout/main-content.tsx

import React from 'react';
import "./MainContent.css"; // We'll keep this for container styling

// UPDATED: The component now only needs to know about the active component
type MainContentProps = {
  activeComponent: React.ReactNode;
};

export function MainContent({ activeComponent }: MainContentProps) {
  return (
    // The main area now directly renders the component inside a styled container
    <main className="main-area">
      <div className="content-container">
        {activeComponent}
      </div>
    </main>
  );
}