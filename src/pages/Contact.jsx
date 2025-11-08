import React, { useState } from 'react'
import Button from '../components/Button'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-neutral-600 leading-relaxed">
            Have a question? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:hello@everlane.com" className="text-sm text-neutral-600 hover:text-neutral-900">
                      hello@everlane.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-sm text-neutral-600 hover:text-neutral-900">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-sm text-neutral-600">
                      123 Fashion Street<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Customer Service Hours</h3>
              <p className="text-sm text-neutral-600">
                Monday - Friday: 9am - 6pm PST<br />
                Saturday - Sunday: 10am - 4pm PST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-beige p-8 lg:p-10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="6"
                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 resize-none"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="font-semibold mb-2">What is your return policy?</h3>
              <p className="text-neutral-600 text-sm">
                We offer a 30-day return policy for all unworn, unwashed items with original tags attached.
              </p>
            </div>
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="font-semibold mb-2">How long does shipping take?</h3>
              <p className="text-neutral-600 text-sm">
                Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.
              </p>
            </div>
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
              <p className="text-neutral-600 text-sm">
                Yes, we ship to over 50 countries worldwide. International shipping times vary by location.
              </p>
            </div>
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="font-semibold mb-2">How do I track my order?</h3>
              <p className="text-neutral-600 text-sm">
                Once your order ships, you'll receive a tracking number via email. You can use this to track your package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
