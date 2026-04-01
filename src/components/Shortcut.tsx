import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

interface ShortcutItem {
  /** Route path to navigate to */
  to: string;
  /** Icon: render prop so callers pass an SVG/lucide element */
  icon: React.ReactNode;
  /** Tooltip label shown on hover */
  label: string;
  /** If true, the icon pill uses the green gradient instead of white */
  accent?: boolean;
}

interface ShortcutProps {
  /** Optional list of items. Falls back to default Kafi navigation. */
  items?: ShortcutItem[];
  className?: string;
}

// ── Default navigation items ─────────────────────────────────────────────────
// ── Default navigation items ─────────────────────────────────────────────────
const defaultItems: ShortcutItem[] = [
  {
    to: "/",
    label: "Danh mục",
    icon: (
      <img
        src="/kafi-web-demo/assets/shortcut/top_menu.svg"
        alt=""
        className="size-5 text-[#667085]"
      />
    ),
  },
  {
    to: "/reports",
    label: "Báo cáo",
    icon: (
      <img
        src="/kafi-web-demo/assets/shortcut/item_2.png"
        alt=""
        className="size-9 rounded-xl"
      />
    ),
  },
  {
    to: "/stocks",
    label: "Khám phá",
    icon: (
      <img
        src="/kafi-web-demo/assets/shortcut/item_3.png"
        alt=""
        className="size-9 rounded-xl"
      />
    ),
  },
  {
    to: "/stocks",
    label: "Cổ phiếu",
    accent: true,
    icon: (
      <img
        src="/kafi-web-demo/assets/shortcut/item_4.svg"
        alt=""
        className="size-6"
      />
    ),
  },
  {
    to: "/academy",
    label: "Học viện",
    accent: true,
    icon: (
      <img
        src="/kafi-web-demo/assets/shortcut/item_5.svg"
        alt=""
        className="size-6"
      />
    ),
  },
  {
    to: "/support",
    label: "Hỗ trợ",
    accent: true,
    icon: (
      <img
        src="/kafi-web-demo/assets/shortcut/item_6.svg"
        alt=""
        className="size-6"
      />
    ),
  },
];

// ── Divider line ────────────────────────────────────────────────────────────
const Divider = () => <div className="w-full h-px bg-white/60 shrink-0" />;

// ── Scroll-to-top button ────────────────────────────────────────────────────
const ScrollTopButton = () => (
  <motion.button
    whileHover={{ scale: 1.15, x: -3 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="size-9 flex items-center justify-center self-center transition-colors cursor-pointer"
    aria-label="Cuộn lên đầu trang"
  >
    <img
      src="/kafi-web-demo/assets/shortcut/arrow_up.svg"
      alt=""
      className="size-5 text-[#667085]"
    />
  </motion.button>
);

// ── Main component ──────────────────────────────────────────────────────────
export default function Shortcut({ items, className }: ShortcutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = items ?? defaultItems;

  return (
    <div
      className={
        className ||
        "fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden xl:flex"
      }
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[rgba(255,255,255,0.40)] backdrop-blur-xl border border-white border-r-0 p-1 rounded-l-[20px] flex flex-col gap-1 shadow-[0_16px_40px_-26px_rgba(0,0,0,0.5)] w-[44px] items-center"
      >
        {navItems.map((item, idx) => {
          const isActive =
            location.pathname === item.to ||
            location.pathname.startsWith(item.to + "/");
          const isAccent = item.accent || isActive;

          return (
            <div
              key={item.to}
              className="flex flex-col gap-1 w-full items-center"
            >
              {/* Divider before every item except the first */}
              {idx > 0 && <Divider />}

              {/* Tooltip wrapper */}
              <div className="relative group w-full flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.15, x: -4 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate(item.to)}
                  aria-label={item.label}
                  className={`size-9 rounded-xl flex items-center justify-center cursor-pointer transition-shadow hover:shadow-xl ${
                    isAccent
                      ? "bg-gradient-to-br from-[#00c694] to-[#07756d] text-white shadow-md shadow-[#00c694]/30"
                      : ""
                  }`}
                >
                  {item.icon}
                </motion.button>

                {/* Hover tooltip */}
                {item.label !== "Danh mục" && (
                  <div className="pointer-events-none absolute right-[calc(100%+8px)] top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#073038] text-white text-[12px] font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                    {item.label}
                    {/* Triangle */}
                    <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[#073038]" />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <Divider />
        <ScrollTopButton />
      </motion.div>
    </div>
  );
}
