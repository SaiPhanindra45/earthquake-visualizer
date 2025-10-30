export default function ErrorMessage({ message }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-red-100">
      <h1 className="text-2xl font-bold text-red-700">
        Failed to load data: {message}
      </h1>
    </div>
  );
}