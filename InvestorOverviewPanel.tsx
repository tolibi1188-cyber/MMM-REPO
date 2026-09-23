const InvestorOverviewPanel = ({ investors }) => {
  const total = investors.length;
  const totalBalance = investors.reduce((a, b) => a + b.balance, 0);

  return (
    <div className="neu-card p-4 rounded-xl grid grid-cols-2 gap-4">
      <div>
        <p className="PlusJakartaSans text-sm opacity-70">Jami investorlar</p>
        <p className="JetBrainsMono text-3xl">{total}</p>
      </div>

      <div>
        <p className="PlusJakartaSans text-sm opacity-70">Jami balans</p>
        <p className="JetBrainsMono text-3xl">${totalBalance.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default InvestorOverviewPanel;
