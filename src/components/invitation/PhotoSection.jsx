import { invitationData } from "../../data/invitationData";

function PhotoImg({ photo, index }) {
  const fitClass =
    photo.fit === "contain" ? "object-contain" : "object-cover object-center";

  return (
    <>
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${fitClass}`}
        style={photo.position ? { objectPosition: photo.position } : undefined}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      <div className="absolute inset-0 hidden items-center justify-center text-primary-400">
        <span className="font-serif text-lg italic opacity-60">
          Foto {index + 1}
        </span>
      </div>
    </>
  );
}

export default function PhotoSection({
  photos = [],
  title = "",
  subtitle = "",
  variant = "mosaic",
}) {
  const placeholders = [
    { src: "/Foto_03.webp", alt: `${invitationData.name} foto 1` },
    {
      src: "/Foto_05.webp",
      alt: `${invitationData.name} foto 2`,
      fit: "contain",
    },
    { src: "/Foto_10.webp", alt: `${invitationData.name} foto 3` },
  ];

  const images = photos.length > 0 ? photos : placeholders;

  return (
    <section
      className={`py-20 px-4 relative overflow-hidden`}
      style={{ backgroundImage: "url('/fondoConteo.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/10 via-primary-100/20 to-primary-50/10 pointer-events-none"></div>
      {/* Section heading */}
      {title && (
        <div className="text-center mb-14">
          <h3 className="text-4xl md:text-5xl font-elegant text-primary-700 mb-3">
            {title}
          </h3>
          {subtitle && (
            <p className="text-primary-500 font-serif text-lg italic font-light tracking-wide">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-[1px] mx-auto mt-4"></div>
        </div>
      )}

      {variant === "mosaic" && (
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 md:grid-rows-[240px_240px] gap-3 md:gap-4">
          <div className="col-span-2 md:col-span-2 md:row-span-2 photo-frame overflow-hidden group">
            <div className="relative overflow-hidden h-64 sm:h-80 md:h-full">
              <PhotoImg photo={images[0]} index={0} />
            </div>
          </div>

          {/* Secondary images — side-by-side on mobile, stacked on desktop */}
          {images.slice(1, 3).map((photo, idx) => (
            <div
              key={idx + 1}
              className="col-span-1 photo-frame overflow-hidden group"
            >
              <div className="relative overflow-hidden h-36 sm:h-44 md:h-full">
                <PhotoImg photo={photo} index={idx + 1} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Filmstrip Variant */}
      {variant === "filmstrip" && (
        <div className="max-w-6xl mx-auto flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4">
          {images.map((photo, i) => (
            <div
              key={i}
              className="photo-frame flex-shrink-0 w-56 md:w-72 snap-center"
            >
              <div className="relative overflow-hidden h-72 md:h-80">
                <PhotoImg photo={photo} index={i} />
              </div>
              {photo.caption && (
                <p className="text-center text-primary-600 text-sm mt-3 font-serif italic">
                  {photo.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Polaroid Variant */}
      {variant === "polaroid" && (
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
          {images.map((photo, i) => {
            const rotations = [
              "-rotate-3",
              "rotate-2",
              "-rotate-1",
              "rotate-3",
            ];
            return (
              <div
                key={i}
                className={`photo-frame pb-12 ${rotations[i % rotations.length]} hover:rotate-0 transition-transform duration-500 group w-48 md:w-60`}
              >
                <div className="relative overflow-hidden h-56 md:h-64">
                  <PhotoImg photo={photo} index={i} />
                </div>
                {photo.caption && (
                  <p className="text-center text-primary-600 text-sm mt-2 font-elegant ">
                    {photo.caption}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
