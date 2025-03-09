import React from 'react';
import SubscriptionCard from './SubscriptionCard';
import { useSelector } from 'react-redux';
import { store } from '@/Redux/Store';

const monthlyPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Customization Options",
  "Integration Support",
  "Advanced Security",
  "Training and Resources",
  "Access Control",
  "Custom Workflows",
];

const annualPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Everything included in Monthly Plan",
];

const freePlan = [
  "Add only 3 projects",
  "Basic Task Management",
  "Project Collaboration",
  "Basic Reporting",
  "Email Notifications",
  "Basic Access Control",
];

const Subscription = () => {

  const { subscription } = useSelector(store => store)
  return (
    <div className="p-10">
      <h1 className="text-6xl font-extrabold text-center py-5 pb-16 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    text-transparent bg-clip-text drop-shadow-lg animate-fade-in">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planName: "Free",
            features: freePlan,
            planType: "FREE",
            price: 0,
            buttonName: subscription.userSubscriptions?.planType == "FREE" ?
              "Current Plan" : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Monthly Paid Plan",
            features: monthlyPlan,
            planType: "MONTHLY",
            price: 799,
            buttonName: subscription.userSubscriptions?.planType == "MONTHLY" ?
              "Current Plan" : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Annual Paid Plan",
            features: annualPlan,
            planType: "ANNUALLY",
            price: 6711,
            buttonName: subscription.userSubscriptions?.planType == "ANNUALLY" ?
              "Current Plan" : "Get Started",
          }}
        />
      </div>
    </div>
  );
};

export default Subscription;
