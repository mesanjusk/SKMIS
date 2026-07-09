import LegalLayout, { useLegalStyles } from '../../components/LegalLayout'
import { business } from '../../data/business'

function Body() {
  const { h2, p, ul } = useLegalStyles()
  return (
    <>
      <p style={p}>
        This Cancellation Policy explains how you can cancel your {business.product} subscription
        or account, operated by {business.legalName}.
      </p>

      <h2 style={h2}>1. Cancelling a Subscription</h2>
      <ul style={ul}>
        <li>You may cancel your Starter or Pro subscription at any time from your account settings, or by contacting us at {business.email}.</li>
        <li>There are no lock-in contracts or long-term commitments — you can cancel whenever you like.</li>
        <li>Upon cancellation, your paid plan remains active until the end of the current billing period, after which your account moves to the Free plan.</li>
      </ul>

      <h2 style={h2}>2. Cancelling a Print Order</h2>
      <p style={p}>
        Print orders placed through the {business.product} vendor marketplace can be cancelled
        free of charge before the vendor begins production. Once production has started,
        cancellation may not be possible, or may be subject to a partial charge for work already
        completed.
      </p>

      <h2 style={h2}>3. Account Deletion</h2>
      <p style={p}>
        If you wish to permanently delete your {business.product} account and associated data,
        email {business.email} with your request. We will confirm deletion and remove your data
        in accordance with our{' '}
        <a href="/privacy-policy" style={{ color: '#059669' }}>Privacy Policy</a>, subject to any
        legal retention requirements.
      </p>

      <h2 style={h2}>4. Effect of Cancellation</h2>
      <p style={p}>
        After cancellation or downgrade, features exclusive to paid plans (such as bulk WhatsApp
        campaigns, advanced analytics, and print ordering) will no longer be accessible. Your
        existing data remains available under the Free plan's limits.
      </p>

      <h2 style={h2}>5. Contact Us</h2>
      <p style={p}>
        To cancel your subscription or account, contact us at {business.email} or{' '}
        {business.phone}.
      </p>
    </>
  )
}

export default function CancellationPolicy() {
  return (
    <LegalLayout
      title="Cancellation Policy"
      description="How to cancel your INSTIFY subscription or account, operated by Mahi Creation."
      path="/cancellation-policy"
      lastUpdated="July 9, 2026"
    >
      <Body />
    </LegalLayout>
  )
}
