export async function GET() {
    console.log('This is user API call');
    
    // You can return a response here if needed
    return new Response('User API call successful', { status: 200 });
}
