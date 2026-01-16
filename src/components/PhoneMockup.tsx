"use client";

interface PhoneMockupProps {
  type: "home" | "home-filled" | "add" | "details";
  size?: "small" | "large";
}

export default function PhoneMockup({ type, size = "small" }: PhoneMockupProps) {
  const sizeClasses = size === "large" 
    ? "w-[280px] h-[560px] md:w-[320px] md:h-[640px]" 
    : "w-[220px] h-[440px] md:w-[260px] md:h-[520px]";

  const renderContent = () => {
    switch (type) {
      case "home":
        return <HomeScreen filled={false} />;
      case "home-filled":
        return <HomeScreen filled={true} />;
      case "add":
        return <AddScreen />;
      case "details":
        return <DetailsScreen />;
      default:
        return <HomeScreen filled={false} />;
    }
  };

  return (
    <div className={`relative ${sizeClasses}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF] to-[#00D4FF] rounded-[3rem] blur-3xl opacity-20" />
      <div className="relative bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden h-full p-2">
        <div className="bg-white rounded-[2rem] h-full overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ filled }: { filled: boolean }) {
  return (
    <div className="w-full h-full bg-[#F5F5F7] flex flex-col text-[10px] md:text-xs">
      <div className="p-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
          <span className="text-[8px]">🐞</span>
        </div>
      </div>
      
      <div className="mx-3 bg-gradient-to-br from-[#007AFF] to-[#00D4FF] rounded-b-[1.5rem] p-4 text-white text-center">
        <p className="text-[8px] opacity-90">Total Monthly</p>
        <p className="text-2xl md:text-3xl font-bold mt-0.5">{filled ? "$206,51" : "$0,00"}</p>
        <p className="text-[8px] opacity-75 mt-0.5">{filled ? "~$2.478,16/year" : "~$0,00/year"}</p>
        
        <div className="mt-3 flex justify-center">
          <div className="w-10 h-10 bg-[#34C759] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-lg text-black font-bold">+</span>
          </div>
        </div>
      </div>

      {filled ? (
        <div className="p-3 grid grid-cols-2 gap-2 flex-1 overflow-hidden">
          <div className="bg-[#007AFF] rounded-xl p-2.5 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-lg mb-1.5 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
            <p className="text-[8px] opacity-90 truncate">Adobe Creative Cl...</p>
            <p className="text-base font-bold">$54,98</p>
            <p className="text-[7px] opacity-75">~$659,76/yr</p>
          </div>
          <div className="bg-[#34C759] rounded-xl p-2.5 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-lg mb-1.5 flex items-center justify-center">
              <span className="text-[8px]">🏃</span>
            </div>
            <p className="text-[8px] opacity-90">Gym Membership</p>
            <p className="text-base font-bold">$29,99</p>
            <p className="text-[7px] opacity-75">~$359,88/yr</p>
          </div>
          <div className="bg-[#1E3A8A] rounded-xl p-2.5 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-lg mb-1.5 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
            <p className="text-[8px] opacity-90">ChatGPT Plus</p>
            <p className="text-base font-bold">$20</p>
            <p className="text-[7px] opacity-75">~$240/yr</p>
          </div>
          <div className="bg-[#FF2D55] rounded-xl p-2.5 text-white">
            <div className="w-6 h-6 bg-white/20 rounded-lg mb-1.5 flex items-center justify-center">
              <div className="w-3 h-2 bg-white rounded-sm" />
            </div>
            <p className="text-[8px] opacity-90">Netflix</p>
            <p className="text-base font-bold">$15,99</p>
            <p className="text-[7px] opacity-75">~$191,88/yr</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-12 h-12 bg-gray-200 rounded-xl mb-3 flex items-center justify-center">
            <div className="w-8 h-5 border-2 border-gray-400 rounded" />
          </div>
          <p className="font-semibold text-sm">No Subscriptions</p>
          <p className="text-gray-500 text-[10px] mt-1 text-center">Tap + to add your first subscription</p>
        </div>
      )}
    </div>
  );
}

function AddScreen() {
  return (
    <div className="w-full h-full bg-white flex flex-col text-[10px] md:text-xs">
      <div className="p-3 border-b border-gray-200 flex justify-between items-center">
        <span className="text-gray-400 text-sm">✕</span>
        <span className="font-semibold text-sm">Add Subscription</span>
        <span className="text-gray-400 text-sm">Save</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
            <span className="text-[8px]">🏷️</span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500">Service</p>
            <p className="text-gray-400">Enter name</p>
          </div>
        </div>
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-[8px]">💵</span>
          </div>
          <div>
            <p className="text-[10px] text-gray-500">Amount</p>
            <p className="text-gray-400">0.00</p>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-medium mb-2">Billing</p>
          <div className="flex bg-gray-100 rounded-lg p-0.5">
            <div className="flex-1 bg-white rounded-md py-1.5 text-center text-[10px] shadow-sm font-medium">Monthly</div>
            <div className="flex-1 py-1.5 text-center text-[10px] text-gray-500">Yearly</div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-[8px]">⭐</span>
          </div>
          <div className="flex-1 flex justify-between items-center">
            <p className="text-[10px]">Category</p>
            <p className="text-gray-500 text-[10px]">⭐ Other</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-[8px]">📅</span>
          </div>
          <div className="flex-1 flex justify-between items-center">
            <p className="text-[10px]">Start Date</p>
            <p className="text-[10px] bg-gray-100 px-2 py-1 rounded">16 Jan 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailsScreen() {
  return (
    <div className="w-full h-full bg-white flex flex-col text-[10px] md:text-xs">
      <div className="p-3 border-b border-gray-200 flex justify-between items-center">
        <span className="text-sm font-medium">Done</span>
        <span className="font-semibold text-sm">Details</span>
        <span className="text-sm font-medium">Edit</span>
      </div>
      <div className="flex-1 flex flex-col items-center pt-6">
        <div className="w-14 h-14 rounded-full bg-[#007AFF] flex items-center justify-center mb-3">
          <div className="w-5 h-5 bg-white rounded" />
        </div>
        <h3 className="font-semibold text-base">Adobe Creative Cloud</h3>
        <p className="text-2xl font-bold mt-1">$54,98</p>
        <p className="text-gray-500 text-[10px]">per month</p>
        
        <div className="w-full mt-6 px-4">
          <div className="bg-gray-50 rounded-xl p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Billing Cycle</span>
              <span className="font-medium">Monthly</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span className="font-medium">Software</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Yearly Cost</span>
              <span className="font-medium">$659,76</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Paid So Far</span>
              <span className="font-medium">$54,98</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Started</span>
              <span className="font-medium">16 Jan 2026</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-[#FF3B30] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
          <span>🗑️</span> Delete Subscription
        </button>
      </div>
    </div>
  );
}
