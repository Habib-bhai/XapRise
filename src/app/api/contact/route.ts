import { contactFormSchema } from "@/schema/contact"
import { createClient } from "next-sanity"
import { NextRequest, NextResponse } from "next/server"


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_SECRET_KEY,
    useCdn: false,
    apiVersion: '2025-01-18'
})


export const POST = async(Request: NextRequest) =>{

    const data = await Request.json()

    const validatedData = await contactFormSchema.safeParseAsync(data)
     if (!validatedData.success) {
        const errorMessage = validatedData.error.errors[0]?.message || "Validation failed";
        return NextResponse.json({ error: errorMessage }, { status: 400 })
    }



    const sanityCreateResponse = await client.create({
        _type: "contact",
        firstName: validatedData?.data?.firstName,
        lastName: validatedData?.data?.lastName,
        service: validatedData?.data?.service,
        company : validatedData?.data?.company,
        email : validatedData?.data?.email,
        phone : validatedData?.data?.phone,
        query : validatedData?.data?.query,
    })


    return NextResponse.json({data : {createdAt : sanityCreateResponse._createdAt, id: sanityCreateResponse._id}}, {status: 200})


}