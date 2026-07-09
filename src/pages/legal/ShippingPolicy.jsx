import LegalLayout, { useLegalStyles } from '../../components/LegalLayout'
import { business } from '../../data/business'

function Body() {
  const { h2, p, ul } = useLegalStyles()
  return (
    <>
      <p style={p}>
        {business.product} is a cloud-based software platform operated by {business.legalName}.
        This Shipping Policy clarifies how physical items related to the Service, if any, are
        handled.
      </p>

      <h2 style={h2}>1. No Physical Products Sold Directly</h2>
      <p style={p}>
        {business.legalName} does not sell or ship any physical products directly.
        {' '}{business.product} is a digital, subscription-based software service delivered
        entirely online through your web browser — there is nothing to be shipped for the core
        platform.
      </p>

      <h2 style={h2}>2. Print Ordering Marketplace</h2>
      <p style={p}>
        {business.product} includes an optional feature that allows institutions to place print
        orders (such as ID cards, certificates, and banners) with third-party print vendors
        through the platform. In these cases:
      </p>
      <ul style={ul}>
        <li>The physical printed items are produced and shipped by the third-party vendor, not by {business.legalName}.</li>
        <li>Delivery timelines, packaging, and shipping charges are determined by the vendor fulfilling the order and communicated at the time of ordering.</li>
        <li>{business.legalName} facilitates order placement and tracking within the platform, and assists customers in resolving delivery issues with vendors.</li>
      </ul>

      <h2 style={h2}>3. Digital Delivery</h2>
      <p style={p}>
        All core {business.product} services — enquiry management, admission tracking, WhatsApp
        automation, document generation, and analytics — are delivered instantly and digitally
        through your account. No shipping or delivery time applies to these features.
      </p>

      <h2 style={h2}>4. Contact Us</h2>
      <p style={p}>
        For questions about print order deliveries or this Shipping Policy, contact us at{' '}
        {business.email} or {business.phone}.
      </p>
    </>
  )
}

export default function ShippingPolicy() {
  return (
    <LegalLayout
      title="Shipping Policy"
      description="INSTIFY is a digital-only platform operated by Mahi Creation; learn about our print order shipping details."
      path="/shipping-policy"
      lastUpdated="July 9, 2026"
    >
      <Body />
    </LegalLayout>
  )
}
