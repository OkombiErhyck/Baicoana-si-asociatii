export const translations = {
  en: {
    nav: {
      items: [
        { label: 'Home', path: '/' },
        {
          label: 'Services',
          path: '/services',
          submenu: [
            { label: 'Corporate Law', path: '/services/corporate-law' },
            { label: 'Real Estate Law', path: '/services/real-estate-law' },
            { label: 'Private Client Services', path: '/services/private-client' },
            { label: 'Dispute Resolution', path: '/services/dispute-resolution' },
          ],
        },
        { label: 'Lawyers', path: '/lawyers' },
        { label: 'Client Portal', path: '/portal' },
        { label: 'Insights', path: '/blog' },
        { label: 'Contact', path: '/contact' },
      ],
      requestCallback: 'Request Callback',
      freeConsultation: 'Free Consultation',
      languageSwitch: {
        label: 'Language',
        english: 'EN',
        romanian: 'RO',
      },
    },
    home: {
      hero: {
        overline: 'Baicoana & Associates',
        title: 'Legal Excellence with Uncompromising Dedication',
        subtitle:
          'Sophisticated legal counsel for discerning clients who demand excellence. Where expertise meets discretion, and results are paramount.',
        primaryCta: 'Request Consultation',
        secondaryCta: 'Explore Services',
      },
      stats: [
        {
          value: '25+',
          label: 'Years of Excellence',
          description: 'Serving distinguished clients since 1999',
        },
        {
          value: '500+',
          label: 'Successful Cases',
          description: 'Strategic victories across corporate and private matters',
        },
        {
          value: '98%',
          label: 'Client Satisfaction',
          description: 'Continuously exceeding expectations through results',
        },
        {
          value: '24/7',
          label: 'Client Support',
          description: 'On-call responsiveness whenever challenges arise',
        },
      ],
      features: {
        title: 'Why Choose Baicoana & Associates',
        subtitle:
          'Experience the difference of working with a law firm that combines excellence, discretion, and an unwavering commitment to your success.',
        items: [
          {
            title: 'Legal Excellence',
            description:
              'Unparalleled expertise across complex legal matters, backed by decades of proven success.',
          },
          {
            title: 'Absolute Discretion',
            description:
              'Your privacy and confidentiality are paramount, protected by our unwavering commitment to discretion.',
          },
          {
            title: 'Bespoke Solutions',
            description:
              'Sophisticated legal strategies personally tailored to your unique situation and objectives.',
          },
          {
            title: 'Strategic Vision',
            description:
              'Forward-thinking counsel that anticipates challenges and seizes opportunities.',
          },
        ],
      },
      services: {
        title: 'Our Practice Areas',
        subtitle:
          'Comprehensive legal solutions tailored to protect and advance your interests across all areas of business and private matters.',
        items: [
          {
            title: 'Corporate Law',
            description: 'Comprehensive legal solutions for businesses, from formation to complex transactions.',
            link: '/services/corporate-law',
            badge: 'Enterprise',
          },
          {
            title: 'Litigation',
            description: 'Strategic representation in high-stakes disputes and complex litigation matters.',
            link: '/services/litigation',
            badge: 'Protection',
          },
          {
            title: 'Real Estate',
            description: 'Expert guidance in property transactions, development, and real estate litigation.',
            link: '/services/real-estate',
            badge: 'Property',
          },
          {
            title: 'Private Client',
            description: 'Discrete representation for high-net-worth individuals and families.',
            link: '/services/private-client',
            badge: 'VIP',
          },
        ],
      },
      testimonials: {
        title: 'Client Testimonials',
        subtitle:
          'Our commitment to excellence and client satisfaction speaks through the words of those we serve.',
        items: [
          {
            name: 'Alexander M.',
            role: 'CEO',
            content:
              "Baicoana & Associates has been instrumental in our company's growth. Their strategic counsel and attention to detail are unmatched.",
            rating: 5,
            image: '/images/testimonial-1.jpg',
          },
          {
            name: 'Victoria R.',
            role: 'Real Estate Developer',
            content:
              'Their expertise in complex real estate transactions has proven invaluable. A true partner in our success.',
            rating: 5,
            image: '/images/testimonial-2.jpg',
          },
          {
            name: 'Private Client',
            role: 'Family Office',
            content:
              'Exceptional discretion and sophistication in handling our family’s legal matters. We trust them implicitly.',
            rating: 5,
            image: null,
          },
        ],
      },
    },
  },
  ro: {
    nav: {
      items: [
        { label: 'Acasă', path: '/' },
        {
          label: 'Servicii',
          path: '/services',
          submenu: [
            { label: 'Drept corporativ', path: '/services/corporate-law' },
            { label: 'Drept imobiliar', path: '/services/real-estate-law' },
            { label: 'Client privat', path: '/services/private-client' },
            { label: 'Soluționarea disputelor', path: '/services/dispute-resolution' },
          ],
        },
        { label: 'Avocați', path: '/lawyers' },
        { label: 'Portal clienți', path: '/portal' },
        { label: 'Perspective', path: '/blog' },
        { label: 'Contact', path: '/contact' },
      ],
      requestCallback: 'Solicită apel',
      freeConsultation: 'Consultanță gratuită',
      languageSwitch: {
        label: 'Limba',
        english: 'EN',
        romanian: 'RO',
      },
    },
    home: {
      hero: {
        overline: 'Baicoana & Associates',
        title: 'Excelență juridică, dedicare neclintită',
        subtitle:
          'Consultanță juridică sofisticată pentru clienți exigenți care își doresc rezultate. Acolo unde expertiza întâlnește discreția, iar succesul este prioritar.',
        primaryCta: 'Solicită o consultanță',
        secondaryCta: 'Descoperă serviciile',
      },
      stats: [
        {
          value: '25+',
          label: 'Ani de excelență',
          description: 'Alături de clienți remarcabili din 1999',
        },
        {
          value: '500+',
          label: 'Cazuri soluționate',
          description: 'Rezultate strategice pentru companii și clienți privați',
        },
        {
          value: '98%',
          label: 'Satisfacția clienților',
          description: 'Depășim constant așteptările prin rezultate concrete',
        },
        {
          value: '24/7',
          label: 'Asistență clienți',
          description: 'Disponibilitate permanentă pentru situații urgente',
        },
      ],
      features: {
        title: 'De ce Baicoana & Associates',
        subtitle:
          'Descoperiți diferența unui cabinet care îmbină excelența, discreția și devotamentul absolut pentru succesul dumneavoastră.',
        items: [
          {
            title: 'Excelență juridică',
            description:
              'Expertiză de vârf în dosare complexe, confirmată de decenii de rezultate.',
          },
          {
            title: 'Discreție absolută',
            description:
              'Confidențialitatea este esențială, protejată prin procese și valori ferme.',
          },
          {
            title: 'Strategii personalizate',
            description:
              'Soluții juridice adaptate fiecărui context pentru impact maxim.',
          },
          {
            title: 'Viziune strategică',
            description:
              'Anticipăm provocările și valorificăm oportunitățile pentru clienții noștri.',
          },
        ],
      },
      services: {
        title: 'Domenii de practică',
        subtitle:
          'Soluții juridice complete, menite să protejeze și să dezvolte interesele dumneavoastră în mediul de afaceri și în sfera privată.',
        items: [
          {
            title: 'Drept corporativ',
            description: 'Soluții juridice integrate pentru companii, de la înființare la tranzacții complexe.',
            link: '/services/corporate-law',
            badge: 'Companii',
          },
          {
            title: 'Litigii',
            description: 'Reprezentare strategică în dispute cu miză ridicată și litigii complexe.',
            link: '/services/litigation',
            badge: 'Protecție',
          },
          {
            title: 'Drept imobiliar',
            description: 'Asistență în tranzacții, dezvoltări și litigii imobiliare.',
            link: '/services/real-estate',
            badge: 'Proprietate',
          },
          {
            title: 'Client privat',
            description: 'Reprezentare discretă pentru persoane și familii cu patrimoniu ridicat.',
            link: '/services/private-client',
            badge: 'VIP',
          },
        ],
      },
      testimonials: {
        title: 'Testimoniale clienți',
        subtitle:
          'Devotamentul și rezultatele noastre se reflectă cel mai bine în cuvintele celor pe care îi reprezentăm.',
        items: [
          {
            name: 'Alexander M.',
            role: 'CEO',
            content:
              'Baicoana & Associates a fost esențial pentru creșterea companiei noastre. Consilierea strategică și atenția la detalii sunt impecabile.',
            rating: 5,
            image: '/images/testimonial-1.jpg',
          },
          {
            name: 'Victoria R.',
            role: 'Dezvoltator imobiliar',
            content:
              'Expertiza lor în tranzacții imobiliare complexe a făcut diferența. Adevărați parteneri în proiectele noastre.',
            rating: 5,
            image: '/images/testimonial-2.jpg',
          },
          {
            name: 'Client privat',
            role: 'Family Office',
            content:
              'Discreție și rafinament în gestionarea afacerilor noastre de familie. Avem încredere deplină în echipa lor.',
            rating: 5,
            image: null,
          },
        ],
      },
    },
  },
};

