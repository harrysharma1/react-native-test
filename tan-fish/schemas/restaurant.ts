export default {
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Restaurant Name',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: { max: (arg0: number) => any; }) => Rule.max(200),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'longitude',
            title: 'Longitude',
            type: 'number',
        },
        {
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            valiation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; })=>
                Rule.required()
                    .min(0)
                    .max(5)
                    .error('Rating must be between 0 and 5')
        },
        {
            name: 'type',
            title: 'Category',
            validation: (Rule: { required: () => any; }) => Rule.required(),
            type: 'reference',
            to: [{type: 'category'}],
        },
        {
            name: 'dishes',
            title: 'Dishes',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'dish'}]}],
       
        },
    ]
}
