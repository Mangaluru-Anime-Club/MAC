import { Github, Instagram, Twitter, MessageCircle } from 'lucide-react';
import Link from 'next/link';


export function Socials() {
  return (



    <div className="flex flex-col items-center space-y-4 p-4">


      <h1 className="text-6xl font-bold text-center mb-8">Socials</h1>


      {/* GitHub */}
      <Link
        href="https://github.com"
        target="_blank"
        aria-label="GitHub"
        className="flex items-center gap-3 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full max-w-[250px] text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Github size={24} />
        <span>GitHub</span>
      </Link>

      {/* Instagram */}
      <Link
        href="https://instagram.com"
        target="_blank"
        aria-label="Instagram"
        className="flex items-center gap-3 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full max-w-[250px] text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Instagram size={24} />
        <span>Instagram</span>
      </Link>

      {/* Twitter (X) */}
      <Link
        href="https://twitter.com"
        target="_blank"
        aria-label="Twitter (X)"
        className="flex items-center gap-3 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full max-w-[250px] text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Twitter size={24} />
        <span>Twitter (X)</span>
      </Link>

      {/* WhatsApp */}
      <Link
        href="https://wa.me/"
        target="_blank"
        aria-label="WhatsApp"
        className="flex items-center gap-3 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full max-w-[250px] text-gray-600 hover:text-gray-900 transition-colors"
      >
        <MessageCircle size={24} />
        <span>WhatsApp</span>
      </Link>
    </div>

  );
}
