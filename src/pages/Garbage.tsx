import ImageGallery from "../components/ImageGallery";
import Cleaning1 from "../assets/cleaning1.jpg";

const images = [Cleaning1, Cleaning1, Cleaning1, Cleaning1];

export const Garbage = () => {
  return (
    <main className="p-4 mx-auto w-fit max-w-5xl">
      <ImageGallery images={images} />
    </main>
  );
};
