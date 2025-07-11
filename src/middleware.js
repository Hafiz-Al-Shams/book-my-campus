import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const isLoggedIn = false; // This should be replaced with actual authentication logic

    const dummyUserData = {
        name: "Test User",
        email: "test@user.com",
    }

    let isMyCollegesPage = request.nextUrl.pathname.startsWith('/user-dashboard');


    // if (isMyCollegesPage && !isLoggedIn)
    if (isMyCollegesPage && !dummyUserData.email)
        return NextResponse.redirect(new URL('/login', request.url))
    // return NextResponse.rewrite(new URL('/login', request.url))   // helps user to be exactly where they were before login

    // console.log("PATHNAME:", request.nextUrl.pathname.startsWith('/colleges'))

    return NextResponse.next()
}


// export const config = {
//   matcher: '/about/:path*',
// }
