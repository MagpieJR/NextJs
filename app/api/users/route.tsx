import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "/home/magpier/Desktop/NextJs/prisma/client"

// export function GET(request: NextRequest){
//     return NextResponse.json([
//         { id: 1, name: 'Mosh'},
//         { id: 2, name: 'John'}
//     ]);
// }

export async function GET(request: NextRequest){
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}


// export async function  POST(request: NextRequest){
//     const body = await request.json();
//     const validation = schema.safeParse(body);
//     if( !validation.success )
//     return NextResponse.json(validation.error.errors, { status: 400 });

//     // if( !body.name )
//     //     return NextResponse.json({ error: 'Name is required'}, { status: 400 });

//     return NextResponse.json(body, { status: 201 });
// }

export async function  POST(request: NextRequest){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if( !validation.success )
    return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if(user)
        return NextResponse.json({ error: 'User already exists.'}, { status: 400 });

    const newUser = await prisma.user.create({ 
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(newUser, { status: 201 });
}