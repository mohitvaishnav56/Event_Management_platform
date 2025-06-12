import React from 'react';

const StatusBadge = ({ status }) => {
  const getBadgeStyle = (status) => {
    switch (status.toLowerCase()) {
      case "filling fast":
        return "bg-yellow-400 text-yellow-900";
      case "open":
        return "bg-green-200 text-green-800";
      case "sold out":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(status)}`}>
      {status}
    </span>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="md:min-w-[400px] min-w-[95%] rounded-xl shadow-lg overflow-hidden bg-white">
      {/* Image */}
      <div className="relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {event.category}
        </div>
        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
          {event.price}
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h2>

        <div className="text-sm text-gray-600 flex items-center mb-1">
          📅 <span className="ml-2">{event.date}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center mb-1">
          ⏰ <span className="ml-2">{event.time}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center mb-1">
          📍 <span className="ml-2">{event.location}</span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="text-sm text-gray-700">
            👥 {event.attendees.registered} / {event.attendees.capacity}
          </div>
          <StatusBadge status={event.status} />
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
