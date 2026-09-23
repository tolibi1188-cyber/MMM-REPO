import React, { useState } from "react";
import { useErpContext } from "../../../context/ErpContext";
import InvestorOverviewPanel from "./InvestorOverviewPanel";
import InvestorAnalyticsCards from "./InvestorAnalyticsCards";
import InvestorSegmentTabs from "./InvestorSegmentTabs";
import InvestorFilterPanel from "./InvestorFilterPanel";
import InvestorTable from "./InvestorTable";
import InvestorActionMenu from "./InvestorActionMenu";
import InvestorAdvancedDrawer from "./InvestorAdvancedDrawer";

const InvestorsView: React.FC = () => {
  const { investors } = useErpContext();

  const [filters, setFilters] = useState({});
  const [segment, setSegment] = useState("ALL");
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [actionMenuInvestor, setActionMenuInvestor] = useState(null);

  return (
    <div className="p-6 space-y-4">

      <InvestorOverviewPanel investors={investors} />
      <InvestorAnalyticsCards investors={investors} />

      <InvestorSegmentTabs active={segment} setActive={setSegment} />
      <InvestorFilterPanel filters={filters} setFilters={setFilters} />

      <InvestorTable
        investors={investors}
        onRowClick={setActionMenuInvestor}
        onRowDoubleClick={setSelectedInvestor}
      />

      {actionMenuInvestor && (
        <InvestorActionMenu
          investor={actionMenuInvestor}
          onOpenDrawer={() => {
            setSelectedInvestor(actionMenuInvestor);
            setActionMenuInvestor(null);
          }}
        />
      )}

      <InvestorAdvancedDrawer
        investor={selectedInvestor}
        onClose={() => setSelectedInvestor(null)}
      />
    </div>
  );
};

export default InvestorsView;
