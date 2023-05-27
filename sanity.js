import  sanityClient  from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

const config = {
    dataset:  'production',
    projectId: '0vum0my8',
    useCdn:'production',
    apiVersion: '2021-03-25',
}
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
  
export const client = createClient(config)

