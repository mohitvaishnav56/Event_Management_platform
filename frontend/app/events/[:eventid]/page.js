import Footer from '@/app/components/Footer';
import Nav from '@/app/components/Nav';
import React from 'react';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa';

const EventDetailsPage = () => {
  const ticketOptions = [
    {
      type: 'Standard Admission',
      price: '$99',
      features: ['Full conference access', 'Lunch included', 'Access to recordings'],
    },
    {
      type: 'VIP Experience',
      price: '$199',
      features: [
        'Premium seating',
        'Exclusive networking event',
        'Speaker meet & greet',
        'VIP lounge access',
        'Swag bag',
      ],
    },
    {
      type: 'Student',
      price: '$49',
      features: [
        'Full conference access',
        'Lunch included',
        'Must show valid student ID',
      ],
    },
  ];

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto p-4">
        <button className="text-blue-600 text-sm mb-4 flex items-center gap-2">
          <FaArrowLeft />
          Back to Events
        </button>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1050&q=80"
              alt="Conference"
              className="rounded-lg w-full"
            />

            <div className="mt-4">
              <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Technology</span>
              <h1 className="text-3xl font-bold mt-2">Tech Conference 2025</h1>
              <p className="text-sm text-gray-600 mt-1">Organized by TechEvents Inc.</p>

              <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-500" />
                  June 15, 2025
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-blue-500" />
                  9:00 AM - 5:00 PM
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-blue-500 mt-1" />
                  <span>
                    San Francisco Convention Center <br />
                    747 Howard St, San Francisco, CA 94103
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <FaUsers /> 350 attending • 50 spots left
                </p>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded">
                  Tickets Available
                </span>
              </div>

              {/* Event Details */}
              <div className="mt-6">
                <div className="flex border-b mb-2">
                  <button className="text-blue-600 border-b-2 border-blue-600 pb-2 px-4 font-semibold">
                    Details
                  </button>
                  <button className="text-gray-500 px-4 pb-2">Schedule</button>
                </div>

                <div className="text-gray-700 text-sm mt-3 space-y-3">
                  <p>
                    Join us for the biggest tech conference of 2025! This full-day event brings together industry leaders,
                    innovators, and technology enthusiasts for a day of learning, networking, and inspiration.
                  </p>

                  <p><strong>The conference features:</strong></p>

                  <ul className="list-disc pl-5">
                    <li>Keynote speeches from industry leaders</li>
                    <li>Interactive workshops on emerging technologies</li>
                    <li>Networking opportunities with tech professionals</li>
                    <li>Product demonstrations and exhibitions</li>
                    <li>Career advancement opportunities</li>
                  </ul>

                  <p>
                    Whether you're a seasoned professional or just starting your tech journey, this conference offers
                    valuable insights and connections to help you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 w-full space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-lg font-semibold mb-4">Get Tickets</h2>
              {ticketOptions.map((ticket, index) => (
                <div key={index} className="border rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{ticket.type}</h3>
                    <span className="font-bold text-blue-600">{ticket.price}</span>
                  </div>
                  <ul className="text-sm text-gray-700 mb-3">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-blue-600 text-white w-full py-1 rounded hover:bg-blue-700">
                    Select
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-sm font-semibold mb-2">About the Organizer</h2>
              <p className="text-sm text-gray-700">TechEvents Inc.</p>
              <a href="#" className="text-blue-600 text-sm underline">View organizer profile</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-sm font-semibold mb-2">Need help?</h2>
              <a href="#" className="text-blue-600 text-sm underline">Contact support</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetailsPage;
