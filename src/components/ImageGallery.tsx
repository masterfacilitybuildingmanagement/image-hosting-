export default function ImageGallery() {
  return (
    <div className="flex items-center justify-start flex-wrap gap-4">
      {Array.from({ length: 20 }).map((_, idx) => (
        <img key={idx} src="https://picsum.dev/300/200" alt="" />
      ))}
    </div>
  );
}
