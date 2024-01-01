/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        DarkDesktop: "url('../src/assets/images/bg-desktop-dark.jpg')",
        LightDesktop: "url('../src/assets/images/bg-desktop-light.jpg')",
        DarkMobile: "url('../src/assets/images/bg-mobile-dark.jpg')",
        LightMobile: "url('../src/assets/images/bg-mobile-light.jpg')",
      },
      backgroundColor: {
        DarkBlue: "hsl(235, 21%, 11%)",
        LightGray: "hsl(0, 0%, 98%)",
        DarkDesatured: "hsl(235, 24%, 19%)",
      },
      fontFamily: {
        JoseFinBlod: ["JoseFinBlod"],
        JoseFinSemiBlod: ["JoseFinSemiBlod"],
      },
      textColor: {
        LightGrayishBlue: "hsl(234, 39%, 85%)",
        DarkGrayishWhite: "hsl(235, 19%, 35%)",
      },
      colors: {
        lightCheck: "hsl(192, 100%, 67%)",
        darkCheck: "hsl(280, 87%, 65%)",
        borderCheck: "hsl(233, 14%, 35%)",
        DarkGrayish: "hsl(233, 14%, 35%)",
        borderTodo: "hsl(237, 14%, 26%)",
        BrightBlue: "hsl(220, 98%, 61%)",
        LightGrayBlue: "hsl(236, 33%, 92%)",
        LightGrayishWhite: "hsl(0, 0%, 98%)",
        WhiteGrayish: "hsl(233, 11%, 84%)",
        DarkGrayishBlueWhite: "hsl(236, 9%, 61%)",
      },
      screens: {
        mobile: "300px",
      },
    },
  },
  plugins: [],
};
