import React from "react";

const CollectedPage: React.FC = () => {
  return (
    <div className="border border-2 border-gray-200 rounded-lg h-48 py-6 text-lg">
        <p className="text-gray-500">0 items</p>
        <div className="mt-4">
          <p className="text-gray-500">No items found for this search</p>
          <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Back to all items
          </button>
        </div>
    </div>
  );
};

export default CollectedPage;