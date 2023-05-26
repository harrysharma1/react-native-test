import { SanityClient } from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/";

const client = new SanityClient({
    projectId: "0vum0my8",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25",
});

const builder = SanityImageSource(client);
export const urlFor = (source) => builder.image(source);
export default client;