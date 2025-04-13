import { ChevronLeft } from "lucide-react";
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#666] bg-opacity-80 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
  >
    <ChevronLeft className="w-5 h-5" />
  </div>
);

export default PrevArrow;
