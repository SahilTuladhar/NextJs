
export const dynamic = 'force-static';


export async function GET() {
    const catergories = [
        {
            id : '1',
            name : 'Sports',
        },
        {
            id : '2',
            name : 'food',
        },
        {
            id : '3',
            name : 'News',
        }
    ]

    return Response.json(catergories)
}