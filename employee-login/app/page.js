
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          width: "400px",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ color: "#333" }}>
          Welcome to Our Website
        </h1>

        <p style={{ color: "#666", marginBottom: "25px" }}>
          Please login or create an account to continue.
        </p>

        <Link href="/login">
          <button
            style={{
              padding: "12px 25px",
              margin: "8px",
              background: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button
            style={{
              padding: "12px 25px",
              margin: "8px",
              background: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
