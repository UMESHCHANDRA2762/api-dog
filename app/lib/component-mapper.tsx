import { DefineOrganizationForm } from "../components/forms/DefineOrganizationForm";
import { DefineCompanyCodeForm } from "../components/forms/DefineCompanyCodeForm";
import { AssignCompanyToOrganizationForm } from "../components/forms/AssignCompanyToOrganizationForm";
import { DefineBusinessAreaForm } from "../components/forms/DefineBusinessAreaForm"; // NEW: Import the new form

// This function maps a sidebar label to a specific React component.
export const getComponentForLabel = (label: string) => {
  switch (label) {
    case "Define Organization (Company)":
      return <DefineOrganizationForm />;
    
    case "Define Company (Company Code)":
      return <DefineCompanyCodeForm />;

    case "Assign Company to Organization":
      return <AssignCompanyToOrganizationForm />;

    default:
      // This is the fallback for any other sidebar item that doesn't have a form yet
      return <h2>Content for {label}</h2>;
  }
};