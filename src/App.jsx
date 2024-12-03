import React, { useContext } from "react";
import { ContextStore } from "./Store/StoreContext";
import FeatureCard from "./Components/FeatureCard";
import Newsletter from "./Components/Newsletter";
import ResponsiveBanners from "./Components/ResponsiveBanners";
import ThreeBanners from "./Components/ThreeBanners";
import CategorySection from "./Components/CategorySection";
import ProductSection from "./Components/ProductSection";
import ResponsiveSlider from "./Components/ResponsiveSlider";

const App = () => {
  const { data } = useContext(ContextStore);
  console.log(data);
  return (
    <div className="min-h-[65vh]">
      {/* <Slider /> */}

      <ResponsiveSlider />
      <ThreeBanners />
      <CategorySection />
      <ProductSection />
      <FeatureCard />
      <ResponsiveBanners />
      <Newsletter />
    </div>
  );
};

export default App;
