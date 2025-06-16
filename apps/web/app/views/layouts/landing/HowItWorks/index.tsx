import { Card, Layout, Text } from "@shopify/polaris";
import constants from "./constants";

const { steps: STEPS } = constants;

export default function HowItWorks() {
  return (
    <Layout.Section>
      <Card>
        <div className="flex flex-col gap-2 p-4">
          <Text as="h2" variant="headingLg" alignment="center">
            How <span className="text-primary">Heard</span> Works
          </Text>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, index) => (
              <div className="flex flex-col items-center text-center" key={index}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[oklch(0.95_0.05_250)] mb-4">
                  <div className="custom-primary-text">
                    <Text as="span" variant="bodyMd" fontWeight="bold">
                      {index + 1}
                    </Text>
                  </div>
                </div>
                <div className="mb-1.5">
                  <Text as="h3" variant="headingMd">
                    {step.title}
                  </Text>
                </div>
                <Text as="p" variant="bodyMd" tone="subdued">
                  {step.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Layout.Section>
  );
}
