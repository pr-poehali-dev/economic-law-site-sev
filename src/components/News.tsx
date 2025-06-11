import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const News = () => {
  const news = [
    {
      date: "15 марта 2024",
      category: "События",
      title: "День открытых дверей",
      description:
        "Приглашаем абитуриентов и их родителей познакомиться с нашим институтом, образовательными программами и преподавателями.",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      date: "12 марта 2024",
      category: "Достижения",
      title: "Студенты заняли призовые места",
      description:
        "Наши студенты успешно выступили на региональной олимпиаде по экономике, заняв первое и третье места.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      date: "8 марта 2024",
      category: "Новости",
      title: "Новые магистерские программы",
      description:
        'Объявлен набор на новые магистерские программы по направлениям "Цифровая экономика" и "Корпоративное право".',
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const events = [
    {
      date: "март",
      day: "20",
      title: "Научная конференция",
      time: "10:00",
      location: "Большая аудитория",
    },
    {
      date: "март",
      day: "25",
      title: "Мастер-класс по финансам",
      time: "14:00",
      location: "Ауд. 205",
    },
    {
      date: "апр",
      day: "2",
      title: "День карьеры",
      time: "11:00",
      location: "Актовый зал",
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Новости института
              </h2>
              <Button variant="outline">
                <Icon name="ArrowRight" size={16} className="ml-2" />
                Все новости
              </Button>
            </div>

            <div className="space-y-6">
              {news.map((article, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {article.description}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600"
                      >
                        Читать далее
                        <Icon name="ArrowRight" size={14} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Ближайшие события
            </h3>

            <div className="space-y-4 mb-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 uppercase font-medium">
                        {event.date}
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {event.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {event.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4">Полезные ссылки</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon name="FileText" size={16} className="mr-3" />
                  Расписание занятий
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon name="BookOpen" size={16} className="mr-3" />
                  Электронная библиотека
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon name="Users" size={16} className="mr-3" />
                  Студенческий портал
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Icon name="GraduationCap" size={16} className="mr-3" />
                  Дистанционное обучение
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
