import Icon from "@/components/ui/icon";

const Footer = () => {
  const quickLinks = [
    { name: "О нас", href: "#about" },
    { name: "Образование", href: "#programs" },
    { name: "Новости", href: "#news" },
    { name: "Контакты", href: "#contact" },
    { name: "Приемная комиссия", href: "#" },
    { name: "Студентам", href: "#" },
  ];

  const programs = [
    { name: "Экономика", href: "#" },
    { name: "Юриспруденция", href: "#" },
    { name: "Менеджмент", href: "#" },
    { name: "Магистратура", href: "#" },
    { name: "Дополнительное образование", href: "#" },
  ];

  const socialLinks = [
    { name: "VKontakte", icon: "MessageCircle", href: "#" },
    { name: "Telegram", icon: "Send", href: "#" },
    { name: "YouTube", icon: "Play", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Institute Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 institute-gradient rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">АТиСО</h3>
                <p className="text-sm text-gray-400">
                  Институт экономики и права
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Качественное высшее образование в сфере экономики и права в
              историческом центре Севастополя.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon name={link.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Образование</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-gray-400 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-400">г. Севастополь</p>
                  <p className="text-gray-400">ул. Большая Морская, 47</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon
                  name="Phone"
                  size={16}
                  className="text-gray-400 flex-shrink-0"
                />
                <p className="text-gray-400">+7 (8692) 54-00-00</p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon
                  name="Mail"
                  size={16}
                  className="text-gray-400 flex-shrink-0"
                />
                <p className="text-gray-400">info@atiso-sev.ru</p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon
                  name="Clock"
                  size={16}
                  className="text-gray-400 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-400">Пн-Пт: 8:00-17:00</p>
                  <p className="text-gray-400">Сб: 9:00-15:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>
                &copy; 2024 Институт экономики и права (филиал) ОУП ВО "АТиСО".
                Все права защищены.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Лицензия № 2834
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
