
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-200 text-sm font-medium">
                <Icon name="Award" size={16} className="mr-2" />
                Аккредитованное образование
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Институт экономики и права
                <span className="block text-blue-300 text-2xl lg:text-3xl font-normal mt-2">
                  (филиал) ОУП ВО "АТиСО"
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Качественное высшее образование в сфере экономики и права 
                в историческом центре Севастополя. Готовим специалистов для успешной карьеры.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Подать документы
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальная экскурсия
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-600/30">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">15+</div>
                <div className="text-blue-200 text-sm">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">2000+</div>
                <div className="text-blue-200 text-sm">выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">95%</div>
                <div className="text-blue-200 text-sm">трудоустройство</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Современный университетский кампус"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Аккредитация</div>
                  <div className="text-sm text-gray-600">Гос. лицензия</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">450+</div>
                  <div className="text-sm text-gray-600">студентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
