// Connector Pro - Localization

const L10n = {
    currentLang: 'ru',

    strings: {
        ru: {
            'app.name': 'Connector',
            'app.tagline': 'Работа найдётся для каждого',
            'powered': 'Powered by FloorDSGN • Connector Pro',
            'close': 'Закрыть',
            'save': 'Сохранить',
            'cancel': 'Отмена',
            'ok': 'Ок',

            // Auth
            'auth.title': 'Подтвердите, что вы настоящий',
            'auth.sub': 'Иначе это станет фермой фейков',
            'auth.phone.placeholder': 'Номер телефона',
            'auth.send': 'Отправить код',
            'auth.code.placeholder': '6-значный код',
            'auth.verify': 'Подтвердить',
            'auth.back': '← Назад',
            'auth.error.phone': 'Введите номер телефона',
            'auth.error.code': 'Неверный код',

            // Role
            'role.title': 'Кто вы?',
            'role.worker': 'Ищу работу',
            'role.employer': 'Ищу работника',
            'logout': 'Выйти',

            // Tabs
            'tabs.shifts': 'Смены',
            'tabs.profile': 'Профиль',
            'tabs.dashboard': 'Панель',
            'tabs.favorites': 'Избранное',

            // Search
            'search.placeholder': 'Поиск: работа / город / компания',
            'filters.all': 'Все',
            'filters.today': 'Сегодня',
            'filters.tomorrow': 'Завтра',
            'filters.instant': 'Instant',

            // Worker Profile
            'profile.mandatory.title': 'Заполните анкету',
            'profile.mandatory.sub': '1–2 минуты. Так вас будут звать на смены.',
            'profile.worker.name': 'Имя и фамилия',
            'profile.worker.phone': 'Телефон',
            'profile.worker.age': 'Возраст',
            'profile.worker.city': 'Город',
            'profile.worker.spec': 'Специализация',
            'profile.worker.exp': 'Опыт (лет)',
            'profile.worker.rate': 'Ставка ₪/ч',
            'profile.worker.car': 'Есть автомобиль',
            'profile.worker.about': 'О себе',
            'profile.worker.submit': 'Создать профиль',
            'profile.stats.completed': 'Смен',
            'profile.stats.hours': 'Часов',
            'profile.stats.rating': 'Рейтинг',

            // Employer Profile
            'employer.mandatory.title': 'Анкета работодателя',
            'employer.mandatory.sub': 'Честно и прозрачно.',
            'employer.company': 'Компания',
            'employer.contact': 'Контактное лицо',
            'employer.phone': 'Телефон',
            'employer.city': 'Город',
            'employer.industry': 'Сфера',
            'employer.submit': 'Создать кабинет',

            // Shift
            'shift.details': 'Детали',
            'shift.apply': 'Откликнуться',
            'shift.sent': '✓ Отклик отправлен',
            'shift.requirements': 'Требования',
            'shift.rate': 'Ставка',
            'shift.date': 'Дата',
            'shift.time': 'Время',
            'shift.slots': 'Мест',
            'shift.city': 'Город',

            // Contact
            'contact.whatsapp': 'WhatsApp',
            'contact.call': 'Позвонить',
            'contact.msg.template': 'Привет! Я откликнулся на смену:',

            // Dashboard
            'dashboard.title': 'Панель',
            'dashboard.subtitle': 'Публикуйте смены и выбирайте людей',
            'dashboard.create.shift': '+ Создать смену',
            'dashboard.applications': 'Входящие отклики',
            'dashboard.applications.empty': 'Пока нет откликов',
            'dashboard.applications.approve': 'Принять',
            'dashboard.applications.reject': 'Отклонить',

            // Create Shift
            'create.shift.title': 'Создать смену',
            'create.shift.job.placeholder': 'Название работы',
            'create.shift.city.placeholder': 'Город',
            'create.shift.requirements.placeholder': 'Требования',
            'create.shift.instant': 'Срочная смена (Instant)',
            'create.shift.publish': 'Опубликовать',
            'create.shift.success': '✓ Смена создана!',

            // TaskFlow
            'taskflow.title': 'Мои задачи',
            'taskflow.empty': 'Нет активных задач',
            'taskflow.empty.sub': 'Откликнитесь на смену',
            'taskflow.applied': 'Отклик отправлен',
            'taskflow.approved': 'Одобрено',
            'taskflow.rejected': 'Отклонено',
            'taskflow.completed': 'Завершено',

            // Empty states
            'empty.shifts': 'Пока нет смен',
            'empty.shifts.sub': 'Проверьте позже',

            // Guide
            'guide.title': 'Мини-обучение',
            'guide.sub': 'Сделано так, чтобы вы быстрее начали зарабатывать.',
            'guide.section.core': 'Ключевая идея',
            'guide.core': 'Профиль → отклик → контакт → смена. Без бюрократии.',
            'guide.section.worker': 'Для работников',
            'guide.worker.1': 'Заполните профиль',
            'guide.worker.2': 'Включите Instant для срочных смен',
            'guide.worker.3': 'Пишите в WhatsApp по кнопке',
            'guide.done': 'Понял'
        },

        he: {
            'app.name': 'Connector',
            'app.tagline': 'עבודה לכל אחד',
            'powered': 'Powered by FloorDSGN • Connector Pro',
            'close': 'סגור',
            'save': 'שמור',
            'cancel': 'בטל',
            'ok': 'אוקי',

            'auth.title': 'אימות משתמש',
            'auth.sub': 'כדי שלא נהפוך לחוות פייקים',
            'auth.phone.placeholder': 'מספר טלפון',
            'auth.send': 'שלח קוד',
            'auth.code.placeholder': 'קוד בן 6 ספרות',
            'auth.verify': 'אימות',
            'auth.back': '← חזור',
            'auth.error.phone': 'הזן מספר טלפון',
            'auth.error.code': 'קוד שגוי',

            'role.title': 'מי אתה?',
            'role.worker': 'מחפש עבודה',
            'role.employer': 'מחפש עובד',
            'logout': 'התנתק',

            'tabs.shifts': 'משמרות',
            'tabs.profile': 'פרופיל',
            'tabs.dashboard': 'לוח',
            'tabs.favorites': 'מועדפים',

            'search.placeholder': 'חיפוש: עבודה / עיר / חברה',
            'filters.all': 'הכל',
            'filters.today': 'היום',
            'filters.tomorrow': 'מחר',
            'filters.instant': 'Instant',

            'profile.mandatory.title': 'מלא פרופיל',
            'profile.mandatory.sub': '1-2 דקות. ככה יקראו לך למשמרות.',
            'profile.worker.name': 'שם מלא',
            'profile.worker.phone': 'טלפון',
            'profile.worker.age': 'גיל',
            'profile.worker.city': 'עיר',
            'profile.worker.spec': 'התמחות',
            'profile.worker.exp': 'ניסיון (שנים)',
            'profile.worker.rate': 'שכר ₪/שעה',
            'profile.worker.car': 'יש רכב',
            'profile.worker.about': 'על עצמי',
            'profile.worker.submit': 'צור פרופיל',
            'profile.stats.completed': 'משמרות',
            'profile.stats.hours': 'שעות',
            'profile.stats.rating': 'דירוג',

            'employer.mandatory.title': 'פרטי מעסיק',
            'employer.mandatory.sub': 'בצורה שקופה וישרה.',
            'employer.company': 'חברה',
            'employer.contact': 'איש קשר',
            'employer.phone': 'טלפון',
            'employer.city': 'עיר',
            'employer.industry': 'תחום',
            'employer.submit': 'צור חשבון',

            'shift.details': 'פרטים',
            'shift.apply': 'הגש',
            'shift.sent': '✓ נשלח',
            'shift.requirements': 'דרישות',
            'shift.rate': 'שכר',
            'shift.date': 'תאריך',
            'shift.time': 'שעה',
            'shift.slots': 'מקומות',
            'shift.city': 'עיר',

            'contact.whatsapp': 'WhatsApp',
            'contact.call': 'התקשר',
            'contact.msg.template': 'היי! הגשתי למשמרת:',

            'dashboard.title': 'לוח בקרה',
            'dashboard.subtitle': 'פרסם משמרות ובחר עובדים',
            'dashboard.create.shift': '+ צור משמרת',
            'dashboard.applications': 'בקשות נכנסות',
            'dashboard.applications.empty': 'אין בקשות',
            'dashboard.applications.approve': 'אשר',
            'dashboard.applications.reject': 'דחה',

            'create.shift.title': 'צור משמרת',
            'create.shift.job.placeholder': 'שם העבודה',
            'create.shift.city.placeholder': 'עיר',
            'create.shift.requirements.placeholder': 'דרישות',
            'create.shift.instant': 'משמרת דחופה (Instant)',
            'create.shift.publish': 'פרסם',
            'create.shift.success': '✓ המשמרת נוצרה!',

            'taskflow.title': 'המשימות שלי',
            'taskflow.empty': 'אין משימות',
            'taskflow.empty.sub': 'הגש למשמרת',
            'taskflow.applied': 'נשלח',
            'taskflow.approved': 'אושר',
            'taskflow.rejected': 'נדחה',
            'taskflow.completed': 'הושלם',

            'empty.shifts': 'אין משמרות',
            'empty.shifts.sub': 'בדוק מאוחר יותר',

            'guide.title': 'מדריך',
            'guide.sub': 'כדי שתתחיל להרוויח מהר.',
            'guide.section.core': 'הרעיון',
            'guide.core': 'פרופיל → הגשה → קשר → משמרת.',
            'guide.section.worker': 'לעובדים',
            'guide.worker.1': 'מלא פרופיל',
            'guide.worker.2': 'הפעל Instant למשמרות דחופות',
            'guide.worker.3': 'כתוב ב-WhatsApp',
            'guide.done': 'הבנתי'
        },

        en: {
            'app.name': 'Connector',
            'app.tagline': 'Work for everyone',
            'powered': 'Powered by FloorDSGN • Connector Pro',
            'close': 'Close',
            'save': 'Save',
            'cancel': 'Cancel',
            'ok': 'OK',

            'auth.title': 'Verify you\'re real',
            'auth.sub': 'Otherwise it becomes a fake farm',
            'auth.phone.placeholder': 'Phone number',
            'auth.send': 'Send code',
            'auth.code.placeholder': '6-digit code',
            'auth.verify': 'Verify',
            'auth.back': '← Back',
            'auth.error.phone': 'Enter phone number',
            'auth.error.code': 'Wrong code',

            'role.title': 'Who are you?',
            'role.worker': 'Looking for work',
            'role.employer': 'Looking for worker',
            'logout': 'Log out',

            'tabs.shifts': 'Shifts',
            'tabs.profile': 'Profile',
            'tabs.dashboard': 'Dashboard',
            'tabs.favorites': 'Favorites',

            'search.placeholder': 'Search: job / city / company',
            'filters.all': 'All',
            'filters.today': 'Today',
            'filters.tomorrow': 'Tomorrow',
            'filters.instant': 'Instant',

            'profile.mandatory.title': 'Complete your profile',
            'profile.mandatory.sub': '1-2 minutes. So employers know who you are.',
            'profile.worker.name': 'Full name',
            'profile.worker.phone': 'Phone',
            'profile.worker.age': 'Age',
            'profile.worker.city': 'City',
            'profile.worker.spec': 'Specialization',
            'profile.worker.exp': 'Experience (years)',
            'profile.worker.rate': 'Rate ₪/h',
            'profile.worker.car': 'Has car',
            'profile.worker.about': 'About me',
            'profile.worker.submit': 'Create profile',
            'profile.stats.completed': 'Shifts',
            'profile.stats.hours': 'Hours',
            'profile.stats.rating': 'Rating',

            'employer.mandatory.title': 'Employer profile',
            'employer.mandatory.sub': 'Be transparent.',
            'employer.company': 'Company',
            'employer.contact': 'Contact person',
            'employer.phone': 'Phone',
            'employer.city': 'City',
            'employer.industry': 'Industry',
            'employer.submit': 'Create account',

            'shift.details': 'Details',
            'shift.apply': 'Apply',
            'shift.sent': '✓ Applied',
            'shift.requirements': 'Requirements',
            'shift.rate': 'Rate',
            'shift.date': 'Date',
            'shift.time': 'Time',
            'shift.slots': 'Slots',
            'shift.city': 'City',

            'contact.whatsapp': 'WhatsApp',
            'contact.call': 'Call',
            'contact.msg.template': 'Hi! I applied for:',

            'dashboard.title': 'Dashboard',
            'dashboard.subtitle': 'Post shifts and choose workers',
            'dashboard.create.shift': '+ Create shift',
            'dashboard.applications': 'Applications',
            'dashboard.applications.empty': 'No applications yet',
            'dashboard.applications.approve': 'Approve',
            'dashboard.applications.reject': 'Reject',

            'create.shift.title': 'Create shift',
            'create.shift.job.placeholder': 'Job title',
            'create.shift.city.placeholder': 'City',
            'create.shift.requirements.placeholder': 'Requirements',
            'create.shift.instant': 'Urgent shift (Instant)',
            'create.shift.publish': 'Publish',
            'create.shift.success': '✓ Shift created!',

            'taskflow.title': 'My tasks',
            'taskflow.empty': 'No tasks',
            'taskflow.empty.sub': 'Apply to a shift',
            'taskflow.applied': 'Applied',
            'taskflow.approved': 'Approved',
            'taskflow.rejected': 'Rejected',
            'taskflow.completed': 'Completed',

            'empty.shifts': 'No shifts',
            'empty.shifts.sub': 'Check back later',

            'guide.title': 'Quick guide',
            'guide.sub': 'To help you earn faster.',
            'guide.section.core': 'Core idea',
            'guide.core': 'Profile → Apply → Contact → Shift.',
            'guide.section.worker': 'For workers',
            'guide.worker.1': 'Complete your profile',
            'guide.worker.2': 'Enable Instant for urgent shifts',
            'guide.worker.3': 'Message on WhatsApp',
            'guide.done': 'Got it'
        },

        ar: {
            'app.name': 'Connector',
            'app.tagline': 'عمل للجميع',
            'powered': 'Powered by FloorDSGN • Connector Pro',
            'close': 'إغلاق',
            'save': 'حفظ',
            'cancel': 'إلغاء',
            'ok': 'حسناً',

            'auth.title': 'تحقق من هويتك',
            'auth.sub': 'لنتجنب الحسابات الوهمية',
            'auth.phone.placeholder': 'رقم الهاتف',
            'auth.send': 'إرسال الكود',
            'auth.code.placeholder': 'كود من 6 أرقام',
            'auth.verify': 'تحقق',
            'auth.back': '← رجوع',
            'auth.error.phone': 'أدخل رقم الهاتف',
            'auth.error.code': 'كود خاطئ',

            'role.title': 'من أنت؟',
            'role.worker': 'أبحث عن عمل',
            'role.employer': 'أبحث عن عامل',
            'logout': 'تسجيل الخروج',

            'tabs.shifts': 'المناوبات',
            'tabs.profile': 'الملف',
            'tabs.dashboard': 'لوحة التحكم',
            'tabs.favorites': 'المفضلة',

            'search.placeholder': 'بحث: عمل / مدينة / شركة',
            'filters.all': 'الكل',
            'filters.today': 'اليوم',
            'filters.tomorrow': 'غداً',
            'filters.instant': 'عاجل',

            'profile.mandatory.title': 'أكمل ملفك',
            'profile.mandatory.sub': '1-2 دقيقة. ليعرف أصحاب العمل من أنت.',
            'profile.worker.name': 'الاسم الكامل',
            'profile.worker.phone': 'الهاتف',
            'profile.worker.age': 'العمر',
            'profile.worker.city': 'المدينة',
            'profile.worker.spec': 'التخصص',
            'profile.worker.exp': 'الخبرة (سنوات)',
            'profile.worker.rate': 'الأجر ₪/ساعة',
            'profile.worker.car': 'لدي سيارة',
            'profile.worker.about': 'عني',
            'profile.worker.submit': 'إنشاء الملف',
            'profile.stats.completed': 'مناوبات',
            'profile.stats.hours': 'ساعات',
            'profile.stats.rating': 'التقييم',

            'employer.mandatory.title': 'ملف صاحب العمل',
            'employer.mandatory.sub': 'بشفافية ووضوح.',
            'employer.company': 'الشركة',
            'employer.contact': 'جهة الاتصال',
            'employer.phone': 'الهاتف',
            'employer.city': 'المدينة',
            'employer.industry': 'المجال',
            'employer.submit': 'إنشاء الحساب',

            'shift.details': 'التفاصيل',
            'shift.apply': 'تقديم',
            'shift.sent': '✓ تم التقديم',
            'shift.requirements': 'المتطلبات',
            'shift.rate': 'الأجر',
            'shift.date': 'التاريخ',
            'shift.time': 'الوقت',
            'shift.slots': 'الأماكن',
            'shift.city': 'المدينة',

            'contact.whatsapp': 'WhatsApp',
            'contact.call': 'اتصال',
            'contact.msg.template': 'مرحباً! تقدمت لـ:',

            'dashboard.title': 'لوحة التحكم',
            'dashboard.subtitle': 'انشر المناوبات واختر العمال',
            'dashboard.create.shift': '+ إنشاء مناوبة',
            'dashboard.applications': 'الطلبات الواردة',
            'dashboard.applications.empty': 'لا توجد طلبات',
            'dashboard.applications.approve': 'قبول',
            'dashboard.applications.reject': 'رفض',

            'create.shift.title': 'إنشاء مناوبة',
            'create.shift.job.placeholder': 'عنوان العمل',
            'create.shift.city.placeholder': 'المدينة',
            'create.shift.requirements.placeholder': 'المتطلبات',
            'create.shift.instant': 'مناوبة عاجلة (Instant)',
            'create.shift.publish': 'نشر',
            'create.shift.success': '✓ تم إنشاء المناوبة!',

            'taskflow.title': 'مهامي',
            'taskflow.empty': 'لا توجد مهام',
            'taskflow.empty.sub': 'تقدم لمناوبة',
            'taskflow.applied': 'تم التقديم',
            'taskflow.approved': 'تمت الموافقة',
            'taskflow.rejected': 'مرفوض',
            'taskflow.completed': 'مكتمل',

            'empty.shifts': 'لا توجد مناوبات',
            'empty.shifts.sub': 'تحقق لاحقاً',

            'guide.title': 'دليل سريع',
            'guide.sub': 'لمساعدتك على الكسب بسرعة.',
            'guide.section.core': 'الفكرة الأساسية',
            'guide.core': 'ملف ← تقديم ← تواصل ← عمل.',
            'guide.section.worker': 'للعمال',
            'guide.worker.1': 'أكمل ملفك',
            'guide.worker.2': 'فعّل Instant للمناوبات العاجلة',
            'guide.worker.3': 'تواصل عبر WhatsApp',
            'guide.done': 'فهمت'
        }
    },

    t(key) {
        return this.strings[this.currentLang]?.[key] || this.strings['ru']?.[key] || key;
    },

    setLang(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);

        // Set direction
        const isRTL = lang === 'he' || lang === 'ar';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Update all text
        this.updateUI();

        // Update active lang button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    },

    updateUI() {
        // Update text content
        document.querySelectorAll('[data-l10n]').forEach(el => {
            el.textContent = this.t(el.dataset.l10n);
        });

        // Update placeholders
        document.querySelectorAll('[data-l10n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.dataset.l10nPlaceholder);
        });
    },

    init() {
        const savedLang = localStorage.getItem('lang') || 'ru';
        this.setLang(savedLang);
    }
};
