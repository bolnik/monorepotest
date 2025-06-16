import { Button, Layout, Text } from "@shopify/polaris";
import { useGlobalStore } from "@/app/store";
import GoToSetupButton from "../_shared_/GoToSetupCta";

export default function HeroSection() {
  const { goToSetup } = useGlobalStore();
  return (
    <Layout.Section>
      <div className="hero-gradient p-8 rounded-lg relative">
        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="hero-title mb-6">
              <Text as="h1" variant="heading3xl">
                Turn Every Customer Voice Into
              </Text>
              <Text as="h1" variant="heading3xl">
                <div className="relative">
                  <Text as="h1" variant="heading3xl">
                    Revenue Growth
                  </Text>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C100 2 200 2 298 10"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </Text>
            </div>

            <div className="mt-6 space-y-6">
              <Text as="p" variant="bodyLg" tone="subdued">
                &ldquo;Heard&rdquo; is your AI-powered customer feedback analysis tool
              </Text>

              <div className="custom-primary-text">
                <Text as="p" variant="headingLg">
                  &ldquo;Customers must be Heard.&rdquo;
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="animate-pulse">
              <GoToSetupButton>
                🚀 Start Free Trial - 90 Days
              </GoToSetupButton>
            </div>
            <Button
              variant="secondary"
              size="large"
              onClick={() => console.log("View demo")}
            >
              📹 Watch 2-Min Demo
            </Button>
          </div>

          <div className="text-sm text-[var(--muted-foreground)]">
            <span>
              ✨ No credit card required • ⚡ Setup in 5 minutes • 🔒 GDPR
              compliant
            </span>
          </div>
        </div>
      </div>
    </Layout.Section>
  );
}
