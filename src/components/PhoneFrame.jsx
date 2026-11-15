// A simple dark phone bezel around a portrait app screenshot.
export default function PhoneFrame({ src, alt }) {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[2.4rem] bg-neutral-900 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/10">
      <img src={src} alt={alt} loading="lazy" className="block w-full rounded-[1.9rem]" />
    </div>
  );
}
