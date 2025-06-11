import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      title: "Экономика",
      subtitle: "Бакалавриат • 4 года",
      description:
        "Комплексная подготовка экономистов для работы в различных сферах экономики",
      features: [
        "Микро- и макроэкономика",
        "Финансы и кредит",
        "Международная экономика",
        "Цифровая экономика",
      ],
      icon: "TrendingUp",
      color: "bg-blue-500",
    },
    {
      title: "Юриспруденция",
      subtitle: "Бакалавриат • 4 года",
      description:
        "Подготовка квалифицированных юристов для работы в правовой сфере",
      features: [
        "Гражданское право",
        "Уголовное право",
        "Административное право",
        "Корпоративное право",
      ],
      icon: "Scale",
      color: "bg-green-500",
    },
    {
      title: "Менеджмент",
      subtitle: "Бакалавриат • 4 года",
      description:
        "Современные управленческие компетенции для бизнеса и государственного сектора",
      features: [
        "Стратегический менеджмент",
        "HR-менеджмент",
        "Проектное управление",
        "Антикризисное управление",
      ],
      icon: "Users",
      color: "bg-purple-500",
    },
  ];

  const admissionSteps = [
    {
      step: "1",
      title: "Подача документов",
      description: "Подайте документы онлайн или лично в приемной комиссии",
    },
    {
      step: "2",
      title: "Вступительные экзамены",
      description:
        "Сдайте необходимые экзамены или предоставьте результаты ЕГЭ",
    },
    {
      step: "3",
      title: "Зачисление",
      description: "Получите уведомление о зачислении и оформите документы",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Образовательные программы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите направление подготовки и получите качественное высшее
            образование с государственным дипломом
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon name={program.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600">{program.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-gray-900 text-sm">
                  Ключевые дисциплины:
                </h4>
                <ul className="space-y-1">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full institute-gradient">
                <Icon name="FileText" size={16} className="mr-2" />
                Подробнее о программе
              </Button>
            </div>
          ))}
        </div>

        {/* Admission Process */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Процесс поступления
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс поступления в наш институт. Мы поможем
              вам на каждом этапе.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {admissionSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 institute-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="institute-gradient">
                <Icon name="FileText" size={20} className="mr-2" />
                Подать документы
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Приемная комиссия работает: пн-пт 9:00-18:00, сб 9:00-15:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
