import { Link } from "react-router";

export default function Home() {
  return (
    <main className="text-4xl font-extrabold grid place-items-center h-screen text-center">
      <div className="space-y-4">
        <h1>
          Master Facility Building Management – Master Facility Building
          Management
        </h1>
        <Link
          to="https://masterfacility.com.au/new-contact/"
          target="_blank"
          className="py-4 px-8 text-2xl font-extrabold rounded-md hover:scale-105 hover:cursor-pointer bg-blue-500/30 text-blue-600"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
