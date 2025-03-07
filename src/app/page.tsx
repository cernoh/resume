import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

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
        <div className="glassmorphism mt-8 p-6 w-full max-w-4xl">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pomoneko.com Project Card */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image 
                    src="/pomoneko-screenshot.jpg" 
                    alt="Pomoneko.com website screenshot" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity hover:opacity-90"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">Pomoneko.com</h3>
                    <a 
                      href="https://pomoneko.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      Visit <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                  <p className="text-gray-700">
                    [A cat themed Pomodoro timer.]
                  </p>
                </div>
              </div>
              {/* You can add more project cards here */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
