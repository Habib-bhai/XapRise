import {defineField, defineType} from "sanity"


export default defineType({
    name: "contact",
    type: "document",
    title: "Contact",
    fields: [
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string"
        }),
        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string"
        }),
        defineField({
            name: "service",
            title: "Service",
            type: "string"
        }),
        defineField({
            name: "company",
            title: "Comapany",
            type: "string"
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "email"
        }),
        defineField({
            name: "phone",
            title: "Phone",
            type: "string"
        }),
        defineField({
            name: "query",
            title: "Query or Message",
            type: "string"
        }),
    ]
})

