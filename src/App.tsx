import { useState, useEffect } from 'react';

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#menu', label: 'Menú' },
    { href: '#galeria', label: 'Galería' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-amber-400 text-3xl">✦</span>
            <span className="text-white font-serif text-2xl tracking-wide">La Mesa Dorada</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/80 hover:text-amber-400 transition-colors text-sm uppercase tracking-widest font-light">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-amber-400/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-white/80 hover:text-amber-400 transition-colors text-sm uppercase tracking-widest">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/fb9611b3-cda7-4ba8-bcbd-bc2cbf0ebcd9/_result.png" 
          alt="Restaurante" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-amber-400"></span>
          <span className="text-amber-400 uppercase tracking-[0.3em] text-sm">Bienvenidos</span>
          <span className="h-px w-16 bg-amber-400"></span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          La Mesa <span className="text-amber-400">Dorada</span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Una experiencia gastronómica única donde la tradición se encuentra con la innovación. 
          Sabores auténticos en un ambiente elegante.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#reservas" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
            Reservar Mesa
          </a>
          <a href="#menu" className="px-8 py-4 border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 uppercase tracking-wider text-sm transition-all duration-300">
            Ver Menú
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="nosotros" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-amber-400"></span>
              <span className="text-amber-400 uppercase tracking-[0.2em] text-xs">Nuestra Historia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Tradición y <span className="text-amber-400">Pasión</span> desde 1985
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Desde hace más de tres décadas, La Mesa Dorada ha sido un referente de la alta gastronomía. 
              Nuestro chef ejecutivo, con más de 25 años de experiencia, combina técnicas clásicas con 
              toques contemporáneos para crear platos que deleitan todos los sentidos.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Cada ingrediente es seleccionado cuidadosamente de productores locales, garantizando 
              frescura y calidad en cada bocado. Nuestro compromiso es ofrecer una experiencia 
              culinaria inolvidable.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-400 mb-1">38+</div>
                <div className="text-white/50 text-xs uppercase tracking-wider">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-400 mb-1">150+</div>
                <div className="text-white/50 text-xs uppercase tracking-wider">Platos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-400 mb-1">50K+</div>
                <div className="text-white/50 text-xs uppercase tracking-wider">Clientes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://image.qwenlm.ai/generated-images/5aafa648-5119-4062-935d-7f7e1231f788/_result.png" 
                alt="Nuestros platos" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-amber-400/30 rounded-lg"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-amber-400/30 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Menu Section
function Menu() {
  const [activeCategory, setActiveCategory] = useState('entradas');

  const categories = [
    { id: 'entradas', label: 'Entradas', icon: '🥗' },
    { id: 'principales', label: 'Principales', icon: '🥩' },
    { id: 'pastas', label: 'Pastas', icon: '🍝' },
    { id: 'postres', label: 'Postres', icon: '🍰' },
    { id: 'bebidas', label: 'Bebidas', icon: '🍷' },
  ];

  const menuItems: Record<string, Array<{name: string, description: string, price: string}>> = {
    entradas: [
      { name: 'Carpaccio de Res', description: 'Finas láminas de res con rúcula, parmesano y vinagreta de limón', price: '$185' },
      { name: 'Ceviche Tropical', description: 'Pescado fresco marinado en cítricos con mango y aguacate', price: '$165' },
      { name: 'Bruschetta Mediterránea', description: 'Pan artesanal con tomate confitado, albahaca y mozzarella di bufala', price: '$145' },
      { name: 'Sopa de Langosta', description: 'Crema de langosta con un toque de coñac y crutones dorados', price: '$210' },
    ],
    principales: [
      { name: 'Filete Mignon', description: 'Corte premium de 300g con salsa de vino tinto y puré trufado', price: '$485' },
      { name: 'Salmón en Costra', description: 'Salmón atlántico con costra de hierbas y risotto de limón', price: '$385' },
      { name: 'Cordero al Romero', description: 'Rack de cordero con romero fresco, papas rústicas y jus', price: '$425' },
      { name: 'Pato a la Naranja', description: 'Pechuga de pato confitada con salsa de naranja y vegetales grillados', price: '$395' },
    ],
    pastas: [
      { name: 'Tagliatelle al Tartufo', description: 'Pasta fresca con crema de trufa negra y parmesano añejo', price: '$325' },
      { name: 'Ravioli de Langosta', description: 'Ravioli relleno de langosta con salsa bisque y caviar', price: '$420' },
      { name: 'Pappardelle al Ragú', description: 'Pasta ancha con ragú de carne cocido 8 horas', price: '$275' },
      { name: 'Gnocchi de Papa', description: 'Ñoquis artesanales con gorgonzola y nueces caramelizadas', price: '$245' },
    ],
    postres: [
      { name: 'Tiramisú Clásico', description: 'Receta tradicional italiana con mascarpone y café espresso', price: '$145' },
      { name: 'Crème Brûlée', description: 'Crema de vainilla de Madagascar con caramelo crocante', price: '$135' },
      { name: 'Coulant de Chocolate', description: 'Pastel tibio de chocolate belga con helado de vainilla', price: '$165' },
      { name: 'Panna Cotta', description: 'Panna cotta de frutos rojos con coulis de frambuesa', price: '$125' },
    ],
    bebidas: [
      { name: 'Vino Tinto Reserva', description: 'Selección de la casa - Cabernet Sauvignon, Mendoza', price: '$350' },
      { name: 'Champagne Brut', description: 'Moët & Chandon - Copa servida a temperatura ideal', price: '$280' },
      { name: 'Cóctel Signature', description: 'Creación exclusiva del bartender con gin premium', price: '$195' },
      { name: 'Agua Mineral Premium', description: 'San Pellegrino o Acqua Panna - 750ml', price: '$85' },
    ],
  };

  return (
    <section id="menu" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-amber-400 uppercase tracking-[0.2em] text-xs">Nuestra Carta</span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Nuestro <span className="text-amber-400">Menú</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Cada plato es una obra de arte culinaria, preparado con ingredientes frescos y de la más alta calidad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/30'
                  : 'bg-stone-800 text-white/60 hover:bg-stone-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-6 hover:border-amber-400/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-serif text-xl group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                <span className="text-amber-400 font-serif text-xl ml-4">{item.price}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const galleryImages = [
    { url: 'https://image.qwenlm.ai/generated-images/fb9611b3-cda7-4ba8-bcbd-bc2cbf0ebcd9/_result.png', alt: 'Interior del restaurante' },
    { url: 'https://image.qwenlm.ai/generated-images/5aafa648-5119-4062-935d-7f7e1231f788/_result.png', alt: 'Plato gourmet' },
  ];

  return (
    <section id="galeria" className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-amber-400 uppercase tracking-[0.2em] text-xs">Galería</span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Momentos <span className="text-amber-400">Especiales</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg group ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <img src={img.url} alt={img.alt} className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-serif">{img.alt}</span>
              </div>
            </div>
          ))}
          {/* Decorative cards */}
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/20 border border-amber-400/20 flex items-center justify-center h-64 md:h-80">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🍽️</div>
              <p className="text-amber-400 font-serif text-xl">Experiencia Única</p>
              <p className="text-white/50 text-sm mt-2">Cada visita es un viaje sensorial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    { name: 'María García', text: 'Una experiencia gastronómica increíble. El filete mignon es simplemente perfecto. Volveremos sin duda.', rating: 5 },
    { name: 'Carlos Rodríguez', text: 'El mejor restaurante de la ciudad. El servicio es impecable y los sabores son extraordinarios.', rating: 5 },
    { name: 'Ana Martínez', text: 'Celebramos nuestro aniversario aquí y fue mágico. La atención al detalle es impresionante.', rating: 5 },
  ];

  return (
    <section className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-amber-400 uppercase tracking-[0.2em] text-xs">Testimonios</span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Lo que dicen nuestros <span className="text-amber-400">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-8 text-center hover:border-amber-400/30 transition-all duration-300">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-white/70 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <span className="text-amber-400 font-serif">{t.name[0]}</span>
                </div>
                <span className="text-white font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reservation Section
function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reservas" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-amber-400"></span>
            <span className="text-amber-400 uppercase tracking-[0.2em] text-xs">Reservaciones</span>
            <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Reserve su <span className="text-amber-400">Mesa</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Asegure su lugar para una experiencia culinaria inolvidable. 
            Le recomendamos reservar con anticipación.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-green-400 text-2xl font-serif mb-2">¡Reserva Confirmada!</h3>
              <p className="text-white/60">Nos pondremos en contacto con usted para confirmar los detalles.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-stone-800/50 border border-stone-700/50 rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider">Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Su nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="+52 555 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider">Número de personas</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                    ))}
                    <option value="9+">Más de 8 personas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider">Fecha</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider">Hora</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                  >
                    <option value="">Seleccionar hora</option>
                    {['13:00','13:30','14:00','14:30','15:00','19:00','19:30','20:00','20:30','21:00','21:30','22:00'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-white/70 text-sm mb-2 uppercase tracking-wider">Notas especiales</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  className="w-full bg-stone-900/50 border border-stone-600 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors resize-none"
                  placeholder="Alergias, celebraciones especiales, preferencias..."
                ></textarea>
              </div>
              <button type="submit" className="mt-8 w-full py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold uppercase tracking-wider text-sm transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-amber-500/30">
                Confirmar Reserva
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Contact / Footer Section
function Footer() {
  return (
    <footer id="contacto" className="bg-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber-400 text-2xl">✦</span>
              <span className="text-white font-serif text-xl">La Mesa Dorada</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Una experiencia gastronómica única donde la tradición se encuentra con la innovación culinaria.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-500 flex items-center justify-center transition-colors group">
                  <i className={`fab fa-${social} text-white/60 group-hover:text-black text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Horarios</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/50">
                <span>Lunes - Viernes</span>
                <span>13:00 - 23:00</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Sábado</span>
                <span>12:00 - 00:00</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Domingo</span>
                <span>12:00 - 22:00</span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-amber-400 mt-1"></i>
                <span>Av. Reforma 234, Col. Centro, Ciudad de México</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-amber-400"></i>
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-amber-400"></i>
                <span>reservas@lamesadorada.mx</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Newsletter</h3>
            <p className="text-white/50 text-sm mb-4">Reciba ofertas exclusivas y novedades.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Su email"
                className="flex-1 bg-stone-800 border border-stone-700 rounded-l-lg px-4 py-3 text-white text-sm focus:border-amber-400 focus:outline-none"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 rounded-r-lg transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © 2026 La Mesa Dorada. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/30">
              <a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Términos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  );
}
