import { invitationData } from "../../data/invitationData";

/**
 * PhotoSection – A beautiful photo showcase for the quinceañera/cumpleañera.
 * 
 * Props:
 *   photos   – array of { src, alt } objects (paths to photos in /public/assets/images/)
 *   title    – optional section title
 *   subtitle – optional subtitle text
 *   variant  – "mosaic" | "filmstrip" | "polaroid"  (default "mosaic")
 *   bg       – tailwind background class (default "bg-quartz-50")
 */
export default function PhotoSection({
  photos = [],
  title = "",
  subtitle = "",
  variant = "mosaic",
  bg = "bg-quartz-50",
}) {
  // Fallback placeholder when no photos are provided yet
  const placeholders = [
    { src: "/assets/images/photo-1.jpg", alt: `${invitationData.name} foto 1` },
    { src: "/assets/images/photo-2.jpg", alt: `${invitationData.name} foto 2` },
    { src: "/assets/images/photo-3.jpg", alt: `${invitationData.name} foto 3` },
  ];

  const images = photos.length > 0 ? photos : placeholders;

  return (
    <section className={`py-20 px-4 ${bg} relative overflow-hidden`}>
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
          <div className="w-20 h-[1px] bg-primary-300 mx-auto mt-4"></div>
        </div>
      )}

      {/* Mosaic Variant */}
      {variant === "mosaic" && (
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((photo, i) => (
            <div
              key={i}
              className={`photo-frame overflow-hidden group ${
                i === 0 ? "row-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: i === 0 ? "100%" : "220px" }}
                  onError={(e) => {
                    // Show elegant placeholder on error
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 text-primary-400 hidden"
                  style={{ minHeight: i === 0 ? "400px" : "220px" }}
                >
                  <span className="font-serif text-lg italic opacity-60">
                    Foto {i + 1}
                  </span>
                </div>
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
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-72 md:h-80 items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 text-primary-400 hidden"
                >
                  <span className="font-serif text-lg italic opacity-60">
                    Foto {i + 1}
                  </span>
                </div>
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
            const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];
            return (
              <div
                key={i}
                className={`photo-frame pb-12 ${rotations[i % rotations.length]} hover:rotate-0 transition-transform duration-500 group w-48 md:w-60`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-56 md:h-64 items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 text-primary-400 hidden"
                  >
                    <span className="font-serif text-lg italic opacity-60">
                      Foto {i + 1}
                    </span>
                  </div>
                </div>
                {photo.caption && (
                  <p className="text-center text-primary-600 text-sm mt-2 font-elegant text-2xl">
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
