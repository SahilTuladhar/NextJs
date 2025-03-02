import { NextRequest } from 'next/server.js';
import DummyData from './data.js'

export async function GET(
    request : NextRequest
){  
    const searchParams = request.nextUrl.searchParams // extracts all the query parameters from the URL that sends the request
    const nameQuery = searchParams.get('nameQuery')
    const ageQuery = Number(searchParams.get('ageQuery'))
    const filteredUsers = nameQuery 
    ? DummyData.filter((user) => user.name.includes(nameQuery) && (user.age > ageQuery)) 
    : DummyData;

    return Response.json(filteredUsers);
   

}

export async function POST( request : Request) {

    const comment = await request.json();
    const newComment = {
        id: (DummyData.length + 1).toString(),
        name: comment.name,
        age: comment.age,
    };

    DummyData.push(newComment)

    return new Response(JSON.stringify(newComment) , {
        headers : {'Content-Type' : 'application/json'},
        status : 201

    })
} 
