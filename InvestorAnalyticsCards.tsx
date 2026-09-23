const InvestorAnalyticsCards = ({ investors }) => {
  const avgRecovery = investors.reduce((a, b) => {
    const r = b.initialLoss > 0 ? (b.recoveredAmount / b.initialLoss) * 100 : 100;
    return a + r;
  }, 0) / investors.length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="neu-card p-4 rounded-xl">
        <p className="PlusJakartaSans text-sm opacity-70">O‘rtacha Recovery</p>
        <p className="JetBrainsMono text-2xl">{avgRecovery.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default InvestorAnalyticsCards;
