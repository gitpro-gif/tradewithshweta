export default function LinkButton({ title, href, icon, variant = "default" }) {
  const base =
    "flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-medium transition";

  const styles = {
    telegram:
      "bg-[#229ED9] hover:bg-[#1d8dc2] text-white",
    default:
      "bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {title}
    </a>
  );
}
