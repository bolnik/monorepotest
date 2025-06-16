import { Card, Icon, Layout, Text } from "@shopify/polaris";
import constants from "./constants";

const { features: FEATURES } = constants;

export default function KeyFeatures() {
  return (
    <Layout.Section>
      <div className="mt-6" />
      <Text as="h2" variant="headingLg">
        Why use <span className="text-primary">Heard</span>?
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {FEATURES.map((feature, index) => (
          <Card key={index}>
            <div className="p-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-[oklch(0.95_0.05_250)] border-l-4 border-[var(--primary)]">
                  <Icon source={feature.icon} tone="base" />
                </div>
                <Text as="h3" variant="headingMd">
                  {feature.title}
                </Text>
              </div>
              <Text as="p" variant="bodyMd" tone="subdued">
                {feature.description}
              </Text>
            </div>
          </Card>
        ))}
      </div>
    </Layout.Section>
  );
}
