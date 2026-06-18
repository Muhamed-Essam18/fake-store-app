import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <h1 className="text-2xl font-bold text-white mr-5">Loading, Please Wait... </h1><br />
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
}