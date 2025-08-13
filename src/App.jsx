import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Users, 
  Home, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  MessageCircle
} from 'lucide-react'
import teamPhoto from './assets/team-photo.jpg'
import consultationPhoto from './assets/consultation.jpg'
import loanConsultationPhoto from './assets/loan-consultation.jpg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'first-home'
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">BOCG</div>
              <div className="ml-2 text-sm text-gray-600">Blue Ocean Capital Group</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="h-4 w-4 text-blue-900" />
              <span className="text-sm font-medium">09-299 9996</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                New Zealand's Trusted Mortgage Experts
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Path to 
                <span className="text-blue-900 block">Homeownership</span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tailored mortgage solutions for first-home buyers and property investors. 
                We don't just help you buy a house – we create a comprehensive plan to secure your financial future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Mortgage
                </Button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-sm text-gray-600">Trusted by 500+ clients</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={consultationPhoto} 
                alt="Mortgage consultation" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Pre-approved in 24hrs</div>
                    <div className="text-sm text-gray-600">Fast, reliable service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Mortgage Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're buying your first home or expanding your investment portfolio, 
              we provide expert guidance every step of the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle className="text-xl">First Home Buyers</CardTitle>
                <CardDescription>
                  Navigate the home buying process with confidence. We'll guide you through pre-approval, 
                  government grants, and finding the perfect loan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Pre-approval assistance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Government grant guidance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />First-time buyer education</li>
                </ul>
                <Button className="w-full mt-4 bg-blue-900 hover:bg-blue-800">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle className="text-xl">Property Investment</CardTitle>
                <CardDescription>
                  Build your property portfolio with strategic financing solutions. 
                  We help investors maximize returns and minimize risks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Investment property loans</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Portfolio refinancing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Tax optimization strategies</li>
                </ul>
                <Button className="w-full mt-4 bg-blue-900 hover:bg-blue-800">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle className="text-xl">Refinancing</CardTitle>
                <CardDescription>
                  Lower your repayments and access equity with our refinancing solutions. 
                  We'll find you better rates and terms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Rate comparison</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Equity release</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Debt consolidation</li>
                </ul>
                <Button className="w-full mt-4 bg-blue-900 hover:bg-blue-800">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose BOCG?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Blue Ocean Capital Group, we believe in providing more than just mortgage advice. 
                We create comprehensive financial plans that help you not only buy your home but keep it secure for the future.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Approval Process</h3>
                    <p className="text-gray-600">Get pre-approved in as little as 24 hours with our streamlined process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Our experienced brokers have helped hundreds of Kiwis achieve their property goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Planning</h3>
                    <p className="text-gray-600">We don't just help you buy – we plan for your long-term financial security.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="BOCG Team" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-blue-900 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch today for a free consultation. Let's discuss your goals and create a plan that works for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">09-299 9996</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">admin@bocg.co.nz</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">Level 2, 7 McColl Street<br />New Market, Auckland, New Zealand</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-blue-100">Mon - Fri: 10AM - 6PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-gray-900"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-gray-900"
                  />
                </div>
                
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-white text-gray-900"
                />
                
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md border bg-white text-gray-900"
                >
                  <option value="first-home">First Home Buyer</option>
                  <option value="investment">Property Investment</option>
                  <option value="refinancing">Refinancing</option>
                  <option value="commercial">Commercial Loans</option>
                </select>
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your goals..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white text-gray-900"
                />
                
                <Button type="submit" size="lg" className="w-full bg-white text-blue-900 hover:bg-gray-100">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">BOCG</div>
              <p className="text-gray-400 mb-4">
                Blue Ocean Capital Group - Your trusted partner in property finance and mortgage solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">First Home Buyers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Property Investment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refinancing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Loans</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mortgage Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">First Home Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclosure Statement</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Blue Ocean Capital Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

