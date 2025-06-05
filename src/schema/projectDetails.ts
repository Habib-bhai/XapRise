import {z} from "zod"

export const projectDetails = z.object({
    name: z.string().min(3, {message: "Name must be 3 characters"}),
    email: z.string().email(),
    company: z.string(),
    message: z.string()
})