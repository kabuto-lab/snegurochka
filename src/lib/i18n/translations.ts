export type LangCode = "ru" | "en" | "cn";

export interface Translation {
  nav: {
    links: string[];
    vacancies: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    phone: string;
  };
  hero: {
    slides: {
      eyebrow: string;
      title: string;
      sub: string;
      note: string;
      cta: string;
    }[];
  };
  lottery: {
    eyebrow: string;
    heading: string;
    subheading: string;
    revealLabel: string;
    revealBackLabel: string;
    cta: string;
    gifts: {
      badge: string | null;
      price: string;
      title: string;
      items: string[];
    }[];
  };
  newYear: {
    heading: string;
    subheading: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    cta: string;
    rates: { label: string; price: string }[];
  };
  massageBanner: {
    eyebrow: string;
    title: string;
    textBefore: string;
    codeword: string;
    textAfter: string;
    cta: string;
  };
  vip: {
    heading: string;
    subheading: string;
    vipBadge: string;
    cta: string;
    offers: {
      title: string;
      duration: string;
      description: string;
      items: string[];
      footnote: string;
    }[];
  };
  additionally: {
    heading: string;
    fromLabel: string;
    addons: { name: string }[];
  };
  salons: {
    heading: string;
    hoursLabel: string;
    cta: string;
    salons: { label: string; name: string; body: string; address: string }[];
  };
  footer: {
    links: string[];
    copyright: string;
    ageBadge: string;
    disclaimer: string;
  };
  vacancies: {
    eyebrow: string;
    heading: string;
    subheading: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    roleLabel: string;
    rolePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    optional: string;
    consent: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    errors: {
      required: string;
      phone: string;
      email: string;
      consent: string;
      server: string;
    };
  };
}

export const TRANSLATIONS: Record<LangCode, Translation> = {
  ru: {
    nav: {
      links: ["Сертификаты", "Lounge", "VIP", "Программы"],
      vacancies: "Вакансии",
      cta: "Записаться",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      phone: "+7 916 007-32-59",
    },
    hero: {
      slides: [
        {
          eyebrow: "Новогодние праздники со Снегурочками",
          title: "Подарочный сертификат",
          sub: "Лучший сюрприз на Новый год",
          note: "Работаем все праздники 24/7",
          cta: "Записаться",
        },
        {
          eyebrow: "Lounge-пространство",
          title: "Новогодняя вечеринка",
          sub: "Фуршет, музыка и тёплая компания",
          note: "Начните вечер в атмосферном пространстве",
          cta: "Заказать VIP-браслет",
        },
        {
          eyebrow: "Эксклюзивно на новогоднюю ночь",
          title: "Три Короля",
          sub: "Приватная программа с тремя Снегурочками",
          note: "Доступно только по предварительной записи",
          cta: "Подробнее",
        },
      ],
    },
    lottery: {
      eyebrow: "С 15 декабря по 15 января вас ждёт",
      heading: "Марафон подарков",
      subheading: "Какой подарок ждёт именно вас — нажмите на карточку",
      revealLabel: "Подарок",
      revealBackLabel: "Что внутри",
      cta: "Записаться",
      gifts: [
        {
          badge: null,
          price: "Для программ от 10 000 ₽",
          title: "Праздничный набор",
          items: [
            "Термокружка с зимним принтом",
            "Мини-адвент с уходовыми миниатюрами",
            "Скидка 10% на повторный визит",
          ],
        },
        {
          badge: "Выгоднее",
          price: "Для программ от 20 000 ₽ и более",
          title: "Расширенный набор",
          items: [
            "Всё из набора «от 10 000 ₽»",
            "VIP-бокс с уходовой косметикой",
            "Пригласительный на новогоднюю вечеринку",
          ],
        },
      ],
    },
    newYear: {
      heading: "Новогодняя вечеринка",
      subheading: "Начните вечер в атмосферном Lounge-пространстве",
      step1Title: "Вас ждёт",
      step1Body:
        "Фуршет с разнообразными закусками, декором и лёгкой атмосферой. Приятная компания и тёплый приём — от входа до финала вечера.",
      step2Title: "Тарифы на отдых в Lounge-зоне",
      cta: "Заказать VIP-браслет",
      rates: [
        { label: "Guest Pass · 60 мин", price: "10 000 ₽" },
        { label: "Guest Pass · 120 мин", price: "18 000 ₽" },
        { label: "Lounge Table · компания", price: "от 25 000 ₽" },
      ],
    },
    massageBanner: {
      eyebrow: "Подарок к программе",
      title: "Массаж в 4 руки в подарок",
      textBefore: "К любой программе по кодовому слову «",
      codeword: "Снегурочка",
      textAfter: "»",
      cta: "Записаться",
    },
    vip: {
      heading: "В новогоднюю ночь вас ждут эксклюзивные предложения",
      subheading: "*доступны только по предварительной записи",
      vipBadge: "VIP",
      cta: "Подробнее",
      offers: [
        {
          title: "Три Короля",
          duration: "180 минут",
          description:
            "Идеальный выбор для новогодней ночи: приватная комната, музыка, лёгкий фуршет и забота трёх очаровательных Снегурочек — от тёплой встречи до расслабляющего финала.",
          items: [
            "120 минут вечеринки в Lounge-зоне или приватном пространстве",
            "Фуршет и праздничный декор",
            "Бутылка игристого в подарок",
            "Часовая массажная программа для каждого гостя",
          ],
          footnote:
            "*Приглашение дополнительной Снегурочки +33 333 ₽ (по запросу)",
        },
        {
          title: "Три Короля VIP",
          duration: "180 минут",
          description:
            "Расширенная версия легендарного формата: увеличенный фуршет, приватная спа-зона и персональный час массажа для каждого гостя — с премиальной подачей и вниманием к деталям.",
          items: [
            "120 минут вечеринки в Lounge-зоне или приватном пространстве",
            "Расширенный фуршет и праздничный декор",
            "Бутылка игристого в подарок",
            "Часовая массажная программа для каждого гостя",
            "Тематический дресс-код по договорённости",
          ],
          footnote:
            "*Приглашение дополнительной Снегурочки +66 666 ₽ (по запросу)",
        },
      ],
    },
    additionally: {
      heading: "Дополнительно в салоне",
      fromLabel: "от",
      addons: [
        { name: "Бар" },
        { name: "Еда" },
        { name: "Сауна" },
        { name: "Джакузи" },
      ],
    },
    salons: {
      heading: "Выберите салон",
      hoursLabel: "Открыты 24 часа.",
      cta: "Забронировать",
      salons: [
        {
          label: "SOHO",
          name: "SOHO",
          body: "Soho – знают толк в чувственных удовольствиях. Дизайнерские интерьеры, сауна, хамам не только для индивидуального посещения, но и для большой компании, продуманные программы и только самые красивые девушки столицы — всё это и не только вы найдете в центре Москвы, на Малом Харитоньевском переулке, рядом с метро Красные ворота. Ждём вас!",
          address: "Малый Харитоньевский переулок, 9/13 с5",
        },
        {
          label: "Barbie",
          name: "Barbie SPA",
          body: "Barbie – spa-салон для мужчин, которые знают толк в чувственных удовольствиях. Дизайнерские интерьеры, сауна, хамам не только для индивидуального посещения, но и для большой компании, продуманные программы и только самые красивые девушки столицы — всё это и не только вы найдете в центре Москвы. Ждём вас!",
          address: "Каланчевская 32/58 с1",
        },
        {
          label: "Imperium",
          name: "Imperium",
          body: "Империум - трёхэтажные апартаменты с джакузи, 3 саунами и 3 хаммамами в греческом стиле. Девушки встретят тебя в стильных нарядах греческих жриц. Империум - это возможность окунуться в мир, где любая фантазия станет реальностью! Самый центр Москвы в живописном районе Чистых Прудов - это современный олимп со всеми удобствами. Бесплатная парковка и работа 24 часа.",
          address: "Мясницкая улица, 41В",
        },
        {
          label: "Vanilia",
          name: "Vanilia",
          body: "Ванилия - трёхэтажное заведение с апартаментами от стандартных до VIP. На входе громкая музыка, ведь здесь никогда не спят и рады каждому! Девушек, как и вариантов отдыха, очень много. Вкусные кальяны и непередаваемая атмосфера. 3 индивидуальных хаммама и 1 большой для весёлой шумной компании гостей (до 15 человек). Для вашего удобства есть парковка. Открыты 24 часа.",
          address: "Лучников переулок, 7/4с5",
        },
      ],
    },
    footer: {
      links: ["Сертификаты", "Lounge", "VIP", "Программы"],
      copyright:
        "© 2026. Сезонное предложение сети салонов. Не является услугой интимного характера. 18+",
      ageBadge: "18+",
      disclaimer: "СЕЗОННОЕ ПРЕДЛОЖЕНИЕ · НЕ ЯВЛЯЕТСЯ ИНТИМ-УСЛУГОЙ",
    },
    vacancies: {
      eyebrow: "Работа в команде",
      heading: "Вакансии",
      subheading:
        "Оставьте заявку — мы свяжемся с вами, расскажем об условиях и ответим на вопросы.",
      nameLabel: "Имя",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      roleLabel: "Интересующая роль",
      rolePlaceholder: "Например, администратор",
      messageLabel: "Дополнительная информация",
      messagePlaceholder: "Опыт работы, удобный график, удобное время для звонка",
      optional: "необязательно",
      consent:
        "Я согласен(на) с условиями обработки персональных данных и политикой конфиденциальности",
      submit: "Отправить заявку",
      submitting: "Отправляем…",
      successTitle: "Заявка отправлена",
      successBody: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      sendAnother: "Отправить ещё одну",
      errors: {
        required: "Заполните это поле",
        phone: "Введите корректный номер телефона",
        email: "Введите корректный email",
        consent: "Необходимо согласие на обработку данных",
        server: "Не удалось отправить заявку. Попробуйте ещё раз.",
      },
    },
  },
  en: {
    nav: {
      links: ["Certificates", "Lounge", "VIP", "Programs"],
      vacancies: "Careers",
      cta: "Book now",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      phone: "+7 916 007-32-59",
    },
    hero: {
      slides: [
        {
          eyebrow: "New Year celebrations with the Snow Maidens",
          title: "Gift certificate",
          sub: "The best surprise for New Year",
          note: "Open all holidays, 24/7",
          cta: "Book now",
        },
        {
          eyebrow: "Lounge space",
          title: "New Year party",
          sub: "Buffet, music and warm company",
          note: "Start your evening in an atmospheric space",
          cta: "Order a VIP bracelet",
        },
        {
          eyebrow: "Exclusive for New Year's Eve",
          title: "Three Kings",
          sub: "A private program with three Snow Maidens",
          note: "Available by advance booking only",
          cta: "Learn more",
        },
      ],
    },
    lottery: {
      eyebrow: "From December 15 to January 15, a gift awaits you",
      heading: "Gift marathon",
      subheading: "Which gift is waiting for you — click the card",
      revealLabel: "Gift",
      revealBackLabel: "What's inside",
      cta: "Book now",
      gifts: [
        {
          badge: null,
          price: "For programs from 10,000 ₽",
          title: "Festive set",
          items: [
            "Thermal mug with a winter print",
            "Mini advent set with skincare miniatures",
            "10% discount on your next visit",
          ],
        },
        {
          badge: "Better value",
          price: "For programs from 20,000 ₽ and up",
          title: "Extended set",
          items: [
            "Everything from the “from 10,000 ₽” set",
            "VIP box with skincare cosmetics",
            "Invitation to the New Year party",
          ],
        },
      ],
    },
    newYear: {
      heading: "New Year party",
      subheading: "Start your evening in an atmospheric lounge space",
      step1Title: "What awaits you",
      step1Body:
        "A buffet with a variety of snacks, décor and a light atmosphere. Pleasant company and a warm welcome — from the moment you arrive to the very end of the night.",
      step2Title: "Lounge zone rates",
      cta: "Order a VIP bracelet",
      rates: [
        { label: "Guest Pass · 60 min", price: "10,000 ₽" },
        { label: "Guest Pass · 120 min", price: "18,000 ₽" },
        { label: "Lounge Table · group", price: "from 25,000 ₽" },
      ],
    },
    massageBanner: {
      eyebrow: "Gift with any program",
      title: "Free four-hand massage",
      textBefore: "With any program, using the code word “",
      codeword: "Snegurochka",
      textAfter: "”",
      cta: "Book now",
    },
    vip: {
      heading: "Exclusive offers await you on New Year's Eve",
      subheading: "*available by advance booking only",
      vipBadge: "VIP",
      cta: "Learn more",
      offers: [
        {
          title: "Three Kings",
          duration: "180 minutes",
          description:
            "The perfect choice for New Year's Eve: a private room, music, a light buffet and the care of three charming Snow Maidens — from a warm welcome to a relaxing finale.",
          items: [
            "120 minutes of partying in the lounge zone or a private space",
            "Buffet and festive décor",
            "A complimentary bottle of sparkling wine",
            "A one-hour massage program for every guest",
          ],
          footnote:
            "*Inviting an extra Snow Maiden costs +33,333 ₽ (on request)",
        },
        {
          title: "Three Kings VIP",
          duration: "180 minutes",
          description:
            "An expanded version of the legendary format: a bigger buffet, a private spa zone and a personal hour of massage for every guest — with premium service and attention to detail.",
          items: [
            "120 minutes of partying in the lounge zone or a private space",
            "Extended buffet and festive décor",
            "A complimentary bottle of sparkling wine",
            "A one-hour massage program for every guest",
            "Themed dress code, by arrangement",
          ],
          footnote:
            "*Inviting an extra Snow Maiden costs +66,666 ₽ (on request)",
        },
      ],
    },
    additionally: {
      heading: "Also available at the salon",
      fromLabel: "from",
      addons: [
        { name: "Bar" },
        { name: "Food" },
        { name: "Sauna" },
        { name: "Jacuzzi" },
      ],
    },
    salons: {
      heading: "Choose a salon",
      hoursLabel: "Open 24 hours.",
      cta: "Book now",
      salons: [
        {
          label: "SOHO",
          name: "SOHO",
          body: "Soho knows a thing or two about sensual pleasures. Designer interiors, a sauna and hammam for both individual guests and larger groups, thoughtfully designed programs and only the most beautiful girls in the capital — all this and more await you in the centre of Moscow, on Maly Kharitonyevsky Lane, right by Krasnye Vorota metro station. We look forward to seeing you!",
          address: "Maly Kharitonyevsky Lane, 9/13 building 5, Moscow",
        },
        {
          label: "Barbie",
          name: "Barbie SPA",
          body: "Barbie is a spa salon for men who know a thing or two about sensual pleasures. Designer interiors, a sauna and hammam for both individual guests and larger groups, thoughtfully designed programs and only the most beautiful girls in the capital — all this and more await you in the centre of Moscow. We look forward to seeing you!",
          address: "Kalanchevskaya St. 32/58 building 1, Moscow",
        },
        {
          label: "Imperium",
          name: "Imperium",
          body: "Imperium is a three-storey suite with a jacuzzi, 3 saunas and 3 hammams in a Greek style. The girls will greet you dressed as stylish Greek priestesses. Imperium is your chance to step into a world where any fantasy becomes reality! Right in the heart of Moscow, in the picturesque Chistye Prudy area, it's a modern Olympus with every comfort. Free parking and open 24 hours.",
          address: "Myasnitskaya St. 41B, Moscow",
        },
        {
          label: "Vanilia",
          name: "Vanilia",
          body: "Vanilia is a three-storey venue with suites ranging from standard to VIP. Loud music greets you at the door, because here the party never sleeps and everyone is welcome! There's no shortage of girls or ways to unwind. Delicious hookahs and an unforgettable atmosphere. 3 individual hammams plus 1 large one for a lively group of guests (up to 15 people). Parking available for your convenience. Open 24 hours.",
          address: "Luchnikov Lane, 7/4 building 5, Moscow",
        },
      ],
    },
    footer: {
      links: ["Certificates", "Lounge", "VIP", "Programs"],
      copyright:
        "© 2026. A seasonal offer from our salon network. Not an intimate service. 18+",
      ageBadge: "18+",
      disclaimer: "SEASONAL OFFER · NOT AN INTIMATE SERVICE",
    },
    vacancies: {
      eyebrow: "Join our team",
      heading: "Careers",
      subheading:
        "Leave an application — we'll get in touch, tell you about the terms and answer your questions.",
      nameLabel: "Name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      roleLabel: "Role of interest",
      rolePlaceholder: "For example, administrator",
      messageLabel: "Additional information",
      messagePlaceholder: "Work experience, preferred schedule, best time to call",
      optional: "optional",
      consent:
        "I agree to the terms of personal data processing and the privacy policy",
      submit: "Submit application",
      submitting: "Sending…",
      successTitle: "Application sent",
      successBody: "Thank you! We'll get in touch with you shortly.",
      sendAnother: "Send another",
      errors: {
        required: "Please fill in this field",
        phone: "Please enter a valid phone number",
        email: "Please enter a valid email",
        consent: "Consent to data processing is required",
        server: "Couldn't send the application. Please try again.",
      },
    },
  },
  cn: {
    nav: {
      links: ["礼品卡", "休闲区", "VIP", "项目"],
      vacancies: "招聘",
      cta: "立即预约",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      phone: "+7 916 007-32-59",
    },
    hero: {
      slides: [
        {
          eyebrow: "与雪姑娘共度新年庆典",
          title: "礼品卡",
          sub: "新年最佳惊喜",
          note: "节日期间24小时营业",
          cta: "立即预约",
        },
        {
          eyebrow: "休闲空间",
          title: "新年派对",
          sub: "自助餐、音乐与温馨陪伴",
          note: "在氛围空间中开启夜晚",
          cta: "预订VIP手环",
        },
        {
          eyebrow: "跨年之夜限定",
          title: "三王之夜",
          sub: "与三位雪姑娘的私人项目",
          note: "仅限提前预约",
          cta: "了解更多",
        },
      ],
    },
    lottery: {
      eyebrow: "12月15日至1月15日期间，惊喜好礼等您来",
      heading: "礼物马拉松",
      subheading: "点击卡片，揭晓属于您的礼物",
      revealLabel: "礼物",
      revealBackLabel: "礼物详情",
      cta: "立即预约",
      gifts: [
        {
          badge: null,
          price: "适用于10,000卢布及以上项目",
          title: "节日礼包",
          items: [
            "冬季图案保温杯",
            "护肤迷你礼盒（圣诞倒数款）",
            "下次到访享9折优惠",
          ],
        },
        {
          badge: "超值",
          price: "适用于20,000卢布及以上项目",
          title: "豪华礼包",
          items: [
            "包含“10,000卢布”礼包全部内容",
            "VIP护肤礼盒",
            "新年派对邀请函",
          ],
        },
      ],
    },
    newYear: {
      heading: "新年派对",
      subheading: "在氛围休闲空间中开启夜晚",
      step1Title: "为您呈现",
      step1Body:
        "丰富多样的自助餐点、精美装饰与轻松氛围。愉悦的陪伴与热情的接待——从入场到夜晚结束，始终如一。",
      step2Title: "休闲区价目表",
      cta: "预订VIP手环",
      rates: [
        { label: "宾客通行证 · 60分钟", price: "10,000 ₽" },
        { label: "宾客通行证 · 120分钟", price: "18,000 ₽" },
        { label: "休闲卡座 · 团体", price: "25,000卢布起" },
      ],
    },
    massageBanner: {
      eyebrow: "任意项目附赠礼遇",
      title: "免费四手按摩",
      textBefore: "任意项目，凭暗号“",
      codeword: "Snegurochka",
      textAfter: "”",
      cta: "立即预约",
    },
    vip: {
      heading: "跨年之夜，专属礼遇等您体验",
      subheading: "*仅限提前预约",
      vipBadge: "VIP",
      cta: "了解更多",
      offers: [
        {
          title: "三王之夜",
          duration: "180分钟",
          description:
            "跨年之夜的完美之选：私人房间、音乐、精致自助餐，以及三位迷人雪姑娘的悉心照料——从热情迎接到放松尾声，尽享其中。",
          items: [
            "120分钟休闲区或私人空间派对",
            "自助餐与节日装饰",
            "赠送一瓶起泡酒",
            "每位宾客享一小时按摩项目",
          ],
          footnote:
            "*额外邀请一位雪姑娘需加收33,333卢布（可应要求安排）",
        },
        {
          title: "三王之夜 VIP",
          duration: "180分钟",
          description:
            "经典项目的升级版本：更丰盛的自助餐、私人水疗区，以及每位宾客专属的一小时按摩——尊享品质服务，细节尽善尽美。",
          items: [
            "120分钟休闲区或私人空间派对",
            "升级自助餐与节日装饰",
            "赠送一瓶起泡酒",
            "每位宾客享一小时按摩项目",
            "主题着装（可另行协商）",
          ],
          footnote:
            "*额外邀请一位雪姑娘需加收66,666卢布（可应要求安排）",
        },
      ],
    },
    additionally: {
      heading: "会所增值服务",
      fromLabel: "起",
      addons: [
        { name: "酒吧" },
        { name: "餐食" },
        { name: "桑拿" },
        { name: "按摩浴缸" },
      ],
    },
    salons: {
      heading: "选择会所",
      hoursLabel: "24小时营业。",
      cta: "立即预订",
      salons: [
        {
          label: "SOHO",
          name: "SOHO",
          body: "Soho深谙感官愉悦之道。设计感十足的空间、桑拿房和土耳其浴室，既可单人体验，也可多人共享；精心设计的项目，以及首都最美丽的女孩们——这一切，尽在莫斯科市中心、靠近红门地铁站的小哈里托尼耶夫斯基巷恭候您的光临！",
          address: "Maly Kharitonyevsky Lane, 9/13号5栋，莫斯科",
        },
        {
          label: "Barbie",
          name: "Barbie SPA",
          body: "Barbie是一家专为深谙感官愉悦之道的男士打造的水疗会所。设计感十足的空间、桑拿房和土耳其浴室，既可单人体验，也可多人共享；精心设计的项目，以及首都最美丽的女孩们——这一切，尽在莫斯科市中心恭候您的光临！",
          address: "Kalanchevskaya大街32/58号1栋，莫斯科",
        },
        {
          label: "Imperium",
          name: "Imperium",
          body: "Imperium是一栋三层公寓式会所，配备按摩浴缸、3间桑拿房和3间希腊风格土耳其浴室。女孩们将身着时尚希腊女祭司服饰迎接您的到来。Imperium带您步入一个任何幻想皆可成真的世界！坐落于莫斯科市中心风景如画的净水塘地区，如同一座设施齐全的现代奥林匹斯山。提供免费停车，24小时营业。",
          address: "Myasnitskaya大街41B号，莫斯科",
        },
        {
          label: "Vanilia",
          name: "Vanilia",
          body: "Vanilia是一栋三层场所，房型从标准间到VIP套房一应俱全。刚进门就能听到动感音乐——这里派对永不停歇，欢迎每一位客人！女孩众多，放松方式也丰富多样。美味水烟与难忘氛围相得益彰。设有3间独立土耳其浴室，另有1间大型浴室可供热闹的团体客人（最多15人）使用。设有停车场，方便您的出行。24小时营业。",
          address: "Luchnikov巷7/4号5栋，莫斯科",
        },
      ],
    },
    footer: {
      links: ["礼品卡", "休闲区", "VIP", "项目"],
      copyright:
        "© 2026年。本会所网络季节性优惠活动。不涉及任何亲密性质服务。18+",
      ageBadge: "18+",
      disclaimer: "季节性优惠 · 不涉及亲密服务",
    },
    vacancies: {
      eyebrow: "加入我们的团队",
      heading: "招聘",
      subheading: "请留下您的申请——我们将与您联系，介绍工作条件并解答您的问题。",
      nameLabel: "姓名",
      phoneLabel: "电话",
      emailLabel: "电子邮箱",
      roleLabel: "意向职位",
      rolePlaceholder: "例如：管理员",
      messageLabel: "补充信息",
      messagePlaceholder: "工作经验、期望的工作时间、方便接听电话的时间",
      optional: "选填",
      consent: "我同意个人数据处理条款及隐私政策",
      submit: "提交申请",
      submitting: "正在提交…",
      successTitle: "申请已提交",
      successBody: "谢谢！我们会尽快与您联系。",
      sendAnother: "再提交一份",
      errors: {
        required: "请填写此项",
        phone: "请输入有效的电话号码",
        email: "请输入有效的电子邮箱",
        consent: "请同意个人数据处理条款",
        server: "提交失败，请重试。",
      },
    },
  },
};
