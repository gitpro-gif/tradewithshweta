import LinkButton from "./components/LinkButton";
import ImageScroll from "./components/ImageScroll";
import profile from "./assets/profile.jpg";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black flex justify-center px-4 py-10">
      <div className="w-full max-w-md text-white">

        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <img
            src={profile}
            className="w-28 h-28 rounded-full border-4 border-yellow-500 object-cover"
          />
          <h1 className="mt-4 text-xl font-semibold">Trade with Shweta</h1>

          {/* Instagram clickable username */}
          <a
            href="https://www.instagram.com/tradewithshweta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
          >
            <FaInstagram className="text-pink-500" />
            @tradewithshweta
          </a>
        </div>

        {/* Scroll Images */}
        <div className="mt-6">
          <ImageScroll />
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-4">

          {/* Telegram Button */}
          <LinkButton
            href="https://t.me/tradewithvanyaofficial"
            title="Trade with Shweta (Vanya) - join Telegram"
            icon={<FaTelegramPlane />}
            variant="telegram"
          />

          {/* Best Broker Button */}
          <LinkButton
            href="https://broker-qx.pro/?lid=1658520"
            title="Best Broker"
            variant="default"
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Cookie Preferences · Report · Privacy
        </div>

      </div>
    </div>
  );
}
