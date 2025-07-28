export default function BrowserUpdatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Please update your browser</h1>

          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            It seems you are using an old or unsupported browser. To continue enjoying Canva, please update to a recent
            version of one of the following browsers:
          </p>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Chrome */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-2 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-700 font-medium">Chrome</span>
            </div>

            {/* Firefox */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-2 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-red-400 rounded-full relative">
                    <div className="absolute top-1 left-2 w-3 h-3 bg-yellow-300 rounded-full"></div>
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-orange-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-700 font-medium">Firefox</span>
            </div>

            {/* Safari */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-2 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    <div className="w-full h-full border-2 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-red-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-red-500"></div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-700 font-medium">Safari</span>
              <span className="text-xs text-gray-500">(macOS only)</span>
            </div>

            {/* Edge */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-2 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full relative">
                    <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-700 font-medium">Edge</span>
            </div>
          </div>

          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-1">Alternatively click here to get Canva for Android or iOS.</p>
            <p>Or click here to learn more about Canva.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
