import LegalLayout, { useLegalStyles } from '../../components/LegalLayout'
import { business } from '../../data/business'

function Body() {
  const { h2, p, ul } = useLegalStyles()
  return (
    <>
      <p style={p}>
        These Terms &amp; Conditions ("Terms") govern your access to and use of {business.product},
        a business management software platform developed and operated by {business.legalName}
        ("we", "us", "our"). By accessing our website or using {business.product}, you agree to be
        bound by these Terms.
      </p>

      <h2 style={h2}>1. The Service</h2>
      <p style={p}>
        {business.product} provides tools for enquiry management, admission tracking, WhatsApp
        automation, document generation, print ordering, and analytics for schools, coaching
        institutes, clinics, and other organizations.
      </p>

      <h2 style={h2}>2. Account Registration</h2>
      <ul style={ul}>
        <li>You must provide accurate and complete information when creating an account.</li>
        <li>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.</li>
        <li>You must notify us immediately of any unauthorized use of your account at {business.email}.</li>
      </ul>

      <h2 style={h2}>3. Acceptable Use</h2>
      <p style={p}>You agree not to:</p>
      <ul style={ul}>
        <li>Use the Service for any unlawful purpose or to send unsolicited bulk messages that violate WhatsApp's Business Policy or applicable law.</li>
        <li>Attempt to gain unauthorized access to our systems or interfere with the Service's operation.</li>
        <li>Upload content that is defamatory, infringing, or violates the rights of any third party.</li>
      </ul>

      <h2 style={h2}>4. Subscription Plans and Payments</h2>
      <p style={p}>
        {business.product} offers a Free plan and paid subscription plans (Starter and Pro) as
        described on our Pricing page. Paid plans are billed on a recurring monthly or yearly
        basis. Prices are subject to change with prior notice. Access to paid features continues
        until the end of the billing period in which a subscription is cancelled.
      </p>

      <h2 style={h2}>5. Print Ordering</h2>
      <p style={p}>
        Where {business.product} facilitates print orders (ID cards, certificates, banners, and
        similar items) through third-party vendors, {business.legalName} acts as a facilitator.
        Delivery timelines and print quality are subject to the vendor's terms; {business.legalName}
        will assist in resolving any order issues raised by customers.
      </p>

      <h2 style={h2}>6. Intellectual Property</h2>
      <p style={p}>
        The {business.product} name, logo, software, and all related content are the property of
        {' '}{business.legalName} and are protected by applicable intellectual property laws. You
        may not copy, modify, or redistribute any part of the Service without our written
        consent.
      </p>

      <h2 style={h2}>7. Data Ownership</h2>
      <p style={p}>
        You retain ownership of the data you upload to {business.product} (such as student and
        enquiry records). We process this data solely to provide the Service to you, as described
        in our <a href="/privacy-policy" style={{ color: '#059669' }}>Privacy Policy</a>.
      </p>

      <h2 style={h2}>8. Service Availability</h2>
      <p style={p}>
        We aim to keep {business.product} available at all times but do not guarantee
        uninterrupted access. We may perform maintenance, updates, or temporary suspensions as
        needed, and will make reasonable efforts to minimize disruption.
      </p>

      <h2 style={h2}>9. Limitation of Liability</h2>
      <p style={p}>
        To the maximum extent permitted by law, {business.legalName} shall not be liable for any
        indirect, incidental, or consequential damages arising from your use of the Service. Our
        total liability for any claim shall not exceed the amount paid by you for the Service in
        the preceding three months.
      </p>

      <h2 style={h2}>10. Termination</h2>
      <p style={p}>
        We may suspend or terminate access to the Service if these Terms are violated. You may
        cancel your account at any time as described in our{' '}
        <a href="/cancellation-policy" style={{ color: '#059669' }}>Cancellation Policy</a>.
      </p>

      <h2 style={h2}>11. Governing Law</h2>
      <p style={p}>
        These Terms are governed by the laws of India. Any disputes shall be subject to the
        exclusive jurisdiction of the courts in Gondia, Maharashtra.
      </p>

      <h2 style={h2}>12. Contact Us</h2>
      <p style={p}>
        For questions regarding these Terms, contact us at {business.email} or {business.phone}.
      </p>
    </>
  )
}

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      description="Terms and conditions for using the INSTIFY platform, operated by Mahi Creation."
      path="/terms-and-conditions"
      lastUpdated="July 9, 2026"
    >
      <Body />
    </LegalLayout>
  )
}
