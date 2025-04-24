// // components/ScrollNavigator.jsx
// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const routes = ["/", "/skills", "/aboutme", "/projects", "/contacts"];

// const ScrollNavigator = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     let lastScroll = 0;
//     let isScrolling = false;

//     const handleWheel = (e) => {
//       if (isScrolling) return;

//       isScrolling = true;
//       const currentIndex = routes.indexOf(location.pathname);

//       if (e.deltaY > 0 && currentIndex < routes.length - 1) {
//         navigate(routes[currentIndex + 1]);
//       } else if (e.deltaY < 0 && currentIndex > 0) {
//         navigate(routes[currentIndex - 1]);
//       }

//       setTimeout(() => {
//         isScrolling = false;
//       }, 1000); // delay to prevent rapid scrolling
//     };

//     window.addEventListener("wheel", handleWheel, { passive: true });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [location.pathname, navigate]);

//   return <div className="h-screen w-full overflow-hidden">{children}</div>;
// };

// export default ScrollNavigator;
// ScrollRouter.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = ["/", "/skills", "/aboutme", "/projects", "/contacts"];

const ScrollRouter = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let scrolling = false;

    const handleWheel = (e) => {
      if (scrolling) return;
      scrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = routes.indexOf(location.pathname);
      const nextIndex = currentIndex + direction;

      if (nextIndex >= 0 && nextIndex < routes.length) {
        navigate(routes[nextIndex]);
      }

      setTimeout(() => (scrolling = false), 2000); // Throttle scroll
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [location.pathname, navigate]);

  return <div className="h-screen overflow-hidden">{children}</div>;
};

export default ScrollRouter;
