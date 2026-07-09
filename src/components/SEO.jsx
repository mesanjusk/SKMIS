import { Helmet } from 'react-helmet-async'
import { business } from '../data/business'

export default function SEO({ title, description, path = '/', breadcrumb }) {
  const fullTitle = title ? `${title} | INSTIFY` : 'INSTIFY | Business Management Software'
  const url = `${business.website}${path === '/' ? '' : path}`

  const breadcrumbSchema = breadcrumb ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: business.website },
      ...breadcrumb.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.name,
        item: `${business.website}${crumb.path}`,
      })),
    ],
  } : null

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title ? `${title} | INSTIFY` : 'INSTIFY'} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | INSTIFY` : 'INSTIFY'} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="index, follow" />
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  )
}
