"use client";

import { useState, useCallback, type FormEvent } from "react";
import { Dashboard } from "./components/Dashboard";

const STORAGE_KEY = "cpee-admin-auth";
const ADMIN_PASSWORD = "cpee2025!";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem(STORAGE_KEY, "true");
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Incorrect password");
      }
    },
    [password]
  );

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-primary">CPEE Admin</h1>
          <p className="mt-2 text-sm text-text-secondary">
            Enter password to access the dashboard
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            autoFocus
          />
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
