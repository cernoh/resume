import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Davincey Ragaven</h1>
        <h2 className="text-xl font-semibold">Aspiring Cyber Security Professional</h2>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/cernoh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 flex items-center gap-2"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/davincey-ragaven-76a220252/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 flex items-center gap-2"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="mailto:davincey06@gmail.com"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 flex items-center gap-2"
          >
            <FaEnvelope />
            Email
          </a>
        </div>
        <div className="glassmorphism mt-8 p-6">
          <section>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="mt-4">Placeholder text for projects section.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
