import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using picsum seeds for consistent "child friendly" vibe approximation in placeholders
  const images = [
    "https://picsum.photos/600/400?random=10",
    "https://picsum.photos/600/400?random=11",
    "https://picsum.photos/600/400?random=12",
    "https://picsum.photos/600/400?random=13",
    "https://picsum.photos/600/400?random=14",
    "https://picsum.photos/600/400?random=15",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-500 font-semibold tracking-wide uppercase text-sm">Our Moments</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mt-2">Campus Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;