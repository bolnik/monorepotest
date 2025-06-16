import { Button, Card, Layout, Text } from "@shopify/polaris";
import constants from "./constants";

const { pricingItems: PRICING_ITEMS } = constants;

export default function Pricing() {
  return (
    <Layout.Section>
      <div className="text-center mb-6 mt-10">
        <Text as="h2" variant="heading2xl">
          Simple, Transparent Pricing
        </Text>
        <div className="mt-2">
          <Text as="p" variant="bodyLg" tone="subdued">
            Start free, upgrade when you&apos;re ready. No hidden fees, cancel
            anytime.
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRICING_ITEMS.map((plan, index) => (
          <Card key={index}>
            <div className="px-6 pt-6 pb-4 text-center flex flex-col relative grow">
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[var(--primary)] text-[var(--primary-foreground)] px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4 mt-2">
                  <Text as="h3" variant="headingLg">
                    {plan.title}
                  </Text>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-[var(--primary)]">
                      {plan.price}
                    </span>
                    <Text as="span" variant="bodyMd" tone="subdued">
                      {plan.period}
                    </Text>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-green-500">✓</span>
                      <Text as="p" variant="bodyMd">
                        {feature}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  variant={plan.variant}
                  size="large"
                  fullWidth
                  onClick={() => console.log(`Choose ${plan.title}`)}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout.Section>
  );
}
