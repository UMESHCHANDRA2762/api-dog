// This file contains the data for each module in the Secondary Sidebar.
export const erpData = {
  Organization: {
    title: "Organization",
    tree: [
      { label: "Company Profile", icon: "bi-chevron-right" },
      { label: "Business Units", icon: "bi-chevron-right" },
      { label: "User Roles & Permissions", icon: "bi-chevron-right" },
      { label: "Branch Management", icon: "bi-chevron-right" },
    ],
  },
  Finance: {
    title: "Finance",
    tree: [
      { label: "Chart of Accounts", icon: "bi-chevron-right" },
      { label: "General Ledger", icon: "bi-chevron-right" },
      { label: "Accounts Payable", icon: "bi-chevron-right" },
      { label: "Accounts Receivable", icon: "bi-chevron-right" },
      { label: "Financial Reports", icon: "bi-chevron-down" },
    ],
  },
  "Human Resource": {
    title: "Human Resource",
    tree: [
      { label: "Employee Directory", icon: "bi-chevron-right" },
      { label: "Payroll", icon: "bi-chevron-right" },
      { label: "Leave Management", icon: "bi-chevron-right" },
      { label: "Recruitment", icon: "bi-chevron-right" },
    ],
  },
  Inventory: {
    title: "Inventory",
    tree: [
      { label: "Item Master", icon: "bi-chevron-right" },
      { label: "Stock Levels", icon: "bi-chevron-right" },
      { label: "Warehouse Management", icon: "bi-chevron-right" },
      { label: "Purchase Orders", icon: "bi-chevron-right" },
    ],
  },
  Manufacturing: {
    title: "Manufacturing",
    tree: [
      { label: "Bill of Materials", icon: "bi-chevron-right" },
      { label: "Work Orders", icon: "bi-chevron-right" },
      { label: "Production Planning", icon: "bi-chevron-right" },
      { label: "Quality Control", icon: "bi-chevron-right" },
    ],
  },
  Settings: {
    title: "Settings",
    tree: [
      { label: "General Settings", icon: "bi-chevron-right" },
      { label: "System Configuration", icon: "bi-chevron-right" },
      { label: "API Integrations", icon: "bi-chevron-right" },
      { label: "Data Backup", icon: "bi-chevron-right" },
    ],
  },
};
