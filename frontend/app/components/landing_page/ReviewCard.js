import React from 'react'

const ReviewCard = ({quote, name, title, image}) => {
    return (
        <div className="max-w-md p-6 bg-white rounded-3xl shadow-md text-black">
            <div className="text-4xl text-purple-600">“</div>
            <p className="text-lg mt-2 mb-6">
                {quote}
            </p>
            <div className="flex items-center">
                <img
                    src={image}// Replace with actual image path
                    alt="David Chen"
                    className="w-16 h-16 rounded-full border-4 border-blue-400"
                />
                <div className="ml-4">
                    <h4 className="font-bold text-blue-700 text-lg">{name}</h4>
                    <p className="text-gray-600 text-sm">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard