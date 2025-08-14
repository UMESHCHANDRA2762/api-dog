"use client";

import { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { ApidogLogo } from "../../components/icons/apidog-logo";
import "./MainContent.css"; // Ensure path is correct

// Define the structure for a single tab
type TabData = {
  id: number;
  title: string;
};

export function MainContent() {
  const [tabs, setTabs] = useState<TabData[]>([
    // MODIFIED: The first tab now starts with a more generic title
    { id: 1, title: 'New Tab 1' },
  ]);
  const [activeKey, setActiveKey] = useState<string>('1');
  
  // The logic to add a tab has been updated
  const handleAddTab = () => {
    let nextId = 1;
    // Create a set of all current IDs for easy lookup
    const existingIds = new Set(tabs.map(tab => tab.id));

    // Find the first number that is NOT in the set of existing IDs
    while (existingIds.has(nextId)) {
      nextId++;
    }

    const newTab: TabData = {
      id: nextId,
      title: `New Tab ${nextId}`,
    };
    
    setTabs([...tabs, newTab]);
    setActiveKey(nextId.toString());
  };

  // Function to close a tab (this logic remains the same)
  const handleCloseTab = (e: React.MouseEvent, tabId: number) => {
    e.stopPropagation();

    const tabIndex = tabs.findIndex(tab => tab.id === tabId);
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);

    if (activeKey === tabId.toString() && newTabs.length > 0) {
      const newActiveIndex = Math.max(0, tabIndex - 1);
      setActiveKey(newTabs[newActiveIndex].id.toString());
    } else if (newTabs.length === 0) {
      setActiveKey('');
    }
  };

  return (
    <main className="main-area d-flex flex-column h-100">
      <div className="tab-container">
        <Tabs
          activeKey={activeKey}
          onSelect={(k) => {
            if (k === 'add-tab') {
              handleAddTab();
            } else if (k) {
              setActiveKey(k);
            }
          }}
          className="main-content-tabs"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              eventKey={tab.id.toString()}
              title={
                <span className="d-flex align-items-center">
                  {tab.title}
                  <Button
                    // REMOVED: The "variant='link'" prop was removed to prevent underline styling
                    size="sm"
                    className="p-0 ms-2 tab-close-btn"
                    onClick={(e) => handleCloseTab(e, tab.id)}
                  >
                    &times;
                  </Button>
                </span>
              }
            >
              <div className="flex-grow-1 d-flex align-items-center justify-content-center h-100 p-5">
                <div style={{ color: '#e2e8f0' }}>
                  <ApidogLogo className="w-100 h-100" style={{ width: '6rem', height: '6rem' }} />
                </div>
              </div>
            </Tab>
          ))}
          <Tab
            id="add-tab-button"
            eventKey="add-tab"
            title={<span className="fs-5">+</span>}
          />
        </Tabs>
      </div>
    </main>
  );
}
