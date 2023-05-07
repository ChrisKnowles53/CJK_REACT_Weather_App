resolve: {
 fallback: {
   fs: require.resolve("fs"),
   path: require.resolve("path-browserify"),
   os: require.resolve("os-browserify/browser")
 }
}


// resolve: {
//   fallback: {
//     fs: false,
//     path: false,
//     os: false
//   }
// }



