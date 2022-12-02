/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   nextConfig,
//   images:{
//     domains:['api.themoviedb.org']
//   },
//   async rewrites(){
//     return[
//       {
//         source: '/3/:path*',
//         destination: 'https://api.themoviedb.org/3/:path*',
//       }
//     ]
//   }
// }

module.exports ={
  images:{
    domains:['image.tmdb.org']
  },
  async rewrites(){
    return[
      {
        source:'/3/:path',
        destination:'https://api.themoviedb.org/:path'
      }
    ]
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/about',
  //       headers: [
  //         {
  //           key: 'Content-Type',
  //           value: 'application/json',
  //         },
  //         {
  //           key: 'Authorization',
  //           value: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk2OGM4YWIzZjJkODYxMzhiMjY3YmZmNTY2ZDUyNCIsInN1YiI6IjYzODgxMWUxMDM5OGFiMDBhOGZiZDY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ll17EEBu6bAZ6GiQwDOhbTimRY9idz2hiy56Wey6yyEmy other custom header value',
  //         },
  //       ],
  //     },
  //   ]
  // },
}