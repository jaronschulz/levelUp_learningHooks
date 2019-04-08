import { useEffect, useState } from "react";

export default function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  });
  return [value, setValue];
}
