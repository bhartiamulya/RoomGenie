export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full w-auto h-auto object-cover brightness-110 contrast-115 saturate-115"
        style={{
          filter: 'brightness(1.1) contrast(1.15) saturate(1.15)'
        }}
      >
        <source src="/assests/Background-video/video.mp4" type="video/mp4" />
      </video>
      {/* Slightly darker overlay */}
      <div className="absolute inset-0 bg-black/45"></div>
      {/* Film grain overlay for cinematic quality - increased */}
      <div 
        className="absolute inset-0 opacity-55 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px'
        }}
      ></div>
    </div>
  )
}
