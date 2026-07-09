import LegalLayout, { useLegalStyles } from '../../components/LegalLayout'
import { business } from '../../data/business'

function Body() {
  const { h2, p, ul } = useLegalStyles()
  return (
    <>
      <p style={p}>
        This Cookie Policy explains how {business.legalName} uses cookies and similar
        technologies on the {business.product} website and platform ({business.website}).
      </p>

      <h2 style={h2}>1. What Are Cookies</h2>
      <p style={p}>
        Cookies are small text files stored on your device when you visit a website. They help
        websites remember information about your visit, which can make it easier to use the
        site and can make the site more useful to you.
      </p>

      <h2 style={h2}>2. Cookies We Use</h2>
      <ul style={ul}>
        <li><strong>Essential cookies</strong> — required for core site functionality, such as keeping you logged in to your {business.product} account and maintaining session security.</li>
        <li><strong>Preference cookies</strong> — remember choices you make (such as billing cycle toggle on the Pricing page) to improve your experience.</li>
        <li><strong>Analytics cookies</strong> — help us understand how visitors use our website so we can improve performance and content.</li>
      </ul>

      <h2 style={h2}>3. Managing Cookies</h2>
      <p style={p}>
        Most web browsers allow you to control cookies through their settings. You can choose to
        block or delete cookies; however, doing so may affect the functionality of the{' '}
        {business.product} website and dashboard.
      </p>

      <h2 style={h2}>4. Third-Party Cookies</h2>
      <p style={p}>
        Some cookies may be placed by trusted third-party services we use for analytics and
        infrastructure. These third parties have their own privacy and cookie policies governing
        the use of such cookies.
      </p>

      <h2 style={h2}>5. Changes to This Policy</h2>
      <p style={p}>
        We may update this Cookie Policy periodically. Changes will be reflected by updating the
        "Last updated" date at the top of this page.
      </p>

      <h2 style={h2}>6. Contact Us</h2>
      <p style={p}>
        If you have questions about our use of cookies, contact us at {business.email} or{' '}
        {business.phone}.
      </p>
    </>
  )
}

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      description="Learn how INSTIFY, operated by Mahi Creation, uses cookies on its website and platform."
      path="/cookie-policy"
      lastUpdated="July 9, 2026"
    >
      <Body />
    </LegalLayout>
  )
}
