import { Button, Card, Layout, Text } from "@shopify/polaris";
import GoToSetupButton from "../_shared_/GoToSetupCta";

export default function GetStarted() {
  return (
    <Layout.Section>
      <Card>
        <div className="p-6 text-center">
          <Text as="h2" variant="headingLg">
            Ready to Get Started?
          </Text>
          <div className="mt-4 mb-6">
            <Text as="p" variant="bodyMd" tone="subdued">
              Join thousands of merchants already using Heard to improve
              customer satisfaction
            </Text>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="animate-pulse">
              <GoToSetupButton
              >
                Get Started Free
              </GoToSetupButton>
            </div>
            <Button
              variant="secondary"
              size="large"
              onClick={() => console.log("Contact sales")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </Card>
    </Layout.Section>
  );
}
