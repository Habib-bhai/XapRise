import { projectDetails } from "@/schema/projectDetails"
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

    const validatedData = await projectDetails.safeParseAsync(data)
     if (!validatedData.success) {
        const errorMessage = validatedData.error.errors[0]?.message || "Validation failed";
        return NextResponse.json({ error: errorMessage }, { status: 400 })
    }



    const sanityCreateResponse = await client.create({
        _type: "projectDetails",
        name: validatedData?.data?.name,
        email: validatedData?.data?.email,
        comapny: validatedData?.data?.company,
        message : validatedData?.data?.message,
    })


    return NextResponse.json({data : {createdAt : sanityCreateResponse._createdAt, id: sanityCreateResponse._id}}, {status: 200})


}