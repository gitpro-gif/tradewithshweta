import LinkButton from './components/LinkButton'
import ImageScroll from './components/ImageScroll'
import profile from "./assets/profile.jpg"


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black flex justify-center px-4 py-10">
      <div className="w-full max-w-md text-white">


        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <img src={profile} className="w-28 h-28 rounded-full border-4 border-yellow-500 object-cover" />
          <h1 className="mt-4 text-xl font-semibold">Trade with shweta</h1>
          <p className="text-gray-400 text-sm">@tradewithshweta</p>
        </div>


        {/* Scroll Images */}
        <div className="mt-6">
          <ImageScroll />
        </div>


        {/* Links */}
        <div className="mt-8 space-y-4">
          <LinkButton href="https://www.instagram.com/tradewithshweta?igsh=MTZpZDZ5bDNjdWRpbQ%3D%3D&utm_source=qr" title="Open in App" />
          <LinkButton href="https://www.instagram.com/tradewithshweta?igsh=MTZpZDZ5bDNjdWRpbQ%3D%3D&utm_source=qr" title="@tradewithshweta – Official Insta" />
          <LinkButton href="https://t.me/tradewithvanyaofficial" title="Trade with Shweta (Vanya) – official Telegram" />
          <LinkButton href="https://www.instagram.com/tradewithshweta?igsh=MTZpZDZ5bDNjdWRpbQ%3D%3D&utm_source=qr" title="Best Binary Broker" />
        </div>


        {/* Footer Text */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Cookie Preferences · Report · Privacy
        </div>


      </div>
    </div>
  );
}