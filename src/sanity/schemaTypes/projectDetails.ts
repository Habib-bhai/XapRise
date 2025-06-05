import { defineType,defineField  } from "sanity"


export default defineType({
    name: "projectDetails",
    title: "Project Details",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "email"
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string"
        }),
        defineField({
            name: "message",
            title: "Message",
            type: "string"
        }),
    ]
})