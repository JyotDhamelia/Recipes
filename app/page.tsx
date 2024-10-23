"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import parse from "html-react-parser";

export default function Example() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipeResult, setRecipeResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/search-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "An error occurred while searching for the recipe.");
      }
      const formattedResult = data.result.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      setRecipeResult(formattedResult);
    } catch (error) {
      console.error("Error searching recipe:", error);
      setRecipeResult("An error occurred while searching for the recipe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-green-100">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-green-700 ring-1 ring-green-900/10 hover:ring-green-900/20">
              Find the style.{" "}
              <a
                href="https://github.com/ninadvyas/All-Recipe"
                className="font-semibold text-green-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-6xl">
              Cook, Share, Explore
            </h1>
            <p className="mt-6 text-lg leading-8 text-green-700">
              Search for any recipe and get AI-powered cooking suggestions.
            </p>
            <form
              onSubmit={handleSearch}
              className="mt-8 flex items-center justify-center"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a recipe..."
                className="px-4 py-2 border border-green-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Search
              </button>
            </form>
            {isLoading ? (
              <div className="mt-8 p-4 bg-white rounded-md shadow-md text-left max-w-2xl mx-auto">
                <div className="animate-pulse">
                  <div className="h-4 bg-green-200 rounded w-1/4 mb-4"></div>
                  <div className="h-4 bg-green-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-green-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-green-200 rounded w-3/4"></div>
                </div>
              </div>
            ) : recipeResult && (
              <div className="mt-8 p-4 bg-white rounded-md shadow-md text-left max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-2 text-green-800">
                  Recipe Suggestion:
                </h2>
                <div className="text-green-700">{parse(recipeResult)}</div>
              </div>
            )}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
