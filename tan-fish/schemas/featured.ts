export default {
    name: 'featured',
    title: 'Featured dishes',
    type: 'document',
    fields: [
        {
            name: 'dish',
            title: 'Dish',
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
            name: 'restaurant',
            title: 'Restaurant',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'restaurant'}]}],
        }
    ],

}