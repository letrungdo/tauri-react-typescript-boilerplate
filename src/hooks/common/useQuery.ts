import { parseQueryParams } from "@utils/common";
import React from "react";
import { useLocation } from "react-router-dom";

export const useQuery = <T>() => {
  const { search } = useLocation();

  return React.useMemo(() => parseQueryParams<T>(search), [search]);
};
