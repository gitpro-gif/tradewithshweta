import scroll1 from "../assets/scroll3.png";
import scroll2 from "../assets/scroll2.png";
import scroll3 from "../assets/scroll1.png";
import scroll4 from "../assets/scroll4.png";

export default function ImageScroll() {
  const images = [scroll1, scroll2, scroll3, scroll4];

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {images.map((img, index) => (
        <div
          key={index}
          className="min-w-[180px] h-[120px] rounded-lg overflow-hidden bg-neutral-800"
        >
          <img
            src={img}
            alt={`scroll-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
