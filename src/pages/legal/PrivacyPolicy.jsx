import LegalLayout, { useLegalStyles } from '../../components/LegalLayout'
import { business } from '../../data/business'

function Body() {
  const { h2, p, ul } = useLegalStyles()
  return (
    <>
      <p style={p}>
        {business.legalName} ("we", "us", "our") operates the {business.product} platform
        (the "Service"), available at {business.website}. This Privacy Policy explains how we
        collect, use, disclose, and safeguard information when you visit our website or use the
        Service.
      </p>

      <h2 style={h2}>Ownership</h2>
      <p style={p}><strong>{business.ownershipClause}</strong></p>

      <h2 style={h2}>1. Information We Collect</h2>
      <p style={p}>We may collect the following categories of information:</p>
      <ul style={ul}>
        <li>Contact details you provide, such as name, phone number, email address, institution name and city, when you fill out a form or sign up for {business.product}.</li>
        <li>Account and usage data generated while you use the {business.product} dashboard, including enquiry records, admission records, messages sent, and documents created.</li>
        <li>Technical data such as IP address, browser type, device information and pages visited, collected automatically for analytics and security purposes.</li>
        <li>Communication data, including messages sent to us via WhatsApp, phone, or email, and any support tickets you raise.</li>
      </ul>

      <h2 style={h2}>2. How We Use Your Information</h2>
      <ul style={ul}>
        <li>To provide, operate, and maintain the {business.product} platform.</li>
        <li>To respond to enquiries, provide customer support, and send service-related communication.</li>
        <li>To send WhatsApp, SMS or email notifications related to your account or your students/customers, where you have configured these features.</li>
        <li>To improve our website, features, and overall user experience.</li>
        <li>To comply with legal obligations and protect against fraudulent or unauthorized activity.</li>
      </ul>

      <h2 style={h2}>3. WhatsApp Business Communication</h2>
      <p style={p}>
        {business.product} integrates with WhatsApp Business to help institutions send
        transactional and informational messages such as enquiry acknowledgements, admission
        confirmations, and fee reminders. Messages are sent only to numbers provided by our
        customers, in accordance with WhatsApp's Business Policy and applicable law. We do not
        use WhatsApp to send unsolicited marketing messages to numbers we do not have a
        legitimate relationship with.
      </p>

      <h2 style={h2}>4. Data Sharing and Disclosure</h2>
      <p style={p}>
        We do not sell your personal information. We may share information with trusted
        third-party service providers (such as cloud hosting, payment processing, and messaging
        infrastructure providers) strictly to operate the Service, and only to the extent
        necessary. We may also disclose information if required by law or to protect the
        rights, property, or safety of {business.legalName}, our users, or others.
      </p>

      <h2 style={h2}>5. Data Security</h2>
      <p style={p}>
        We use industry-standard technical and organizational measures, including encrypted
        connections and access controls, to protect your data against unauthorized access,
        alteration, disclosure, or destruction. No method of transmission or storage is 100%
        secure, and we continuously work to improve our safeguards.
      </p>

      <h2 style={h2}>6. Data Retention</h2>
      <p style={p}>
        We retain personal information for as long as your account is active or as needed to
        provide the Service, comply with legal obligations, resolve disputes, and enforce our
        agreements.
      </p>

      <h2 style={h2}>7. Your Rights</h2>
      <p style={p}>
        You may request access to, correction of, or deletion of your personal information by
        contacting us at {business.email}. We will respond to verified requests within a
        reasonable timeframe.
      </p>

      <h2 style={h2}>8. Cookies</h2>
      <p style={p}>
        Our website uses cookies and similar technologies to improve functionality and analyze
        traffic. See our <a href="/cookie-policy" style={{ color: '#059669' }}>Cookie Policy</a> for
        details.
      </p>

      <h2 style={h2}>9. Children's Privacy</h2>
      <p style={p}>
        While {business.product} is used by schools and institutes to manage student records,
        the Service itself is intended for use by staff and administrators, not directly by
        children. Institutions using {business.product} are responsible for ensuring they have
        appropriate consent to store student data on the platform.
      </p>

      <h2 style={h2}>10. Changes to This Policy</h2>
      <p style={p}>
        We may update this Privacy Policy from time to time. Material changes will be reflected
        by updating the "Last updated" date at the top of this page.
      </p>

      <h2 style={h2}>11. Contact Us</h2>
      <p style={p}>
        If you have questions about this Privacy Policy, please contact us at {business.email}{' '}
        or {business.phone}.
      </p>
    </>
  )
}

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="Read how Sanju SK Digital - Mahi Creation collects, uses, and protects your data on the INSTIFY platform."
      path="/privacy-policy"
      lastUpdated="July 9, 2026"
    >
      <Body />
    </LegalLayout>
  )
}
