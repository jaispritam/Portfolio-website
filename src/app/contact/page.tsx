import React from "react";

// Mark as dynamic to prevent static generation timeout
export const dynamic = 'force-dynamic';

function Page() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-zinc-200 mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-zinc-300">
          You can reach me at:{" "}
          <a
            href="mailto:pritamjais@gmail.com"
            className="text-blue-500 underline"
          >
            pritamjais@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Page;
