const InvestorFilterPanel = ({ filters, setFilters }) => {
  return (
    <div className="neu-card p-4 rounded-xl grid grid-cols-3 gap-4">
      <input
        className="neu-inset p-2 rounded-lg"
        placeholder="Ism bo‘yicha qidiruv"
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
    </div>
  );
};

export default InvestorFilterPanel;
