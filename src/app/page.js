"use client"
export default function Home() {
    const handleClick = () => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "click", {
        event_category: "button",
        event_label: "CTA Button",
        value: 1,
      });
    }
    // Your normal click behavior
    alert("Button clicked!");
  };
 
  return (

  
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onClick={handleClick}>
            Click me!
          </button>
        </div>
     
    </div>
  );
}
