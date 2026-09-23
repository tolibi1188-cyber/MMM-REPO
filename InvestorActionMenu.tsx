const InvestorActionMenu = ({ investor, onOpenDrawer }) => {
  return (
    <div className="fixed bottom-4 right-4 neu-card p-4 rounded-xl">
      <p className="PlusJakartaSans mb-2">{investor.name}</p>

      <button className="neu-btn w-full mb-2" onClick={onOpenDrawer}>
        Profilni ochish
      </button>
    </div>
  );
};

export default InvestorActionMenu;
