// src/components/layout/ResizableContainer.tsx
"use client";

import React, { useState, useRef, useCallback, ReactNode } from 'react';
import './ResizableContainer.css'; // We'll create this CSS file

type ResizableContainerProps = {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
};

export function ResizableContainer({ leftPanel, rightPanel }: ResizableContainerProps) {
  const [sidebarWidth, setSidebarWidth] = useState(280);
  // A ref to track the dragging state
  const isDraggingRef = useRef(false);
  // A ref to store the animation frame ID
  const animationFrameRef = useRef(0);

  const handleDragStart = useCallback((startClientX: number) => {
    isDraggingRef.current = true;
    const startWidth = sidebarWidth;

    // Add a class to the body to show the resize cursor everywhere
    document.body.classList.add('resizing');

    const handleDragMove = (currentClientX: number) => {
      if (!isDraggingRef.current) return;
      
      const deltaX = currentClientX - startClientX;
      const newWidth = startWidth + deltaX;

      // Throttle state updates with requestAnimationFrame
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(() => {
        // Enforce min and max width constraints
        if (newWidth >= 200 && newWidth <= 500) {
          setSidebarWidth(newWidth);
        }
      });
    };

    const handleDragEnd = () => {
      isDraggingRef.current = false;
      document.body.classList.remove('resizing');
      
      // Clean up global event listeners
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };

    // Define wrapper functions to extract clientX
    const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX);
    const onMouseUp = () => handleDragEnd();
    const onTouchEnd = () => handleDragEnd();

    // Attach the appropriate listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
  }, [sidebarWidth]);
  
  // Specific handlers for mouse and touch start events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  return (
    <div className="resizable-container">
      <div className="resizable-panel" style={{ width: `${sidebarWidth}px`, flexShrink: 0 }}>
        {leftPanel}
      </div>
      <div
        className="resize-handle"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
      <div className="resizable-panel" style={{ flexGrow: 1, minWidth: 0 }}>
        {rightPanel}
      </div>
    </div>
  );
}