export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Dish Name',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(), 

        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'text',
            validation: (Rule: { max: (arg0: number) => any; }) => Rule.max(200),
        },
        {
            name: 'price',
            title: 'Price in GBP',
            type: 'number',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },

    ]
}
