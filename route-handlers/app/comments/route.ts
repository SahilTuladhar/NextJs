import DummyData from './data.js'

export async function GET(){
    return Response.json(DummyData);
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