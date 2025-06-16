"use client";

import { useState } from "react";
import LandingPage from "./views/layouts/landing";
import DevelopmentPage from "./views/layouts/development";
import { Button } from "@shopify/polaris";

export default function Home() {
  const [showDevelopmentPage, setShowDevelopmentPage] = useState(false);

  // In development, show a toggle to switch between landing and dev pages
  if (process.env.NODE_ENV === 'development' && showDevelopmentPage) {
    return (
      <div>
        <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
          <Button onClick={() => setShowDevelopmentPage(false)}>
            Back to Landing
          </Button>
        </div>
        <DevelopmentPage />
      </div>
    );
  }

  return (
    <div>
      {/* {process.env.NODE_ENV === 'development' && (
        <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
          <Button onClick={() => setShowDevelopmentPage(true)}>
            Dev Tools
          </Button>
        </div>
      )} */}
      <LandingPage />
    </div>
  );
}
