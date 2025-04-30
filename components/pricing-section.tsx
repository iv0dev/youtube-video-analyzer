"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check, X } from "lucide-react"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Free",
      description: "Perfect for occasional use and trying out the platform.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { included: true, text: "5 video analyses per month" },
        { included: true, text: "Basic summaries" },
        { included: true, text: "Key points extraction" },
        { included: false, text: "Sentiment analysis" },
        { included: false, text: "Downloadable reports" },
        { included: false, text: "Priority processing" },
        { included: false, text: "API access" },
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      description: "For content creators and researchers who need regular insights.",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        { included: true, text: "50 video analyses per month" },
        { included: true, text: "Advanced summaries" },
        { included: true, text: "Key points extraction" },
        { included: true, text: "Sentiment analysis" },
        { included: true, text: "Downloadable reports" },
        { included: false, text: "Priority processing" },
        { included: false, text: "API access" },
      ],
      buttonText: "Subscribe",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Business",
      description: "For teams and businesses with high-volume needs.",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        { included: true, text: "Unlimited video analyses" },
        { included: true, text: "Advanced summaries" },
        { included: true, text: "Key points extraction" },
        { included: true, text: "Sentiment analysis" },
        { included: true, text: "Downloadable reports" },
        { included: true, text: "Priority processing" },
        { included: true, text: "API access" },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "default" as const,
    },
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Simple, Transparent
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"> Pricing</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-8">
          Choose the plan that fits your needs. All plans include our core video analysis features.
        </p>

        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className={`text-lg ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}>Monthly</span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            className="data-[state=checked]:bg-red-600"
          />
          <span className={`text-lg ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}>
            Yearly <span className="text-red-400 text-sm">(Save 20%)</span>
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card
              className={`bg-white/10 border-white/20 backdrop-blur-sm h-full flex flex-col ${
                plan.popular ? "border-red-500 relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-white text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">/{billingCycle === "monthly" ? "month" : "year"}</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mr-2" />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-500"}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === "default"
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border-red-500 text-red-500 hover:bg-red-500/10"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h3>
        <p className="text-gray-300 mb-6">
          We offer tailored enterprise plans for organizations with specific requirements or high-volume needs. Our
          enterprise solutions include dedicated support, custom integrations, and advanced analytics.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white">Contact Enterprise Sales</Button>
      </motion.div>
    </div>
  )
}
