import { log } from "console";
import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET( request : NextRequest) {
    
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get('Authorization'));

    const headersList = await headers();
    console.log(headersList.get('User-Agent'));

    const theme = request.cookies.get('theme') // 1st method to extract cookies from request
    console.log(theme)

    const cookieStore = await cookies();     //2nd method to set cookies
    cookieStore.set('resultsPerPage' , '20')

    console.log(cookieStore.get('resultsPerPage')) //2nd method to extract cookies


    
    // You can return a response here if needed
    return new Response('<h1>User API call successful</h1>', {
        headers : {
            'Content-Type' : 'text',
            'Set-Cookie' : 'theme=dark', // 1st method to set cookies
    }
    });
}
