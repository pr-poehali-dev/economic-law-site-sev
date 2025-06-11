import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Trophy",
      title: "Академическое превосходство",
      description:
        "Высококвалифицированные преподаватели с учеными степенями и практическим опытом",
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description:
        "Малые группы обеспечивают персональное внимание каждому студенту",
    },
    {
      icon: "Briefcase",
      title: "Практическая направленность",
      description:
        "Современные программы, ориентированные на реальные потребности рынка труда",
    },
    {
      icon: "Globe",
      title: "Международные стандарты",
      description:
        "Образование соответствует международным стандартам качества",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            О нашем институте
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем качественное высшее образование в области экономики
            и права, готовя специалистов для успешной карьеры в современной
            экономике
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Студенты в аудитории"
              className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Традиции качественного образования
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Институт экономики и права (филиал) ОУП ВО "АТиСО" в Севастополе
                — это современное образовательное учреждение, которое сочетает
                традиции классического образования с инновационными подходами к
                обучению.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Наша миссия — подготовка высококвалифицированных специалистов в
                области экономики и права, способных успешно работать в условиях
                современной рыночной экономики и правовой системы.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Check" size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Государственная аккредитация
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Все программы имеют государственную аккредитацию
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Check" size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Современная материальная база
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Оборудованные аудитории и компьютерные классы
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Check" size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Богатая библиотека
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Доступ к современной учебной и научной литературе
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-16 h-16 institute-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon} size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
