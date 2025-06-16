import { Card, Layout, Text, Button, Modal } from "@shopify/polaris";
import { useState } from "react";
import constants from "./constants";
import styles from "./styles.module.css";

const { privacyItems: PRIVACY_ITEMS } = constants;

export default function Tos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <Layout.Section>
      <Card>
        <div className="p-4">
          <Text as="h2" variant="headingLg">
            Privacy & Security
          </Text>
          <div className="mt-4 space-y-2">
            {PRIVACY_ITEMS.map((item, index) => (
              <Text key={index} as="p" variant="bodyMd">
                • {item}
              </Text>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button onClick={handleModalOpen}>Read More</Button>
          </div>
        </div>
      </Card>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        title="Your Customers&apos; Feedback Is Safe With Us"
      >
        <Modal.Section>
          <div className="space-y-6">
            <Text as="h2" variant="headingMd">
              Why You Can Trust Heard&apos;s NPS Survey Platform
            </Text>

            <div className="space-y-4">
              <div className="space-y-2">
                <Text as="h3" variant="headingMd">🔍 What We Collect (And What We Don&apos;t)</Text>
                <Text as="p" variant="bodyMd">
                  Heard collects only what&apos;s necessary to generate valuable customer insights:
                </Text>
                <div className="space-y-1">
                  <Text as="p" variant="bodyMd">✅ NPS Score (0–10)</Text>
                  <Text as="p" variant="bodyMd">✅ Optional customer comments</Text>
                  <Text as="p" variant="bodyMd">✅ Anonymized or order-linked identifiers (no sensitive data)</Text>
                </div>
                <Text as="p" variant="bodyMd">
                  We don&apos;t collect passwords, payment information, or sensitive personal data.
                </Text>
              </div>

              <div className="space-y-2">
                <Text as="h3" variant="headingMd">🔐 Security & Infrastructure You Can Trust</Text>
                <Text as="p" variant="bodyMd">
                  We apply industry-leading practices to keep your data secure:
                </Text>
                <div className="space-y-1">
                  <Text as="p" variant="bodyMd">• End-to-End Encryption: All data is encrypted in transit (HTTPS/TLS) and at rest (AES-256).</Text>
                  <Text as="p" variant="bodyMd">• Trusted Hosting: Data is hosted in secure environments with ISO 27001, SOC 2 certified infrastructure.</Text>
                  <Text as="p" variant="bodyMd">• Access Control: Only authorized personnel have access under strict role-based permissions.</Text>
                </div>
              </div>

              <div className="space-y-2">
                <Text as="h3" variant="headingMd">📟 Full Transparency & Control</Text>
                <Text as="p" variant="bodyMd">
                  You stay in control of your customer data:
                </Text>
                <div className="space-y-1">
                  <Text as="p" variant="bodyMd">• Export, delete, or review data at any time</Text>
                  <Text as="p" variant="bodyMd">• We never resell or share data with third parties</Text>
                  <Text as="p" variant="bodyMd">• You can request our Data Processing Agreement (DPA) for full transparency</Text>
                </div>
              </div>

              <div className="space-y-2">
                <Text as="h3" variant="headingMd">📜 Privacy Law Compliance</Text>
                <Text as="p" variant="bodyMd">
                  Heard is compliant with major privacy regulations:
                </Text>
                <div className="space-y-1">
                  <Text as="p" variant="bodyMd">• GDPR (EU)</Text>
                  <Text as="p" variant="bodyMd">• UK Data Protection Act 2018</Text>
                  <Text as="p" variant="bodyMd">• Privacy by Design principles</Text>
                </div>
                <Text as="p" variant="bodyMd">
                  We proactively protect your reputation and legal standing.
                </Text>
              </div>

              <div className="space-y-2">
                <Text as="h3" variant="headingMd">🧪 Try It Without Risk</Text>
                <Text as="p" variant="bodyMd">
                  Use sandbox mode to simulate the full NPS experience without involving real customer data.
                </Text>
              </div>

              <div className="space-y-2">
                <Text as="h3" variant="headingMd">💬 What Other Sellers Say</Text>
                <div className="italic">
                  <Text as="p" variant="bodyMd">
                    &ldquo;We&apos;ve gained deeper insight and better retention through Heard—without compromising customer privacy.&rdquo;
                  </Text>
                </div>
              </div>

              <div className="space-y-2">
                <Text as="h3" variant="headingMd">📩 Want to Learn More?</Text>
                <Text as="p" variant="bodyMd">
                  Ask us for a Security Overview PDF or schedule a quick demo. We&apos;ll walk you through exactly how we keep your data safe.
                </Text>
              </div>
            </div>
          </div>
        </Modal.Section>
      </Modal>
    </Layout.Section>
  );
}
