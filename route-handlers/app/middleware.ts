import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request : NextRequest) {

    const response = NextResponse.next()

    const themePreference = request.cookies.get('theme')

    if (!themePreference){
        response.cookies.set('theme','dark');
    }

    

    response.headers.set('custome-header' , 'custom-value')

    return response;

    // console.log('Middleware triggered for:' , request.nextUrl.pathname);
    // if (request.nextUrl.pathname === '/profile'){  // conditional statement approach
    //     return NextResponse.redirect(new URL('/hello' , request.url))
    // }
    
    // return NextResponse.redirect(new URL("/" , request.url))
}

// export const config = {    // config matcher method
//     matcher: ['/profile'],
//   }  