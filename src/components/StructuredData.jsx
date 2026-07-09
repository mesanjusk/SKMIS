import { Helmet } from 'react-helmet-async'
import { business } from '../data/business'

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${business.website}/#organization`,
        name: business.legalName,
        alternateName: business.product,
        url: business.website,
        brand: {
          '@type': 'Brand',
          name: business.product,
        },
        telephone: business.phone,
        email: business.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gondia',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        areaServed: 'IN',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: business.phone,
          email: business.email,
          contactType: 'customer support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${business.website}/#website`,
        url: business.website,
        name: business.product,
        publisher: { '@id': `${business.website}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: business.product,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        brand: {
          '@type': 'Brand',
          name: business.product,
        },
        creator: { '@id': `${business.website}/#organization` },
        publisher: { '@id': `${business.website}/#organization` },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
