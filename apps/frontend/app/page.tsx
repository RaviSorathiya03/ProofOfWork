import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center font-sans">
      <header className="w-full flex flex-col items-center mt-12 mb-8">
        <Image
          src="/logo.svg"
          alt="ProofOfSkill Logo"
          width={80}
          height={80}
          className="mb-4 drop-shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-2">
          ProofOfSkill
        </h1>
        <p className="text-lg text-gray-100 font-medium text-center max-w-xl">
          The decentralized platform to manage hackathons, onboard teams, assign
          judges, and pay winners instantly on Solana.
        </p>
      </header>
      <main className="flex flex-col items-center gap-10 w-full max-w-2xl px-6">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
            Why ProofOfSkill?
          </h2>
          <ul className="space-y-4 text-gray-700 text-base font-medium">
            <li className="flex items-center gap-3">
              <Image
                src="/globe.svg"
                alt="Decentralized"
                width={24}
                height={24}
              />
              <span>Decentralized & transparent hackathon management</span>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/window.svg" alt="Solana" width={24} height={24} />
              <span>Instant Solana payouts for winners</span>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/file.svg" alt="Teams" width={24} height={24} />
              <span>Easy onboarding for teams, organizers, and judges</span>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/next.svg" alt="Next.js" width={24} height={24} />
              <span>Powered by Next.js, Tailwind, and shadcn/ui</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full justify-center">
          <Link href="/auth/signup" className="w-full sm:w-auto">
            <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform text-lg">
              Get Started
            </button>
          </Link>
          <Link href="/auth/signin" className="w-full sm:w-auto">
            <button className="w-full bg-white/90 text-indigo-700 font-bold py-3 px-8 rounded-xl shadow-lg border border-indigo-200 hover:bg-indigo-50 hover:scale-105 transition-transform text-lg">
              Sign In
            </button>
          </Link>
        </div>
      </main>
      <footer className="mt-16 mb-6 flex flex-col items-center gap-2 text-gray-200 text-sm">
        <span>
          &copy; {new Date().getFullYear()} ProofOfSkill. Built for decentralized
          hackathons.
        </span>
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://solana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white"
          >
            Solana
          </a>
        </div>
      </footer>
    </div>
  );
}
