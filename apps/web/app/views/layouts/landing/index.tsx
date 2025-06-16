"use client";

import { Page, Layout } from "@shopify/polaris";
import "./styles.css";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import KeyFeatures from "./KeyFeatures";
import Pricing from "./Pricing";
import GetStarted from "./GetStarted";
import Tos from "./Tos";

export default function LandingPage() {
  return (
    <Page title="Welcome to Heard!">
      <Layout>
        <div className="[@media(max-width:540px)]:px-2">
          <HeroSection />
          <HowItWorks />
          <KeyFeatures />
          <Pricing />
          <GetStarted />
          <Tos />
          <Layout.Section />
        </div>
      </Layout>
    </Page>
  );
}
