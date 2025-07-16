export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="flex items-center justify-start flex-wrap gap-4">
      {images.map((image, idx) => (
        <img key={idx} src={image} alt="" />
      ))}
    </div>
  );
}
