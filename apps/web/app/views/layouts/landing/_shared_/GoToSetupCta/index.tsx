import { Button } from "@shopify/polaris";
import { useRouter } from "next/navigation";

export default function GoToSetupButton({
  children,
}: {
  children: string;
}) {
  const router = useRouter();
  return (
    <Button
      variant="primary"
      size="large"
      onClick={() => router.push("/setup")}
    >
      {children}
    </Button>
  );
}
