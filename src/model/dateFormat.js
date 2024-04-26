import { format } from "date-fns";
export function dateFormatter(isoString) {
  const date = new Date(isoString);
  return format(date, "MMMM dd, yyyy  HH:mm:ss");
}
