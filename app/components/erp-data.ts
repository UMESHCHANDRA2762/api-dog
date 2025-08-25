// src/components/erp-data.ts

export type TreeItem = {
  label: string;
  icon: string;
};

export type ModuleData = {
  title: string;
  tree: TreeItem[];
};

export type ErpData = {
  [key: string]: ModuleData;
};

export const erpData: ErpData = {
  Organization: {
    title: "Organization",
    tree: [
      { label: "Define Organization (Company)", icon: "bi-chevron-right" },
      { label: "Define Company (Company Code)", icon: "bi-chevron-right" },
      { label: "Assign Company to Organization", icon: "bi-chevron-right" },
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