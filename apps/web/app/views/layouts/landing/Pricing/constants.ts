const constants = {
  pricingItems: [
    {
      title: "Free Trial",
      price: "$0",
      period: "/90 days",
      features: [
        "Up to 100 survey responses",
        "Basic NPS analytics",
        "Email survey delivery",
        "Basic support"
      ],
      buttonText: "Start Free Trial",
      variant: "secondary" as const,
      isPopular: false
    },
    {
      title: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 1,000 survey responses",
        "Advanced NPS analytics",
        "Smart theme grouping",
        "Negative feedback alerts",
        "Priority support"
      ],
      buttonText: "Choose Starter",
      variant: "primary" as const,
      isPopular: true
    },
    {
      title: "Growth",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited survey responses",
        "Advanced analytics & insights",
        "Custom branding",
        "API access",
        "Dedicated support"
      ],
      buttonText: "Choose Growth",
      variant: "secondary" as const,
      isPopular: false
    }
  ]
};

export default constants;