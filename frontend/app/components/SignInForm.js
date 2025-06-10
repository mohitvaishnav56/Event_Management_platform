import React from 'react'

const SignInForm = () => {
    return (
        <div className="h-[90vh] flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-center text-blue-900">Welcome Back</h2>
                <p className="text-center text-gray-500 text-sm mb-6">
                    Sign in to continue to your account
                </p>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="remember"
                            className="mr-2 accent-blue-600"
                        />
                        <label htmlFor="remember" className="text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600">
                    Don’t have an account?{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SignInForm