import NyanCat from "@/components/nyan-cat";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import React, { Suspense } from "react";

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline 
          scene="/assets/404.spline" 
          style={{ height: "100vh" }}
          onError={(error: any) => {
            // Suppress Spline runtime error about .spline vs .splinecode files
            // This is a known issue with Spline library
            const errorMessage = error?.message || error?.toString() || "";
            if (errorMessage.includes("splinecode")) {
              console.warn("Spline file format warning (expected):", errorMessage);
              return;
            }
            console.error("Spline loading error:", error);
          }}
        />
      </Suspense>
    </>
  );
};

export default NotFoundPage;
