import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-indigo-200 to-blue-50">
        <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
          Build Your Perfect Resume <br /> In Minutes
        </h2>
        <p className="mt-4 text-lg text-gray-600">
        Unlock the power of AI to create standout resumes effortlessly. <br></br>
        Land your dream job with a resume that truly represents you.
        </p>
        <a href="/dashboard" className="inline-flex justify-center items-center mt-6 py-3 px-5 bg-indigo-600 text-white text-lg font-semibold rounded-md hover:bg-gray-100">
          Try It Free
        </a>
        
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
          <p className="mt-2 text-gray-600">
            Here's what makes our AI Resume Builder stand out.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-indigo-50 rounded-md shadow-md">
              <h4 className="text-xl font-bold text-indigo-600">AI-Powered Suggestions</h4>
              <p className="mt-7 text-gray-600">
                Get smart recommendations to enhance your resume instantly.
              </p>
            </div>
            <div className="p-10 bg-indigo-50 rounded-md shadow-md">
              <h4 className="text-xl font-bold text-indigo-600">Beautiful Templates</h4>
              <p className="mt-7 text-gray-600">
                Choose from a variety of professional templates.
              </p>
            </div>
            <div className="p-10 bg-indigo-50 rounded-md shadow-md">
              <h4 className="text-xl font-bold text-indigo-600">One-Click Download</h4>
              <p className="mt-7 text-gray-600">
                Download your resume in multiple formats with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold">Start Building Your Resume Today</h3>
        <p className="mt-4">
          Join thousands of professionals who have built their resumes using our AI Builder.
        </p>
        <a href="/dashboard" className="inline-flex justify-center items-center mt-6 py-3 px-5 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">
          Get Started for Free
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 AI Resume Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Home