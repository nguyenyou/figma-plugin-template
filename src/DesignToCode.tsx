export default function DesignToCodeLogo() {
  return (
    <div className="flex items-center justify-center w-full h-32 bg-teal-600 p-4">
      <div className="flex items-center space-x-4">
        {/* "design" with box outline */}
        <div className="relative">
          <div className="text-white text-4xl font-bold">design</div>
          {/* Box outline */}
          <div className="absolute inset-0 border-2 border-white -m-1">
            {/* Corner squares (outlines with white background) */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-teal-600 border border-white"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-600 border border-white"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-600 border border-white"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-teal-600 border border-white"></div>
          </div>
        </div>

        {/* "to" text */}
        <div className="text-white text-4xl font-bold">to</div>

        {/* "{code}" text */}
        <div className="text-white text-4xl font-bold font-mono">
          {"{code}"}
        </div>
      </div>
    </div>
  );
}
