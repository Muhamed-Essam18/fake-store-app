import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh]">
      <h1 className="mb-3 text-2xl font-bold text-[#111111]">Loading, Please Wait... </h1>
      
      <Loader2 className="h-10 w-10 animate-spin text-[#c49d08]" />
    </div>
  );
}