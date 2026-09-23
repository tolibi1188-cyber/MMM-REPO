const tabs = [
  { id: "ALL", label: "Barchasi" },
  { id: "OLD", label: "OLD" },
  { id: "NEW", label: "NEW" },
  { id: "RECOVERY_LOW", label: "Recovery < 50%" },
  { id: "RECOVERY_MID", label: "Recovery 50–99%" },
  { id: "RECOVERY_FULL", label: "Recovery 100%" },
];

const InvestorSegmentTabs = ({ active, setActive }) => {
  return (
    <div className="flex gap-2">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          className={`neu-btn px-4 py-2 rounded-lg ${
            active === t.id ? "bg-white/10" : ""
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

export default InvestorSegmentTabs;
