// Chuyển sang Default Export để khớp với cách bạn import Strava từ "..."
export default function StravaBadge() {
  return (
    <a 
      href="https://www.strava.com/athletes/138099863" // Thay link profile của bạn vào đây
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FC4C02] hover:bg-[#e34402] transition-all duration-300 shadow-lg shadow-orange-900/20 group"
    >
      {/* Icon Strava - Dùng màu trắng để nổi bật trên nền cam */}
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 d-inline"
      >
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.63h4.172L10.335 0 2.147 15.846h4.172" />
      </svg>
      
      {/* Chữ trắng để không bị hòa vào nền đen của Portfolio */}
      <span className="text-sm font-bold text-white tracking-tight">
        VIEW ON STRAVA
      </span>
    </a>
  );
}