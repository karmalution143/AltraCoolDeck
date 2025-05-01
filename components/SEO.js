// components/SEO.js
import Head from 'next/head'

export default function SEO({
  title = "Pool Deck Resurfacing in Phoenix | Altra Cool Deck",
  description = "We repair, resurface, and restore pool decks across Arizona. Free quotes, durable finishes.",
  image = 'https://altra-cool-deck.vercel.app/link_preview.jpg',
  url = 'https://altra-cool-deck.vercel.app/',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
