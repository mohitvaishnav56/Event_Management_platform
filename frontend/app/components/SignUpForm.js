// SignUpForm.jsx
import React, { useState } from 'react';

export default function SignUpForm() {
  const [role, setRole] = useState('attendee');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-900">Create an Account</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Join Eventify to start managing your events
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 8 characters long with a mix of letters, numbers, and symbols.
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">I want to register as:</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="attendee"
                  name="role"
                  type="radio"
                  checked={role === 'attendee'}
                  onChange={() => setRole('attendee')}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="attendee" className="ml-2 block text-sm text-gray-700">
                  Attendee – I want to discover and attend events
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="organizer"
                  name="role"
                  type="radio"
                  checked={role === 'organizer'}
                  onChange={() => setRole('organizer')}
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="organizer" className="ml-2 block text-sm text-gray-700">
                  Organizer – I want to create and manage events
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>

        <p className="mt-2 text-xs text-center text-gray-500">
          By signing up, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
