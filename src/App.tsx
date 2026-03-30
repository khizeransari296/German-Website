/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Solutions } from './components/Solutions';
import { Capabilities } from './components/Capabilities';
import { IndustryFocus } from './components/IndustryFocus';
import { Testimonial } from './components/Testimonial';
import { TrustBadges } from './components/TrustBadges';
import { Pricing } from './components/Pricing';
import { Implementation } from './components/Implementation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { BillingPage } from './pages/BillingPage';

function LandingPage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Solutions />
      <Capabilities />
      <IndustryFocus />
      <Testimonial />
      <TrustBadges />
      <Pricing />
      <Implementation />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/billing" element={<BillingPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
