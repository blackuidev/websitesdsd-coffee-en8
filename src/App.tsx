import React from 'react';
import Button from './components/Button';
import { getCurrentTime } from './utils/helpers';

// Define the component's props interface if it had any
interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [time, setTime] = React.useState<string>(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
        setTime(getCurrentTime());
    }, 1000);
    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center border-t-4 border-primary-blue transition-all duration-500 ease-in-out">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {/* Project Name from environment */}
          websitesdsd-coffee-en8 
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A powerful, auto-generated Vite React application with <span className="font-semibold text-primary-blue">TypeScript</span> and Tailwind CSS.
        </p>

        <div className="text-xl font-mono text-secondary-indigo mb-8">
            Current Time (UTC): <span className="font-bold text-2xl">{time}</span>
        </div>

        <div className="flex justify-center space-x-4">
            <Button onClick={() => console.log('Button 1 Clicked')}>
                Get Started
            </Button>
            <Button onClick={() => console.log('Button 2 Clicked')} secondary>
                Learn More
            </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-400">
            Powered by Lightswind AI
        </p>
      </div>
    </div>
  );
};

export default App;
