import React from 'react';
import { Helmet } from 'react-helmet';

function Meta({title}) {
  return <Helmet>
    <title>Platzi Conf Merch - { title }</title>
    <meta name="description" content="Platzi Conf Merch" />
    <meta
      name="robots"
      content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    {/* <link rel="canonical" href={url} /> */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Platzi Conf Merch" />
    <meta property="og:description" content="Platzi Conf Merch" />
    {/* <meta property="og:url" content={url} /> */}
    <meta property="og:site_name" content="Platzi Conf Merch" />
    <meta property="og:image" />
    <meta property="og:image:secure_url" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="720" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@max_wolts" />
    <meta name="twitter:creator" content="@max_wolts" />
    <meta name="twitter:title" content="Platzi Conf Store" />
    <meta name="twitter:description" />
    <meta name="twitter:image" />
  </Helmet>
}

export default Meta;