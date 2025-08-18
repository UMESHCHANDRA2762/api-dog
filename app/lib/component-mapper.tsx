// src/lib/component-mapper.tsx

import { DefineOrganizationForm } from "../components/forms/DefineOrganizationForm";
import { DefineCompanyCodeForm } from "../components/forms/DefineCompanyCodeForm"; // NEW: Import the new form

// This function maps a sidebar label to a specific React component.
export const getComponentForLabel = (label: string) => {
  switch (label) {
    case "Define Organization (Company)":
      return <DefineOrganizationForm />;
    
    // NEW: Added the case for the new form
    case "Define Company (Company Code)":
      return <DefineCompanyCodeForm />;

    default:
      // This is the fallback for any other sidebar item that doesn't have a form yet
      return <h2>Content for {label}</h2>;
  }
};