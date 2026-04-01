import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ActionButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`py-[12px] px-[24px] bg-[#00C694] text-[#101828] hover:text-white rounded-full text-[18px] hover:bg-[#073038] transition-all flex items-center justify-center gap-[8px] group shrink-0 ${className}`}
    >
      <span className="leading-[24px]">{title}</span>
      <div className="size-[24px] bg-[#073038] rounded-full flex items-center justify-center relative translate-y-[0px] transition-colors group-hover:bg-[#00C694]">
        <div className="size-[20px] flex items-center justify-center text-[#0AE685] group-hover:text-[#073038]">
          <ArrowUpRight className="size-[16px]" strokeWidth={3} />
        </div>
      </div>
    </button>
  );
};

export default ActionButton;
