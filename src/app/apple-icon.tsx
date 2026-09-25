import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a14",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2v20M4.5 6 19.5 18M19.5 6 4.5 18M12 2l-1.6 2M12 2l1.6 2M12 22l-1.6-2M12 22l1.6-2M4.5 6l2.4.6M4.5 6l.6-2.4M19.5 6l-2.4.6M19.5 6l-.6-2.4M4.5 18l2.4-.6M4.5 18l.6 2.4M19.5 18l-2.4-.6M19.5 18l-.6 2.4"
            stroke="#c9c3ff"
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
};
