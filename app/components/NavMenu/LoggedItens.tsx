import { cn } from "@/lib/utils";

export default function LoggedItens() {
  return (
    <ul>
      <li className={cn("text-gray-200")}>Training</li>
      <li className={cn("text-gray-200")}>Foods</li>
      <li className={cn("text-gray-200")}>Finance</li>
      <li className={cn("text-gray-200")}>Profile</li>
    </ul>
  );
}
