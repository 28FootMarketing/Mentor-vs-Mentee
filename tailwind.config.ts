import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-ink": "#00052e",
        "signal-blue": "#0428cb",
        "arc-cyan": "#34fcff",
        "halo-violet": "#afb4db",
        carbon: "#222222",
        "slate-body": "#4f5166",
        fog: "#6b6b83",
        mist: "#8185a0",
        "silver-border": "#dbdcdf",
        paper: "#ffffff",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        label: ["var(--font-label)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        micro: ["11px", { lineHeight: "1.82", letterSpacing: "1px" }],
        caption: ["14px", { lineHeight: "1.5" }],
        "body-sm": ["16px", { lineHeight: "1.54" }],
        body: ["18px", { lineHeight: "1.57" }],
        subheading: ["27px", { lineHeight: "1.41", letterSpacing: "-0.41px" }],
        "heading-sm": ["35px", { lineHeight: "1.38", letterSpacing: "-0.49px" }],
        heading: ["40px", { lineHeight: "1.3", letterSpacing: "-0.6px" }],
        "heading-lg": ["54px", { lineHeight: "1.3", letterSpacing: "-1.03px" }],
        display: ["59px", { lineHeight: "1.26", letterSpacing: "-1.12px" }],
      },
      borderRadius: {
        tags: "4px",
        cards: "8px",
        images: "4px",
        buttons: "8px",
      },
      spacing: {
        "4": "4px",
        "10": "10px",
        "15": "15px",
        "16": "16px",
        "20": "20px",
        "21": "21px",
        "23": "23px",
        "24": "24px",
        "26": "26px",
        "30": "30px",
        "40": "40px",
        "43": "43px",
        "80": "80px",
        "100": "100px",
        "120": "120px",
        "196": "196px",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
