import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-24">
    <Loader2 className="w-8 h-8 animate-spin" />
  </div>
);

export const ErrorMessage = ({ message }: { message: string }) => (
  <div className="p-4 text-red-500 bg-red-50 rounded-md">
    <p className="font-medium">Error</p>
    <p className="text-sm">{message}</p>
  </div>
);

export const EmptyState = ({ message = "No items found" }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center w-full h-48">
    <p className="text-lg font-medium text-gray-500">{message}</p>
  </div>
); 