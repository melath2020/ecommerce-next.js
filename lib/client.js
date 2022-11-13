import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId:'24cx0dda',
    dataset:'production',
    apiVersion:'2022-03-11',
    useCdn:true,
    ignoreBrowserTokenWarning: true,
    token:'skUInTOjXOiF5wcQz4ETzh6dbynCM0W2zjQiEJ3tmbiHUV0dhNz6QcBAGW4Yxyxlur6VpLSKnylJPg39lrHeXcwQ2YkUyn6S3hQx3ibdygcsr0CrlG714BjWcRW9PoFzdlA4hlMiiwV2GSRYJInnN4NF79tSwpMnWPSvOcGu8sbS03b3I1dT',
    
})
// process.env.NEXT_PUBLIC_SANITY_TOKEN

const builder =imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);