import {cn} from "@/Utilities";

interface ButtonProps {
  text: string;
  style: 'fill' | 'outline';
  className?: string;
}


export default function Button({text, style, className} : ButtonProps) {
  let bClassName = "";

  switch (style) {
    case "fill":
      bClassName = "border bg-blue-500 rounded-xl px-3 py-1.5 shadow text-white font-medium";
      break;
    case "outline":
      bClassName = "border border-blue-100 rounded-xl px-3 py-1.5 shadow text-blue-800 font-medium";
      break;
  }


  return (
      <button className={cn(bClassName, className)}>{text}</button>
  );
}
