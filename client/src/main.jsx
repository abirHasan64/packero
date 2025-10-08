import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 3000, // Animation duration (in ms)
  easing: "ease-in-out", // Smooth easing
  once: false, // Animate every time you scroll up/down
  mirror: true, // Don't re-animate when scrolling past back up
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
