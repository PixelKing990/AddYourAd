import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Ad App</h1>
        <Link href="/ads/new">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Create an Ad
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
