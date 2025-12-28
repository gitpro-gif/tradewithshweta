export default function LinkButton({ title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition rounded-xl py-4 text-sm font-medium"
    >
      {title}
    </a>
  );
}
