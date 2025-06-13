"use client"
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onClick={() => alert('Button clicked!')}>
            Click me!
          </button>
        </div>
     
    </div>
  );
}
