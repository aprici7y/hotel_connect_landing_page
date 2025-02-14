import React, { useState, useEffect } from 'react';
import {
  Clock,
  TrendingUp,
  Shield,
  DollarSign,
  Users,
  BarChart,
  Gift,
  Settings,
  Layers
} from 'lucide-react';
import CountUp from 'react-countup';
import '../styles.css'; 


const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('hotelier');
  const [formData, setFormData] = useState({
    type: 'hotelier',
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [hotelCount, setHotelCount] = useState(0);
  const [supplierCount, setSupplierCount] = useState(0);


  useEffect(() => {
    // Simulate fetching data from API or backend
    setHotelCount(122);  // Example hotel count
    setSupplierCount(78);  // Example supplier count
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formular abgesendet:', formData);
  };

  const features = {
    hotelier: [
      {
        icon: <Clock className="w-8 h-8 text-blue-600" />,
        title: "Zeit sparen",
        description: "Automatisieren Sie Ihren Bestellprozess und verwalten Sie alle Lieferanten auf einer zentralen Plattform."
      },
      {
        icon: <DollarSign className="w-8 h-8 text-blue-600" />,
        title: "Kosten reduzieren",
        description: "Vergleichen Sie Preise über Lieferanten hinweg und optimieren Sie Ihre Einkaufsentscheidungen."
      },
      {
        icon: <BarChart className="w-8 h-8 text-blue-600" />,
        title: "Echtzeiteinblicke",
        description: "Verfolgen Sie Bestellungen, analysieren Sie Ausgabemuster und treffen Sie datengestützte Entscheidungen."
      }
    ],
    supplier: [
      {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "Mehr Hotels erreichen",
        description: "Verbinden Sie sich mit einem wachsenden Netzwerk von Hotels, die nach zuverlässigen Lieferanten suchen."
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
        title: "Ihr Geschäft wachsen lassen",
        description: "Erhöhen Sie Ihre Verkäufe und erweitern Sie Ihre Marktreichweite über unsere Plattform."
      },
      {
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        title: "Sichere Zahlungen",
        description: "Profitieren Sie von unserem sicheren Zahlungssystem und der zuverlässigen Auftragsabwicklung."
      }
    ]
  };

  const pricing = {
    hotelier: [
      {
        title: "Kostenlos",
        price: "0€/Monat",
        features: [
          "Standard Produktsuche",
          "Basisfunktionen",
          "Grundlegende Analysen"
        ],
        buttonText: "Mehr erfahren"
      },
      {
        title: "Premium",
        price: "100€/Monat",
        features: [
          "Erweiterte Analysen",
          "Personalisierte Dashboards",
          "Priorisierte Unterstützung"
        ],
        buttonText: "Jetzt upgraden"
      }
    ],
    supplier: [
      {
        title: "Transaktionsgebührenmodell",
        description:
          "Flexibles Modell basierend auf abgeschlossenen Transaktionen",
        calculation: "2-5 % des Transaktionswerts",
        target: "Ideal für: Lieferanten aller Kategorien",
      },
    ],
  };
  const iconMap = [Gift, Layers, TrendingUp, Shield, Settings, DollarSign];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">HotelConnect</div>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-300">Über uns</a>
            <a href="#pricing" className="hover:text-blue-300">Preise</a>
            <a href="#integration" className="hover:text-blue-300">Integrationsprozess</a>
            <a href="#contact" className="hover:text-blue-300">Kontakt</a>
          </div>
        </div>
      </nav>

     {/* Hero Section */}
     <header className="py-20 px-4 bg-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Revolutionieren Sie Ihr Hotel-Lieferkettenmanagement
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Verbinden Sie Hotels nahtlos mit Lieferanten. Optimieren Sie Ihren Bestellprozess, reduzieren Sie Kosten und verwalten Sie alle Ihre Lieferungen an einem Ort.
        </p>

        {/* Dynamic counters */}
        <div className="flex justify-center gap-16 mb-12">
          <div className="counter-container">
            <h2 className="text-3xl font-semibold text-gradient">
              <CountUp start={0} end={hotelCount} duration={2} />
            </h2>
            <p className="text-gray-600">Hotels auf der Plattform</p>
          </div>
          <div className="counter-container">
            <h2 className="text-3xl font-semibold text-gradient">
              <CountUp start={0} end={supplierCount} duration={2} />
            </h2>
            <p className="text-gray-600">Lieferanten auf der Plattform</p>
          </div>
        </div>

        {/* Tabs for Hotelier and Supplier */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              setActiveTab('hotelier');
              setFormData((prev) => ({ ...prev, type: 'hotelier' }));
            }}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'hotelier'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            Für Hoteliers
          </button>
          <button
            onClick={() => {
              setActiveTab('supplier');
              setFormData((prev) => ({ ...prev, type: 'supplier' }));
            }}
            className={`px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'supplier'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            Für Lieferanten
          </button>
        </div>
      </div>
    </header>
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {activeTab === 'hotelier' ? 'Vorteile für Hoteliers' : 'Vorteile für Lieferanten'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features[activeTab].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-blue-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Unsere Preispläne
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeTab === 'hotelier'
            ? pricing.hotelier.map((plan, index) => {
                const Icon = iconMap[index % iconMap.length];
                return (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-center items-center mb-4">
                      <Icon className="text-blue-600 w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                      {plan.title}
                    </h3>
                    <p className="text-4xl font-bold mb-4 text-gray-800">
                      {plan.price}
                    </p>
                    <ul className="list-inside text-left space-y-2 text-gray-600">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="mr-2 text-blue-600">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {plan.buttonText}
                    </button>
                  </div>
                );
              })
            : pricing.supplier.map((plan, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center items-center mb-4">
                    <BarChart className="text-blue-600 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <p className="text-gray-600 mb-4">{plan.calculation}</p>
                  <p className="text-gray-600 mb-4">{plan.target}</p>
                </div>
              ))}
        </div>
      </div>
    </section>

      {/* Integration Section */}
      <section id="integration" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Integrationsprozess</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Einfache Integration</h3>
              <p className="text-gray-600 mb-4">
                Unsere Plattform bietet eine nahtlose Integration mit Ihren bestehenden Systemen. Ob Sie ein Hotelier oder ein Lieferant sind, wir stellen sicher, dass der Integrationsprozess reibungslos und effizient verläuft.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">API-Dokumentation</h3>
              <p className="text-gray-600 mb-4">
                Wir bieten umfassende API-Dokumentationen, die Ihnen helfen, unsere Plattform nahtlos in Ihre bestehenden Systeme zu integrieren. Unsere APIs sind benutzerfreundlich und bieten alle notwendigen Funktionen, um Ihre Geschäftsprozesse zu optimieren.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Unterstützung und Service</h3>
              <p className="text-gray-600 mb-4">
                Unser Support-Team steht Ihnen rund um die Uhr zur Verfügung, um Ihnen bei der Integration und Nutzung unserer Plattform zu helfen. Wir bieten maßgeschneiderte Lösungen, um sicherzustellen, dass Ihre spezifischen Anforderungen erfüllt werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Heute starten</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="hotelier"
                    checked={formData.type === 'hotelier'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Ich bin ein Hotelier
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="supplier"
                    checked={formData.type === 'supplier'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Ich bin ein Lieferant
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Firma
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={activeTab === 'hotelier' ? 'Hotelname' : 'Firmenname'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ihre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Erzählen Sie uns über Ihre ${activeTab === 'hotelier' ? 'Lieferbedürfnisse' : 'Produkte und Dienstleistungen'}...`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Kontaktieren Sie uns
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
