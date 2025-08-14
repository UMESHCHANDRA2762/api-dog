"use client";

import React, { useState, useRef, useCallback, ReactNode } from 'react';

type ResizableContainerProps = {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
};

export function ResizableContainer({ leftPanel, rightPanel }: ResizableContainerProps) {
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = startWidth + moveEvent.clientX - startX;
      if (newWidth >= 200 && newWidth <= 500) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [sidebarWidth]);

  return (
   <div className="resizable-container content-card" ref={containerRef}>
      <div className="resizable-panel" style={{ width: `${sidebarWidth}px` }}>
        {leftPanel}
      </div>
      <div
        className="resizable-handle-custom"
        onMouseDown={handleMouseDown}
      />
      <div className="resizable-panel flex-grow-1">
        {rightPanel}
      </div>
    </div>
  );
}