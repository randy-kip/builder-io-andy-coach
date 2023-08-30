import React, { useEffect, useState } from "react";
// import './HeroSection.css'; // Import your CSS file for styling

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       <nav className="navbar">
//         <ul>
//             <li>
//                 Home
//             </li>
//             <li>
//                 About
//             </li>
//             </ul>
//       </nav>
//       <div className="hero-content">
//         <div className="logo">
//           {/* Your logo image */}
//         </div>
//         <div className="hero-image">
//           {/* <img src='https://c4.wallpaperflare.com/wallpaper/226/358/339/muscles-dark-men-fitness-model-model-hd-wallpaper-preview.jpg'></img> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import { useEffect, useState } from "react";
// import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

// // Put your API key here
// builder.init("764bcde002ec41968f5c0353506f9cca");

// // set whether you're using the Visual Editor,
// // whether there are changes,
// // and render the content if found
// export default function CatchAllRoute() {
//   const isPreviewingInBuilder = useIsPreviewing();
//   const [notFound, setNotFound] = useState(false);
//   const [content, setContent] = useState(null);

//   // get the page content from Builder
//    useEffect(() => {
//     async function fetchContent() {
//       const content = await builder
//         .get("page", {
//           url: window.location.pathname
//         })
//         .promise();

//       setContent(content);
//       setNotFound(!content);

//       // if the page title is found,
//       // set the document title
//       if (content?.data.title) {
//        document.title = content.data.title
//       }
//     }
//     fetchContent();
//   }, [window.location.pathname]);

//   // If no page is found, return
//   // a 404 page from your code.
//   // The following hypothetical
//   // <FourOhFour> is placeholder.
//   if (notFound && !isPreviewingInBuilder) {
//     return <h1>404 Error... </h1>
//   }

//   // return the page when found
//   return (
//     <>
//       {/* Render the Builder page */}
//       <BuilderComponent model="page" content={content} />
//     </>
//   );
// }

import { BuilderComponent, builder } from "@builder.io/react";
builder.init("764bcde002ec41968f5c0353506f9cca");
export const HeroSection = () => {
  const [builderContentJson, setBuilderContentJson] = useState(null);
  useEffect(() => {
    builder
    // eslint-disable-next-line no-restricted-globals
      .get("page", { url: location.pathname })
      .promise()
      .then(setBuilderContentJson);
  }, []);
  return (
    <>
      <BuilderComponent model="page" content={builderContentJson} />
    </>
  );
};
