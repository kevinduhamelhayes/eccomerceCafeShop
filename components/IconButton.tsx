import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactElement;
  className?: string;
}

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-full bg-white hover:scale-110 transition p-2",
        className
      )}
    >
      {icon}
    </button>
  );
}
export default IconButton;  