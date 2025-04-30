// src/utils/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  apiVersion: '2022-08-06', // change to current if needed
  useCdn: import.meta.env.MODE === 'production',
};

export const sanityClient = createClient(config);
export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);
