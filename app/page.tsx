import HightlightCustomers from "@/components/hightlight-customers";
import Navbar from "@/components/navbar";
import ProductionPlans from "@/components/plannings";
import ProductionProgress from "@/components/production-progress";
import ProductionSituations from "@/components/production-situations";
import RawMaterials from "@/components/raw-materials";
import Widgets from "@/components/widgets";

export default function Home() {
  return (
    <div className=" grid gap-6 pb-6">
      <Navbar />

      <Widgets />

      <div className="wrapper-content">
        <div className="flex gap-6 min-h-[500px]">
          <ProductionPlans />

          <HightlightCustomers />
        </div>
      </div>

      <div className="wrapper-content">
        <div className="flex gap-6 min-h-[580px]">
          <ProductionSituations />

          <ProductionProgress />

          <RawMaterials />
        </div>
      </div>
    </div>
  );
}
