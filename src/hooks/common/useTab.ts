import { useState } from "react";

export const useTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabLoaded, setTabLoaded] = useState<{ [key: number]: boolean }>({});
  const handleTabsChange = (index: number) => {
    setTabLoaded({ ...tabLoaded, [index]: true });
    setTabIndex(index);
  };

  return { handleTabsChange, tabIndex, tabLoaded };
};
