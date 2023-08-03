module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [""],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cadet: "#22223B",
        independence: "#4A4E69",
        independenceHover: "#6b7199",
        hellotrope: "#9A8C98",
        silverpink: "#C9ADA7",
        isabelline: "#F2E9E4",
        nadide1: "#f1f1f1",
        isabellineHover: "#ffffff",
        twitter: "#00acee",
        linkedin: "#0e76a8",
      },
      fill: (theme) => theme("colors"),
      fontFamily: {
        koho: ["KoHo"],
        inter: ["Inter"],
        nadide: ["Rock Salt"],
      },
      fontSize: {
        "front-big": "8rem",
      },
      backgroundImage: (theme) => ({
        "mainback-img": "url('img/mainback.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
