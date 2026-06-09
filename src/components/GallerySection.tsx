type GalleryPhoto = {
  title: string;
  src: string;
  alt: string;
  href?: string;
};

const galleryPhotos: GalleryPhoto[] = [
  {
    title: "Casa Transitória",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    alt: "Casa transitória da AAPOC",
  },
  {
    title: "Outubro Rosa",
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    alt: "Campanha Outubro Rosa",
  },
  {
    title: "Cestas Básicas Solidárias",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Cestas básicas solidárias",
  },
  {
    title: "Apoio Psicológico",
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    alt: "Apoio psicológico em grupo",
  },
  {
    title: "Mutirão de Exames",
    src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80",
    alt: "Mutirão de exames",
  },
  {
    title: "Bazar Beneficente",
    src: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    alt: "Bazar beneficente",
  },
  {
    title: "Voluntariado",
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    alt: "Voluntários AAPOC",
  },
  {
    title: "Evento Comunitário",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Evento comunitário AAPOC",
  },
  {
    title: "Ação Social",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    alt: "Ação social de arrecadação",
  },
  {
    title: "Post do Instagram",
    src: "https://www.instagram.com/p/DXIboLvFo3O/media/?size=l",
    alt: "Post do Instagram DXIboLvFo3O",
    href: "https://www.instagram.com/p/DXIboLvFo3O/",
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">Galeria</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mt-2">
            Momentos da AAPOC
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Até 10 fotos das ações, eventos e acolhimento que movem nossa comunidade.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryPhotos.map((photo) => {
            const Container = photo.href ? "a" : "article";
            return (
              <Container
                key={photo.title}
                href={photo.href}
                target={photo.href ? "_blank" : undefined}
                rel={photo.href ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-[2rem] transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-display text-lg font-bold">{photo.title}</h3>
                  <p className="text-sm text-white/80 mt-1">Foto da ação, evento ou apoio oferecido pela AAPOC.</p>
                </div>
              </Container>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
