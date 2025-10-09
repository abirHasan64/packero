import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css"; // ✅ Swiper global CSS

AOS.init({
  duration: 1000, // Faster animation (feels snappier)
  easing: "ease-in-out",
  once: false,
  mirror: false,
});

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
