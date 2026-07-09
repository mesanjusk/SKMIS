import LegalLayout, { useLegalStyles } from '../../components/LegalLayout'
import { business } from '../../data/business'

function Body() {
  const { h2, p, ul } = useLegalStyles()
  return (
    <>
      <p style={p}>
        This Refund Policy applies to subscription payments made for the {business.product}
        platform, operated by {business.legalName}. We want you to be satisfied with our
        Service, and this policy explains when refunds are available.
      </p>

      <h2 style={h2}>1. Free Plan</h2>
      <p style={p}>
        {business.product} offers a Free plan with no payment required, so you can evaluate the
        platform before subscribing to a paid plan.
      </p>

      <h2 style={h2}>2. Paid Subscriptions</h2>
      <ul style={ul}>
        <li>If you are charged in error due to a technical or billing issue on our end, you are entitled to a full refund of the erroneous charge.</li>
        <li>If you cancel a paid subscription within 7 days of your first payment on that plan and have not substantially used premium features (such as bulk WhatsApp campaigns or print ordering), you may request a full refund.</li>
        <li>Refund requests made after 7 days of a billing cycle, or for renewal payments, are evaluated on a case-by-case basis and are not guaranteed.</li>
      </ul>

      <h2 style={h2}>3. Non-Refundable Items</h2>
      <p style={p}>
        Charges for third-party print orders placed through the platform are subject to the
        print vendor's own policies and are generally non-refundable once production has begun,
        except in cases of vendor error or damaged goods.
      </p>

      <h2 style={h2}>4. How to Request a Refund</h2>
      <p style={p}>
        To request a refund, email {business.email} or WhatsApp us at {business.phone} with
        your account details and the reason for the request. We aim to review and respond to
        refund requests within 5 business days.
      </p>

      <h2 style={h2}>5. Refund Processing</h2>
      <p style={p}>
        Approved refunds are processed to the original payment method within 7–10 business days,
        depending on your bank or payment provider.
      </p>

      <h2 style={h2}>6. Contact Us</h2>
      <p style={p}>
        For any questions about this Refund Policy, reach us at {business.email} or{' '}
        {business.phone}.
      </p>
    </>
  )
}

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      description="Refund policy for INSTIFY subscription plans, operated by Mahi Creation."
      path="/refund-policy"
      lastUpdated="July 9, 2026"
    >
      <Body />
    </LegalLayout>
  )
}
