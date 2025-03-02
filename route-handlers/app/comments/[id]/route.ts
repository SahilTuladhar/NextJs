import DummyData from "../data";

export async function GET( _request : Request , // -request used as here we are only concerned about the prop id
    {params} : { params : Promise<{ id : string}>
}) {
    const {id} = await params
    const user = DummyData.find((user) => (user.id === id) )
    return Response.json(user)

}

export async function PATCH(
    request : Request,
    {params} : { params : Promise<{ id : string }>} ,
) {
    const {id} = await params;
    const body = await request.json();
    const {age} = body;
    const {name} = body;

    const index = DummyData.findIndex((user) => user.id === id)
    DummyData[index].age = age;
    DummyData[index].name = name;

    return Response.json(DummyData)
}


export async function DELETE(
    _request : Request , 
    {params} : { params : Promise<{ id : string}>}
) {

    console.log("Current comments:", DummyData);

    const {id} = await params
    const index = DummyData.findIndex((user) => user.id === id)
    const deletedUser = DummyData[index]

    DummyData.splice(index , 1)

    return Response.json(deletedUser)
 
}

