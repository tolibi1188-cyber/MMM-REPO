const InvestorTable = ({ investors, onRowClick, onRowDoubleClick }) => {
  return (
    <div className="neu-card p-4 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="PlusJakartaSans text-xs opacity-70">
            <th>Investor</th>
            <th>Balans</th>
            <th>Recovery %</th>
          </tr>
        </thead>

        <tbody>
          {investors.map((inv) => {
            const recovery =
              inv.initialLoss > 0
                ? (inv.recoveredAmount / inv.initialLoss) * 100
                : 100;

            return (
              <tr
                key={inv.id}
                className="hover:bg-white/5 cursor-pointer"
                onClick={() => onRowClick(inv)}
                onDoubleClick={() => onRowDoubleClick(inv)}
              >
                <td>{inv.name}</td>
                <td className="JetBrainsMono">${inv.balance}</td>
                <td className="JetBrainsMono">{recovery.toFixed(2)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorTable;
