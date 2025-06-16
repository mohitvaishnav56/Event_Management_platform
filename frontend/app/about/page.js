import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const page = () => {
  return (
    <>
      <Nav />
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-blue-400 text-white">
        <h1 className="text-4xl font-bold mb-4">About Eventify</h1>
        <p className="max-w-2xl mx-auto">
          We're on a mission to revolutionize how people discover, organize, and attend events.
          From intimate workshops to large conferences, we make every event experience exceptional.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Story</h2>
        <p className="text-center text-gray-600">
          Founded in 2020, Eventify was born from a simple observation: event discovery and management was unnecessarily
          complicated. Our founders, Sarah and Michael, experienced firsthand the challenges of organizing events and
          helping attendees find experiences they'd love.
          <br /><br />
          What started as a weekend project quickly grew into a platform trusted by thousands of event organizers and
          millions of attendees worldwide. We've helped facilitate over 50,000 events, connecting communities and creating
          unforgettable experiences.
          <br /><br />
          Today, Eventify continues to innovate in the event space, introducing new features like AI-powered recommendations,
          seamless payment processing, and advanced analytics to help organizers understand their audiences better.
        </p>
      </section>

      <section className="bg-gray-100 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 text-center">
          {[
            { title: 'Our Mission', desc: 'To make event discovery and management seamless for everyone, connecting communities through memorable experiences.' },
            { title: 'Community First', desc: 'We believe in the power of bringing people together and creating lasting connections through shared experiences.' },
            { title: 'Passion Driven', desc: 'Every feature we build is driven by our passion for helping event organizers and attendees succeed.' },
            { title: 'Excellence', desc: 'We strive for excellence in everything we do, from user experience to customer support.' },
          ].map((val, i) => (
            <div key={i} className="p-6 bg-white rounded shadow-md">
              <h4 className="font-semibold text-lg mb-2">{val.title}</h4>
              <p className="text-sm text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { name: 'Sarah Johnson', title: 'CEO & Founder', desc: 'Former event manager with 10+ years of experience in the industry.' },
            { name: 'Michael Chen', title: 'CTO', desc: 'Tech leader passionate about building scalable platforms for communities.' },
            { name: 'Emily Rodriguez', title: 'Head of Design', desc: 'UX specialist focused on creating intuitive and beautiful user experiences.' },
            { name: 'David Kim', title: 'Head of Marketing', desc: 'Growth expert helping events reach their perfect audiences.' },
          ].map((member, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h4 className="font-bold">{member.name}</h4>
              <p className="text-blue-600">{member.title}</p>
              <p className="text-sm text-gray-600 mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-xl font-semibold mb-4">By the Numbers</h2>
        <div className="flex flex-wrap justify-center gap-10 text-lg font-medium">
          <div>50K+<br />Events Hosted</div>
          <div>2M+<br />Happy Attendees</div>
          <div>10K+<br />Event Organizers</div>
          <div>95%<br />Satisfaction Rate</div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page