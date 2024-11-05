import { createClient } from 'contentful';

const client = createClient({
  space: '1mcb3arrt51s', // replace with your Contentful Space ID
  accessToken: 'ibxuYmCBrK5Gaxo3XZc-8EZohL3rsECWgtFT0TSfHyU', // replace with your Contentful Access Token
});

export default client;
