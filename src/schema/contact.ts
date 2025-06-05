import {z} from "zod"


export const contactFormSchema = z.object({
    firstName : z.string().min(3, {message: "Name must be atleast 3 characters"}),
    lastName : z.string().min(3, {message: "Last Name must be atleast 3 characters"}),
    service : z.enum(["Autonomous AI Agents Development","AI Voice Agents & Automated Workflows","Enterprise Application Development", "Custom Web Development", "API Development And Integration", "Headless CMS Integration", "E-Commerce Solutions", "Single Page Applications", "Migration And Upgradation", "Consulting"]),
    company: z.string().min(3, {message: "company name must be 3 characters"}),
    email: z.string().email(),
    phone : z.string().min(10,{ message: "Number must be atleast 10 characters"} ),
    query : z.string().min(30, {message: "Query must be 30 characters long"})

})