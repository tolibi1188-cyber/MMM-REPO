const InvestorAdvancedDrawer = ({ investor, onClose }) => {
  if (!investor) return null;

  const recovery =
    investor.initialLoss > 0
      ? (investor.recoveredAmount / investor.initialLoss) * 100
      : 100;

  return (
    <div className="fixed top-0 right-0 w-96 h-full neu-card p-6">
      <button onClick={onClose} className="neu-btn mb-4">Yopish</button>

      <h2 className="PlusJakartaSans text-xl mb-4">{investor.name}</h2>

      <p className="JetBrainsMono text-lg">Balans: ${investor.balance}</p>
      <p className="JetBrainsMono text-lg">Recovery: {recovery.toFixed(2)}%</p>
    </div>
  );
};

export default InvestorAdvancedDrawer;
