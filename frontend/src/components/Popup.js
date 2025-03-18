export default function Popup({ popup }) {
    if (!popup) return null;

    return (
        <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <p className="text-red-500">{popup}</p>
        </div>
    );
}
