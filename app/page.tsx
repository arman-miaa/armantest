

const HomePage = () => {
  return (
    <main className="w-full min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            Welcome to VPS Setup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Build, deploy, and manage your infrastructure with ease
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fast Setup
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get your VPS running in minutes with our automated setup process
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Secure
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enterprise-grade security to protect your applications and data
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Monitoring
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time monitoring and analytics for your infrastructure
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Scalable
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Easily scale your resources as your application grows
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 font-semibold rounded-lg transition-colors">
            Learn More
          </button>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
          <p>
            Built with <span className="text-red-500">❤️</span> using Next.js
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
