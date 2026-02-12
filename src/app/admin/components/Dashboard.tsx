"use client";

import { useState } from "react";
import { ScoreCard } from "./ScoreCard";
import {
  type Category,
  CATEGORY_LABELS,
  getItemsByCategory,
  getCategoryScore,
  getOverallScore,
} from "../data/checklist";

const TABS: readonly Category[] = ["seo", "aeo", "geo"];

const CATEGORY_COLORS: Readonly<Record<Category, string>> = {
  seo: "#1E3A5F",
  aeo: "#2A9D8F",
  geo: "#E9C46A",
};

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<Category>("seo");

  const overallScore = getOverallScore();
  const items = getItemsByCategory(activeTab);
  const failItems = items.filter((item) => item.status === "fail");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <h1 className="text-xl font-bold text-primary">
          CPEE Admin - SEO/AEO/GEO Dashboard
        </h1>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Score Cards */}
        <div className="flex flex-wrap items-end justify-center gap-8 md:gap-12">
          <ScoreCard
            label="Overall"
            score={overallScore}
            color="#1A202C"
            size="lg"
          />
          {TABS.map((cat) => (
            <ScoreCard
              key={cat}
              label={CATEGORY_LABELS[cat]}
              score={getCategoryScore(cat)}
              color={CATEGORY_COLORS[cat]}
            />
          ))}
        </div>

        {/* Weight Info */}
        <p className="mt-4 text-center text-xs text-text-tertiary">
          Overall = SEO(40%) + AEO(30%) + GEO(30%)
        </p>

        {/* Tabs */}
        <div className="mt-10 flex gap-1 rounded-lg bg-surface p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {CATEGORY_LABELS[tab]}
              <span className="ml-2 text-xs">
                {getCategoryScore(tab)}%
              </span>
            </button>
          ))}
        </div>

        {/* Checklist */}
        <div className="mt-6 space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-3 rounded-lg border px-4 py-3 ${
                item.status === "pass"
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <span className="mt-0.5 text-lg">
                {item.status === "pass" ? "\u2705" : "\u274C"}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-text-primary">
                    {item.label}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      item.status === "pass"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status === "pass" ? "PASS" : "FAIL"}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Improvement Guide */}
        {failItems.length > 0 && (
          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-800">
              Improvement Guide ({failItems.length} items)
            </h3>
            <ul className="mt-3 space-y-2">
              {failItems.map((item) => (
                <li key={item.id} className="flex items-start gap-2 text-sm text-amber-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    <strong>{item.label}</strong>
                    {item.guide ? ` — ${item.guide}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
