// import { useState, useEffect } from "react";

// const API_KEY = "b5cb501da7ea3ecb6172d76bcbe418e2";

// export default function StaffSearch() {
//   const [movies, setMovies] = useState([])

// //   useEffect(() => {
// //     (async () => {
// //       const data = await (
// //          await fetch(
// //         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
// //       )).json();
// //         setMovies(data.results)
// //     })();
// //   }, [])
// //   console.log("<-- 안녕 -->");
// //   console.log(setMovies);

// // (async () => {
// //     const data = await (
// //       await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
// //     ).json();
// //     console.log(data);
    
// //   })();

// (async () => {
//     const { results } = await (
//       await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
//     ).json();
//     setMovies(results);
//   })();

//   return (
//     // <div>
//     //   {!movies && <h4>Loading...</h4>}
//     //   {movies?.map(movie => <div key={movie.id}>
//     //     <h4>{movie.title}</h4>
//     //   </div>)}
//     // </div>
//     <div>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <h4>{movie.original_title}</h4>
//         </div>
//       ))}
//     </div>

//   );
// }


// // export default function StaffSearch() {

// //     const Index = (props) => (
// //         <>
// //             <ul>
// //             {productSampleItems.show.map(({show}) => (
// //                 <li key={show.id}>
// //                     <p>{show.name}</p>
// //                 </li>
// //             ))}
// //         </ul>
// //         </>
// //     )
// //     return (
// //         <>
// //         <div>안녕안녕</div>
// //         </>

// //     );
// // }