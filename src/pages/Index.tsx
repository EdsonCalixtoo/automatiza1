import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { VehiclesCatalog } from "@/components/home/VehiclesCatalog";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ReplacementParts } from "@/components/home/ReplacementParts";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <VehiclesCatalog />
      <WhyChooseUs />
      <ReplacementParts />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
